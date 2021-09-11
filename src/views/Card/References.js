import React from "react";
import PropTypes from "prop-types";

class Reference extends React.Component {
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return (
            <li>
                <a href={ this.props.href } target="_blank" rel="noreferrer">{ this.props.text }</a>
            </li>
        );
    }
}

Reference.propTypes = {
    href: PropTypes.string,
    text: PropTypes.string,
};

class References extends React.Component {
    constructor(props)
    {
        super(props);
        this.references = props.references;
    }
    render()
    {
        const { references } = this.props;
        return (
            <section className="references">
                <h3>References</h3>
                <ol>{ references.map( ({ href, text }, key) =>
                    (<Reference key={key} href={href} text={text} />)
                ) }</ol>
            </section>
        );
    }
}

References.propTypes = {
    references: PropTypes.array,
};

export default References;
