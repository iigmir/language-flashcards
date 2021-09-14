import React from "react";
import PropTypes from "prop-types";
import "./modal.css";

class Modal extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            hide: true,
            word: "",
            language: "",
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
    push_array(state)
    {
        console.log(state);
    }
    add_entry(event)
    {
        const data_keys = ["word", "language", "terms", "references"];
        const params = Object.fromEntries(
            data_keys.map( key => [key, event.target.elements[key].value] )
        );
        event.preventDefault();
        // const form_data = new FormData(event.target);
        console.log(params);
    }
    render()
    {
        if( this.props.hidden )
        {
            return (<div />);
        }
        return (
            <div id="create-modal" className="modal-container">
                <div className="overlay" onClick={ (dom) => this.shall_we_close(dom) }>
                    <div className="modal is-open">
                        <span className="close" data-close-modal="true"></span>
                        <div className="modal-header">My Modal</div>
                        <div className="modal-body">
                            <form onSubmit={ e => this.add_entry(e) }>
                                <div className="is-row">
                                    <div className="form-item is-col is-80">
                                        <label htmlFor="word">Word</label>
                                        <input id="word" type="text" name="word" value={ this.state.word } onChange={ e => this.change_state(e) } />
                                    </div>
                                    <div className="form-item is-col is-20">
                                        <label htmlFor="language">Language</label>
                                        <input id="language" type="text" name="language" value={ this.state.language } onChange={ e => this.change_state(e) } />
                                    </div>
                                </div>
                                <div className="terms is-row">
                                    <input id="terms" type="hidden" name="terms" value={ this.state.terms } />
                                    <div className="form-item is-col is-40">
                                        <label htmlFor="term-description">Terms: Description</label>
                                        <input id="term-description" type="text" name="term-description" value={ this.state["term-description"] } onChange={ e => this.change_state(e) } />
                                    </div>
                                    <div className="form-item is-col is-40">
                                        <label htmlFor="term-language">Terms: Language</label>
                                        <input id="term-language" type="text" name="term-language" value={ this.state["term-language"] } onChange={ e => this.change_state(e) } />
                                    </div>
                                    <div className="form-item is-col is-20">
                                        <label>&nbsp;</label>
                                        <button className="button is-secondary" onClick={ e => this.push_array("terms", e) }>Add</button>
                                    </div>
                                </div>
                                <div className="is-row"></div>
                                <div className="references is-row">
                                    <input id="references" type="hidden" name="references" value={ this.state.references } />
                                    <div className="form-item is-col is-40">
                                        <label htmlFor="reference-href">Reference: URL</label>
                                        <input id="reference-href" type="text" name="reference-href" value={ this.state["reference-href"] } onChange={ e => this.change_state(e) } />
                                    </div>
                                    <div className="form-item is-col is-40">
                                        <label htmlFor="reference-text">References: Text</label>
                                        <input id="reference-text" type="text" name="reference-text" value={ this.state["reference-text"] } onChange={ e => this.change_state(e) } />
                                    </div>
                                    <div className="form-item is-col is-20">
                                        <label>&nbsp;</label>
                                        <button className="button is-secondary" onClick={ e => this.push_array("references", e) }>Add</button>
                                    </div>
                                </div>
                                <div className="is-row"></div>
                                <div className="form-item is-buttons">
                                    <button type="submit" className="button">Add entry</button>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer"></div>
                    </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    hidden: PropTypes.bool,
    toggle: PropTypes.func
};

export default Modal;
