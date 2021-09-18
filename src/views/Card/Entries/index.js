import React from "react";
import Definition from "./Definition";
import PropTypes from "prop-types";

class Entries extends React.Component {
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return (<section className="entry">
            <h3>Entries</h3>
            <dl>
                { this.props.terms.map( (item, index) => (<Definition item={ item } key={ index } />) ) }
            </dl>
        </section>);
    }
}

Entries.propTypes = {
    terms: PropTypes.array,
};

export default Entries;
