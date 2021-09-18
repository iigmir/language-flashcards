import React from "react";
import Word from "./Word";
import Entries from "./Entries/index";
import References from "./References";
import PropTypes from "prop-types";
import "./entrynav.css";

class Card extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = { index: 0 };
    }
    entries_length()
    {
        return this.props.entries.length;
    }
    current_entry()
    {
        if( this.entries_length() < 1 )
        {
            return { "word": "", "language": "", "terms": [], "references": [] };
        }
        return this.props.entries[this.state.index];
    }
    change_index(pos = 1)
    {
        const in_min_condition = pos > 0;
        const in_max_condition = pos < this.props.entries.length;
        const index = in_min_condition && in_max_condition ? pos : 0;
        this.setState({ index });
    }
    render()
    {
        const { word, references, terms, language } = this.current_entry();
        if( this.entries_length() < 1 )
        {
            return (<main className="Card container">
                <p className="gap">No entries - How about adding an new one? 😉</p>
            </main>);
        }
        const navigation = this.entries_length() > 1 ? (<aside className="entry-nav">
            <span className="prev entry" onClick={ () => this.change_index( this.state.index - 1 ) }>👈</span>
            <span className="next entry" onClick={ () => this.change_index( this.state.index + 1 ) }>👉</span>
        </aside>) : (<aside className="entry-nav"></aside>);
        return (<main className="Card container">
            { navigation }
            <Word language={ language } word={ word } />
            <Entries terms={ terms } />
            <References references={ references } word={ word } />
        </main>);
    }
}

Card.propTypes = {
    entries: PropTypes.array,
};

export default Card;
