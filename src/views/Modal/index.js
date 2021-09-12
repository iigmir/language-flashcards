import React from "react";
import "./modal.css";

class Card extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = { hide: true, };
    }
    render()
    {
        // modal-box
        // kube-fadeIn
        // kube-fadeOut
        // modal is-open
        if( this.state.hide )
        {
            return (<div />);
        }
        return (
            <div id="create-modal" className="modal-container">
                <div className="overlay">
                    <div className="modal is-open">
                        <span className="close"></span>
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

export default Card;
