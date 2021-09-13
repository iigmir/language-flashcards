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
    render()
    {
        // modal-box
        // kube-fadeIn
        // kube-fadeOut
        // modal is-open
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
                            <form>
                                <div className="form-item">
                                    <label>Word</label>
                                    <input type="text" name="word" />
                                </div>
                                <div className="form-item">
                                    <label>Language</label>
                                    <input type="text" name="language" />
                                </div>
                                <div className="terms is-row">
                                    <input type="hidden" name="terms" />
                                    <div className="form-item is-col">
                                        <label>Terms: Language</label>
                                        <input type="text" name="reference-language" />
                                    </div>
                                    <div className="form-item is-col">
                                        <label>Terms: Description</label>
                                        <input type="text" name="reference-description" />
                                    </div>
                                    <div className="form-item is-col">
                                        <label>&nbsp;</label>
                                        <button className="button">Add</button>
                                    </div>
                                </div>
                                <div className="references is-row">
                                    {/* references */}
                                    <input type="hidden" name="references" />
                                    <div className="form-item is-col">
                                        <label>Reference: URL</label>
                                        <input type="text" name="reference-href" />
                                    </div>
                                    <div className="form-item is-col">
                                        <label>References: Text</label>
                                        <input type="text" name="reference-text" />
                                    </div>
                                    <div className="form-item is-col">
                                        <label>&nbsp;</label>
                                        <button className="button">Add</button>
                                    </div>
                                </div>
                                <div className="form-item is-buttons">
                                    <button className="button">Add entry</button>
                                </div>
                                {/* { "word": "", "language": "", "terms": [], "references": [] } */}
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
