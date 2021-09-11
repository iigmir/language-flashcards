import React from "react";

class Header extends React.Component {
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return (
            <header className="top container">
                <h1>Language flashcard</h1>
                <hr />
            </header>
        );
    }
}

export default Header;
