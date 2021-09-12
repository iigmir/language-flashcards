import React from "react";
import References from "./References";
import Definition from "./Definition";
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
                <section className="entry">
                    <h3>Entries</h3>
                    <dl>
                        { terms.map( (item, index) => (<Definition item={ item } key={ index } />) ) }
                    </dl>
                </section>
                <References references={ references } word={ word } />
            </main>
        );
    }
}

Card.propTypes = {
    entries: PropTypes.array,
};

export default Card;
