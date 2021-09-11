import React from "react";
import References from "./References";
import Definition from "./Definition";
import entries from "../../assets/example-entries.json";
import "./entrynav.css";


class Card extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = { entries, index: 0 };
    }
    entries_length()
    {
        return this.state.entries.length;
    }
    current_entry()
    {
        return this.state.entries[this.state.index];
    }
    change_index(pos = 1)
    {
        const in_min_condition = pos > 0;
        const in_max_condition = pos < this.state.entries.length;
        const index = in_min_condition && in_max_condition ? pos : 0;
        this.setState({ index });
    }
    render()
    {
        // https://blog.user.today/html5-semantic-tag-and-microdata-seo/
        // https://pjchender.blogspot.com/2020/05/relnoreferrer-targetblank.html
        // https://schema.org/DefinedTerm
        const { word, references, terms, language } = this.current_entry();
        return (
            <main className="Card container">
                <aside className="entry-nav">
                    <span className="prev entry" onClick={ () => this.change_index( this.state.index - 1 ) }>👈</span>
                    <span className="next entry" onClick={ () => this.change_index( this.state.index + 1 ) }>👉</span>
                </aside>
                <h2 lang={ language }>{ word }</h2>
                <dl className="entry">
                    { terms.map( (item, index) => (<Definition item={ item } key={ index } />) ) }
                </dl>
                <References references={ references } word={ word } />
            </main>
        );
    }
}

export default Card;
