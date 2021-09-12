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
                            <p>Lorem ipsum dolor sit amet...</p>
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
