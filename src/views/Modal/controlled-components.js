import React from "react";
import PropTypes from "prop-types";
import Languages from "../../assets/languages.json";

export function WordComponent(props = { word: "", changeState: () => {} })
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

export function LanguageComponent(props = { stateName: "", stateValue: "", changeState: () => {} })
{
    return (<div className="form-item is-col is-20">
        <label htmlFor={ props.stateName }>Language</label>
        <select id={ props.stateName } name={ props.stateName } value={ props.stateValue } onChange={ e => props.changeState(e) }>
            { Languages.map( ({ text, value }) => (<option key={ value } value={ value }>{ text }</option>) ) }
        </select>
    </div>);
}
LanguageComponent.propTypes = {
    stateValue: PropTypes.string,
    stateName: PropTypes.string,
    changeState: PropTypes.func,
};
