import React from "react";
import Card from "./Card";
import Header from "./Header";
import Modal from "./Modal";
import entries from "../assets/example-entries.json";

class App extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = { entries };
    }
    render()
    {
        return (
            <div className="App">
                <Header />
                <Card entries={ entries } />
                <Modal />
            </div>
        );
    }
}

export default App;
