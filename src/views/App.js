import React from "react";
import Card from "./Card";
import Header from "./Header";
import Modal from "./Modal";
import PosSelections from "../assets/part-of-speech.json";
import Languages from "../assets/languages.json";

class App extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = { entries: [], hide_modal: true, };
    }
    toggle_modal_flag()
    {
        this.setState({ hide_modal: !this.state.hide_modal });
    }
    add_entry(params = { "word": "", "language": "", "terms": "[{'description':'['language':'''description':'']','pos':''}]", "references": "[{}]" })
    {
        const { word , language } = params;
        const terms = JSON.parse(params.terms);
        const references = JSON.parse(params.references);
        const result = { word, language, terms, references };
        const new_entries = [...this.state.entries];
        new_entries.push(result);
        this.setState({ entries: new_entries });
        this.toggle_modal_flag();
    }
    render()
    {
        const editoverwrote = { word: "", terms: [], references: [], language: Languages[0].value, pos: PosSelections[0].value };
        const modal = this.state.hide_modal ? null : <Modal
            toggle={() => this.toggle_modal_flag()}
            add={e => this.add_entry(e)}
            editoverwrote={ editoverwrote }
        />;
        return (
            <div className="App">
                <Header />
                <div className="operation container">
                    <button className="button" onClick={ () => this.toggle_modal_flag() }>Add entry</button>
                </div>
                <Card entries={ this.state.entries } />
                { modal }
            </div>
        );
    }
}

export default App;
