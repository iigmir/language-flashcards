import React from "react";
import PropTypes from "prop-types";

class Word extends React.Component {
    render()
    {
        return (
            <div className="word">
                <h2 lang={ this.props.language }>{ this.props.word }</h2>
            </div>
        );
    }
}

Word.propTypes = {
    word: PropTypes.string,
    language: PropTypes.string,
};

export default Word;
