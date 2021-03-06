import React from "react";
import PropTypes from "prop-types";
import Languages from "../../assets/languages.json";
import PosSelections from "../../assets/part-of-speech.json";

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

export function ListComponent(props = { list: [], state_name: "", emit_delete: () => {} })
{
    if( props.list.length < 1 ) { return (<div className="is-row"></div>); }
    // Render the list
    return (<div className="is-row">
        <div className="is-col">
            <ul>{ props.list.map( (item, id) => (<li key={id}>
                <span onClick={ (event) => props.emit_delete(event, props.state_name, id) } className="delete">❎</span>
                { JSON.stringify(item) }
            </li>) ) }</ul>
        </div>
    </div>);
}
ListComponent.propTypes = {
    list: PropTypes.array,
    state_name: PropTypes.string,
    emit_delete: PropTypes.func,
};

// Selection

export function LanguageComponent(props = { stateName: "", stateValue: "", changeState: () => {} })
{
    const options = ({ text, value }) => (<option key={ value } value={ value }>{ text }</option>);
    const top_langs = ["en", "zh", "ja", "ko"];
    const TopLanguages = Languages.filter( ({ value }) => top_langs.includes( value ) );
    return (<div className="form-item is-col is-20">
        <label htmlFor={ props.stateName }>Language</label>
        <select id={ props.stateName } name={ props.stateName } value={ props.stateValue } onChange={ e => props.changeState(e) }>
            <optgroup label="Top selected">{ TopLanguages.map( options ) }</optgroup>
            <optgroup label="All languages">{ Languages.map( options ) }</optgroup>
        </select>
    </div>);
}
LanguageComponent.propTypes = {
    stateValue: PropTypes.string,
    stateName: PropTypes.string,
    changeState: PropTypes.func,
};

export function PartOfSpeechComponent(props = { stateName: "", stateValue: "", changeState: () => {} })
{
    const options = ({ text, value }) => (<option key={ value } value={ value }>{ text }</option>);
    const top_poses = ["adjective", "noun", "verb"];
    const TopPos = PosSelections.filter( ({ value }) => top_poses.includes( value ) );
    return (<div className="form-item is-col is-20">
        <label htmlFor={ props.stateName }>Part of speech</label>
        <select id={ props.stateName } name={ props.stateName } value={ props.stateValue } onChange={ e => props.changeState(e) }>
            <optgroup label="Top part of speeches">{ TopPos.map( options ) }</optgroup>
            <optgroup label="All part of speeches">{ PosSelections.map( options ) }</optgroup>
        </select>
    </div>);
}
PartOfSpeechComponent.propTypes = {
    stateValue: PropTypes.string,
    stateName: PropTypes.string,
    changeState: PropTypes.func,
};
