import React from "react";
import Card from "./Card";
import Header from "./Header/index";

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
            </div>
        );
    }
}

export default App;
