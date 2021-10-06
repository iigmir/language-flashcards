import React from "react";
import Word from "./Word";
import Entries from "./Entries/index";
import References from "./References";
import PropTypes from "prop-types";
import "./entrynav.css";
import Modal from "../Modal";

class Card extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = { index: 0, edit_entry_modal: true };
    }
    entries_length()
    {
        return this.props.entries.length;
    }
    no_entries()
    {
        return this.entries_length() < 1;
    }
    current_entry()
    {
        if( this.no_entries() )
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
    edit()
    {
        console.log(this.state.index);
    }
    toggle_edit_entry()
    {
        this.setState({ edit_entry_modal: !this.state.edit_entry_modal });
    }
    render()
    {
        const { word, references, terms, language } = this.current_entry();
        if( this.no_entries() )
        {
            return (<main className="Card container">
                <p className="gap">No entries - How about adding an new one? 😉</p>
                <div className="button area">
                    <button className="button">Import from JSON</button>
                </div>
            </main>);
        }
        const edit_modal = this.state.edit_entry_modal ? null : (
            <Modal
                toggle={ () => this.toggle_edit_entry() }
                add={ e => this.edit(e) }
                editmode={ true }
                editoverwrote={ this.current_entry() }
            />
        );
        return (<main className="Card container">
            <aside className="entry-nav">
                <span className="prev entry" onClick={ () => this.change_index( this.state.index - 1 ) }>👈</span>
                <span className="next entry" onClick={ () => this.change_index( this.state.index + 1 ) }>👉</span>
            </aside>
            <Word language={ language } word={ word } />
            <Entries terms={ terms } />
            <References references={ references } word={ word } />
            <div className="button area">
                <button className="button" onClick={ () => this.toggle_edit_entry() }>Edit entry</button>
                <button className="button is-secondary">Import from JSON</button>
            </div>
            { edit_modal }
        </main>);
    }
}

Card.propTypes = {
    entries: PropTypes.array,
};

export default Card;
