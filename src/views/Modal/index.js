import React from "react";
import PropTypes from "prop-types";
import "./modal.css";

class Modal extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = { hide: true, };
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
    add_entry(event)
    {
        // { "word": "", "language": "", "terms": [], "references": [] }
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
                                <div className="form-item">
                                    <label htmlFor="word">Word</label>
                                    <input id="word" type="text" name="word" />
                                </div>
                                <div className="form-item">
                                    <label htmlFor="language">Language</label>
                                    <input id="language" type="text" name="language" />
                                </div>
                                <div className="terms is-row">
                                    <input id="terms" type="hidden" name="terms" />
                                    <div className="form-item is-col is-40">
                                        <label htmlFor="reference-language">Terms: Language</label>
                                        <input id="reference-language" type="text" name="reference-language" />
                                    </div>
                                    <div className="form-item is-col is-40">
                                        <label htmlFor="reference-description">Terms: Description</label>
                                        <input id="reference-description" type="text" name="reference-description" />
                                    </div>
                                    <div className="form-item is-col is-20">
                                        <label>&nbsp;</label>
                                        <button className="button is-secondary">Add</button>
                                    </div>
                                </div>
                                <div className="references is-row">
                                    {/* references */}
                                    <input id="references" type="hidden" name="references" />
                                    <div className="form-item is-col is-40">
                                        <label htmlFor="reference-href">Reference: URL</label>
                                        <input id="reference-href" type="text" name="reference-href" />
                                    </div>
                                    <div className="form-item is-col is-40">
                                        <label htmlFor="reference-text">References: Text</label>
                                        <input id="reference-text" type="text" name="reference-text" />
                                    </div>
                                    <div className="form-item is-col is-20">
                                        <label>&nbsp;</label>
                                        <button className="button is-secondary">Add</button>
                                    </div>
                                </div>
                                <div className="form-item is-buttons">
                                    <button type="submit" className="button">Add entry</button>
                                    {/* <input type="submit" value="Add entry" className="button" /> */}
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
