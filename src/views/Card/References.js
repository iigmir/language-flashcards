import React from "react";
import PropTypes from "prop-types";

class Reference extends React.Component {
    constructor(props)
    {
        super(props);
        this.href = props.item.href;
        this.text = props.item.text;
    }
    render()
    {
        return (
            <li>
                <a href={ this.href } target="_blank" rel="noreferrer">{ this.text }</a>
            </li>
        );
    }
}

Reference.propTypes = {
    item: PropTypes.object,
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
                <ol>{ references.map((item, key)=>(<Reference key={key} item={item} />)) }</ol>
            </section>
        );
    }
}

References.propTypes = {
    references: PropTypes.array,
};

export default References;
