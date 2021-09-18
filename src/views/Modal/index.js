import React from "react";
import PropTypes from "prop-types";
import "./modal.css";
import PosSelections from "../../assets/part-of-speech.json";
import Languages from "../../assets/languages.json";

class Modal extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            hide: true,
            word: "",
            language: "",
            pos: PosSelections[0],
            terms: [],
            references: [],
            "term-description": "",
            "term-language": "",
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
            inited_state: { ["term-description"]: "", ["term-language"]: "", pos: "", }
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
        // const form_data = new FormData(event.target);
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
        if( this.props.hidden )
        {
            return (<div />);
        }
        const list_comp = (list, state_name) => list.length > 0 ? (
            <div className="is-row">
                <div className="is-col">
                    <ul>{ list.map( (item, id) => (<li key={id}>
                        <span onClick={ (event) => this.delete_item(event, state_name, id) } className="delete">❎</span>
                        { JSON.stringify(item) }
                    </li>) ) }</ul>
                </div>
            </div>) :
            ( <div className="is-row"></div> )
        ;
        const form = (
            <form onSubmit={ e => this.add_entry(e) }>
                <div className="is-row">
                    <div className="form-item is-col is-80">
                        <label htmlFor="word">Word</label>
                        <input id="word" type="text" name="word" value={ this.state.word } onChange={ e => this.change_state(e) } />
                    </div>
                    <div className="form-item is-col is-20">
                        <label htmlFor="language">Language</label>
                        <select id="language" name="language" value={ this.state.language } onChange={ e => this.change_state(e) }>
                            { Languages.map( ({ text, value }) => (<option key={ value } value={ value }>{ text }</option>) ) }
                        </select>
                    </div>
                </div>
                <div className="terms is-row">
                    <input id="terms" type="hidden" name="terms" value={ JSON.stringify(this.state.terms) } />
                    <div className="form-item is-col is-50">
                        <label htmlFor="term-description">Terms: Description</label>
                        <input id="term-description" type="text" name="term-description" value={ this.state["term-description"] } onChange={ e => this.change_state(e) } />
                    </div>
                    <div className="form-item is-col is-20">
                        <label htmlFor="term-language">Terms: Language</label>
                        <select id="term-language" name="term-language" value={ this.state["term-language"] } onChange={ e => this.change_state(e) }>
                            { Languages.map( ({ text, value }) => (<option key={ value } value={ value }>{ text }</option>) ) }
                        </select>
                    </div>
                    <div className="form-item is-col is-20">
                        <label htmlFor="pos">Part of speech</label>
                        <select id="pos" name="pos" value={ this.state.pos } onChange={ e => this.change_state(e) }>
                            { PosSelections.map( ({ text, value }) => (<option key={ value } value={ value }>{ text }</option>) ) }
                        </select>
                    </div>
                    <div className="form-item is-col is-10">
                        <label>&nbsp;</label>
                        <button className="button is-secondary" onClick={ e => this.push_array("terms", e) } type="button">Add</button>
                    </div>
                </div>
                { list_comp(this.state.terms, "terms") }
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
                        <button className="button is-secondary" onClick={ e => this.push_array("references", e) } type="button">Add</button>
                    </div>
                </div>
                { list_comp(this.state.references, "references") }
                <div className="form-item is-buttons">
                    <button type="submit" className="button" disabled={ this.state.terms.length < 1 }>Add entry</button>
                </div>
            </form>
        );
        const content = (
            <div className="modal is-open">
                <span className="close" data-close-modal="true"></span>
                <div className="modal-header">My Modal</div>
                <div className="modal-body">{ form }</div>
                <div className="modal-footer"></div>
            </div>
        );
        return (
            <div id="create-modal" className="modal-container">
                <div className="overlay" onClick={ (dom) => this.shall_we_close(dom) }>
                    <div className="modal is-open"></div>
                    { content }
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    hidden: PropTypes.bool,
    toggle: PropTypes.func,
    add: PropTypes.func,
};

export default Modal;
