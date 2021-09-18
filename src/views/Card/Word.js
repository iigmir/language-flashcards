import React from "react";
import PropTypes from "prop-types";
import { LangCodeToLanguage } from "../utils";
class Word extends React.Component {
    render()
    {
        return (<div className="word">
            <h2 lang={ this.props.language }>{ this.props.word }</h2>
            <small className="lang">{ LangCodeToLanguage(this.props.language) }</small>
        </div>);
    }
}

Word.propTypes = {
    word: PropTypes.string,
    language: PropTypes.string,
};

export default Word;
