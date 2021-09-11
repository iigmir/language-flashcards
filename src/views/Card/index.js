import React from "react";
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
        return (
            <main className="Card container">
                <h2 lang="en">main</h2>
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
                <section className="references">
                    <h3 lang="en">References</h3>
                    <ol>
                        <li>
                            <a href="https://en.wiktionary.org/w/index.php?title=Special:Search&search=main" target="_blank" rel="noreferrer">Wiktionary</a>
                        </li>
                        <li>
                            <a href="https://dictionary.cambridge.org/search/english/direct/?q=main"target="_blank" rel="noreferrer">Cambridge Dictionary</a>
                        </li>
                    </ol>
                </section>
                <aside className="entry-nav">
                    <span className="prev entry">👈</span>
                    <span className="next entry">👉</span>
                </aside>
            </main>
        );
    }
}

export default Card;
