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
    render()
    {
        return (
            <div className="App">
                <Header />
                <div className="operation container">
                    <button className="button" onClick={ () => this.toggle_modal_flag() }>Button</button>
                </div>
                <Card entries={ this.state.entries } />
                <Modal hidden={ this.state.hide_modal } toggle={ () => this.toggle_modal_flag() } />
            </div>
        );
    }
}

export default App;
