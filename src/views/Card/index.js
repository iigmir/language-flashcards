import React from "react";
import References from "./References";
import Definition from "./Definition";
import entries from "../../assets/example-entries.json";
import "./entrynav.css";


class Card extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = { entries };
    }
    render()
    {
        // https://blog.user.today/html5-semantic-tag-and-microdata-seo/
        // https://pjchender.blogspot.com/2020/05/relnoreferrer-targetblank.html
        // https://schema.org/DefinedTerm
        const { word, references, terms } = this.state.entries[0];
        return (
            <main className="Card container">
                <h2 lang="en">{ word }</h2>
                <dl className="entry">
                    { terms.map( (item, index) => (<Definition item={ item } key={ index } />) ) }
                </dl>
                <References references={ references } />
                <aside className="entry-nav">
                    <span className="prev entry">👈</span>
                    <span className="next entry">👉</span>
                </aside>
            </main>
        );
    }
}

export default Card;
