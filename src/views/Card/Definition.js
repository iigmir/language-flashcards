import React from "react";
import PropTypes from "prop-types";

class Definition extends React.Component {
    constructor(props)
    {
        super(props);
        const { pos, description } = props.item;
        this.part_of_speech = pos;
        this.descriptions = description;
    }
    render()
    {
        const { part_of_speech, descriptions } = this;
        return (
            <section className="definition">
                <dt className="pos">{ part_of_speech }</dt>
                { descriptions.map( ({ language, description }) => (
                    <dd lang={ language } key={ language }>{ description }</dd> )
                ) }
            </section>
        );
    }
}

Definition.propTypes = {
    item: PropTypes.object,
};

export default Definition;
