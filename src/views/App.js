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
        const modal = this.state.hide_modal ? (<div />) :
            (<Modal toggle={ () => this.toggle_modal_flag() } add={ e => this.add_entry(e) } hidden={ this.state.hide_modal } />)
        ;
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
