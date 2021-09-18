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
        const terms_src = JSON.parse(params.terms);
        /**
         * @see https://stackoverflow.com/a/54203304
         */
        // const terms = terms_src.reduce((termX, termY) => {
        //     const term = (terms[termX.pos] || []);
        //     term.push(termY);
        //     terms[termY.pos] = term;
        //     return terms;
        // }, {});
        /**
         * https://stackoverflow.com/a/54203304
         */
        const terms_by_pos = terms_src.reduce((groups, item) => ({ ...groups, [item.pos]: [...(groups[item.pos] || []), item] }), {});
        const terms = Object.entries( terms_by_pos ).map( ([pos, description]) => ({ pos, description }) );
        const references = JSON.parse(params.references);
        const result = { word, language, terms, references };
        const new_entries = [...this.state.entries];
        new_entries.push(result);
        this.setState({ entries: new_entries });
        this.toggle_modal_flag();
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
