import React from "react";
import PropTypes from "prop-types";

class References extends React.Component {
    constructor(props)
    {
        super(props);
        this.references = props.references;
        this.state = {};
    }
    render()
    {
        const { references } = this.props;
        const references_cb = ({ href, text }, key) => (
            <li key={key}>
                <a href={href} target="_blank" rel="noreferrer">{ text }</a>
            </li>
        );
        return (
            <section className="references">
                <h3>References</h3>
                <ol> { references.map( references_cb ) } </ol>
            </section>
        );
    }
}

References.propTypes = {
    references: PropTypes.array,
};

export default References;
