import React from "react";
import References from "./References";
import "./entrynav.css";

class Card extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            entries: [{
                word: "main",
                language: "en",
                terms: [{
                    pos: "Adjective",
                    description: [{
                        language: "en",
                        description: "Of chief or leading importance; prime, principal"
                    },{
                        language: "zh-Hant",
                        description: "主要"
                    }]
                },{
                    pos: "Adjective",
                    description: [{
                        language: "en",
                        description: "Chief, most important, or principal in extent, size, or strength; consisting of the largest part"
                    },{
                        language: "zh-Hant",
                        description: "主要"
                    }]
                }],
                references: [{
                    href: "https://dictionary.cambridge.org/search/english/direct/?q=main",
                    text: "Cambridge Dictionary"
                },{
                    href: "https://en.wiktionary.org/w/index.php?title=Special:Search&search=main",
                    text: "Wiktionary"
                }],
            }]
        };
    }
    render()
    {
        // https://blog.user.today/html5-semantic-tag-and-microdata-seo/
        // https://pjchender.blogspot.com/2020/05/relnoreferrer-targetblank.html
        // https://schema.org/DefinedTerm
        const { word, references } = this.state.entries[0];
        return (
            <main className="Card container">
                <h2 lang="en">{ word }</h2>
                <dl className="entry">
                    <section className="definition">
                        <dt className="pos">Adjective</dt>
                        <dd lang="en">Of chief or leading importance; prime, principal</dd>
                        <dd lang="zh-Hant">主要</dd>
                    </section>
                    <section className="definition">
                        <dt className="pos">Adjective</dt>
                        <dd lang="en">Chief, most important, or principal in extent, size, or strength; consisting of the largest part.</dd>
                        <dd lang="zh-Hant">主要</dd>
                    </section>
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
