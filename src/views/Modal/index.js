import React from "react";
import PropTypes from "prop-types";
import "./modal.css";
import PosSelections from "../../assets/part-of-speech.json";
import Languages from "../../assets/languages.json";
import { WordComponent, LanguageComponent, ListComponent, PartOfSpeechComponent } from "./controlled-components";

class Modal extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            ...this.props.editoverwrote,
            "term-description": "",
            "term-language": Languages[0].value,
            "reference-href": "",
            "reference-text": "",
        };
    }
    shall_we_close(e)
    {
        const clicked_on_overlay = e.target === e.currentTarget;
        const clicked_on_close_button = Boolean( e.target.dataset.closeModal );
        if( clicked_on_overlay || clicked_on_close_button )
        {
            this.props.toggle();
        }
    }
    change_state(event)
    {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }
    get_terms()
    {
        return {
            set_items: {
                pos: this.state.pos,
                description: [{
                    description: this.state["term-description"],
                    language: this.state["term-language"],
                }],
            },
            inited_state: { ["term-description"]: "", ["term-language"]: Languages[0].value, pos: PosSelections[0].value, }
        };
    }
    get_references()
    {
        return {
            set_items: { href: this.state["reference-href"], text: this.state["reference-text"], },
            inited_state: { ["reference-href"]: "", ["reference-text"]: "" }
        };
    }
    push_array(key)
    {
        let payload = { set_items: {}, inited_state: {} };
        switch (key)
        {
        case "terms":
            payload = this.get_terms();
            break;
        case "references":
            payload = this.get_references();
            break;
        default:
            break;
        }
        this.state[key].push( payload.set_items );
        this.setState( payload.inited_state );
    }
    add_entry(event)
    {
        const data_keys = ["word", "language", "terms", "references"];
        const params = Object.fromEntries(
            data_keys.map( key => [key, event.target.elements[key].value] )
        );
        event.preventDefault();
        this.props.add(params);
    }
    delete_item(event, state_name, id)
    {
        const list = [...this.state[state_name]];
        list.splice(id, 1);
        this.setState({ [state_name]: list });
    }
    render()
    {
        const disable_condition = this.state.terms.length < 1 || this.state.word.trim() === "";
        const title_text = this.props.editmode ? "Update the entry" : "Add an entry";
        const submit_text = this.props.editmode ? "Update entry" : "Add entry";
        const form = (<form onSubmit={ e => this.add_entry(e) }>
            <div className="word is-row">
                { WordComponent({ word: this.state.word, changeState: this.change_state.bind(this) }) }
                {   // https://stackoverflow.com/a/42327128
                    LanguageComponent({ stateName: "language", stateValue: this.state.language, changeState: this.change_state.bind(this) })
                }
            </div>
            <div className="terms is-row">
                <input id="terms" type="hidden" name="terms" value={ JSON.stringify(this.state.terms) } />
                <div className="form-item is-col is-50">
                    <label htmlFor="term-description">Terms: Description</label>
                    <input id="term-description" type="text" name="term-description" value={ this.state["term-description"] } onChange={ e => this.change_state(e) } />
                </div>
                { LanguageComponent({ stateName: "term-language", stateValue: this.state["term-language"], changeState: this.change_state.bind(this) }) }
                { PartOfSpeechComponent({ stateName: "pos", stateValue: this.state.pos, changeState: this.change_state.bind(this) }) }
                <div className="form-item is-col is-10">
                    <label>&nbsp;</label>
                    <button
                        className="button is-secondary"
                        type="button"
                        onClick={ e => this.push_array("terms", e) }
                        disabled={ this.state["term-description"].trim() .length < 1 }
                    >Add</button>
                </div>
            </div>
            { ListComponent({ list: this.state.terms, state_name: "terms", emit_delete: this.delete_item.bind(this) }) }
            <div className="references is-row">
                <input id="references" type="hidden" name="references" value={ JSON.stringify(this.state.references) } />
                <div className="form-item is-col is-50">
                    <label htmlFor="reference-href">Reference: URL</label>
                    <input id="reference-href" type="text" name="reference-href" value={ this.state["reference-href"] } onChange={ e => this.change_state(e) } />
                </div>
                <div className="form-item is-col is-40">
                    <label htmlFor="reference-text">References: Text</label>
                    <input id="reference-text" type="text" name="reference-text" value={ this.state["reference-text"] } onChange={ e => this.change_state(e) } />
                </div>
                <div className="form-item is-col is-10">
                    <label>&nbsp;</label>
                    <button
                        className="button is-secondary"
                        type="button"
                        onClick={ e => this.push_array("references", e) }
                        disabled={ this.state["reference-text"].trim().length < 1 || this.state["reference-href"].trim().length < 1 }
                    >Add</button>
                </div>
            </div>
            { ListComponent({ list: this.state.references, state_name: "references", emit_delete: this.delete_item.bind(this) }) }
            <div className="form-item is-buttons">
                <button type="submit" className="button" disabled={ disable_condition }>{ submit_text }</button>
            </div>
        </form>);
        const content = (<div className="modal is-open">
            <span className="close" data-close-modal="true"></span>
            <div className="modal-header">{ title_text }</div>
            <div className="modal-body">{ form }</div>
            <div className="modal-footer"></div>
        </div>);
        return (<div id="create-modal" className="modal-container">
            <div className="overlay" onClick={ (dom) => this.shall_we_close(dom) }>
                <div className="modal is-open"></div>
                { content }
            </div>
        </div>);
    }
}

Modal.propTypes = {
    hidden: PropTypes.bool,
    editmode: PropTypes.bool,
    editoverwrote: PropTypes.object,
    toggle: PropTypes.func,
    add: PropTypes.func,
};

Modal.defaultProps = {
    editmode: false,
    editoverwrote: {
        word: "",
        language: Languages[0].value,
        pos: PosSelections[0].value,
        terms: [],
        references: [],
    },
    toggle: () => {},
    add: () => {},
};

export default Modal;
