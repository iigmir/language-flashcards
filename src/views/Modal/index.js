import React from "react";

class Card extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {};
    }
    render()
    {
        // modal-box
        // kube-fadeIn
        // kube-fadeOut
        // modal is-open
        return (
            <div id="create-modal" className="hidden">
                <div className="modal is-open">
                    <span className="close"></span>
                    <div className="modal-header">My Modal</div>
                    <div className="modal-body">
                        <p>Lorem ipsum dolor sit amet...</p>
                    </div>
                    <div className="modal-footer"></div>
                </div>
            </div>
        );
    }
}

export default Card;
