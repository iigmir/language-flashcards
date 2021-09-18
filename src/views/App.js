import React from "react";
import Card from "./Card";
import Header from "./Header";
import Modal from "./Modal";
// import entries from "../assets/example-entries.json";

class App extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = { entries: [], hide_modal: true, };
    }
    toggle_modal_flag()
    {
        const hide_modal = !this.state.hide_modal;
        this.setState({ hide_modal });
    }
    add_entry(input = { "word": "", "language": "", "terms": "[{'language':'','description':'','pos':''}]", "references": "[]" })
    {
        const result = { word: input.word, language: input.language, terms: JSON.parse(input.terms), references: JSON.parse(input.references) };
        const new_entries = [...this.state.entries];
        new_entries.push(result);
        this.setState({ entries: new_entries });
    }
    render()
    {
        return (
            <div className="App">
                <Header />
                <div className="operation container">
                    <button className="button" onClick={ () => this.toggle_modal_flag() }>Button</button>
                </div>
                <Card entries={ this.state.entries } />
                <Modal hidden={ this.state.hide_modal } toggle={ () => this.toggle_modal_flag() } add={ e => this.add_entry(e) } />
            </div>
        );
    }
}

export default App;
