import React from "react";
import Card from "./Card";
import Header from "./Header";
import Modal from "./Modal";

class App extends React.Component {
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return (
            <div className="App">
                <Header />
                <Card />
                <Modal />
            </div>
        );
    }
}

export default App;
