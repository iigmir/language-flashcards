import React from "react";
import PropTypes from "prop-types";

export function WordComponent(props)
{
    return (<div className="form-item is-col is-80">
        <label htmlFor="word">Word</label>
        <input id="word" type="text" name="word" value={ props.word } onChange={ e => props.changeState(e) } />
    </div>);
}
WordComponent.propTypes = {
    word: PropTypes.string,
    changeState: PropTypes.func,
};
