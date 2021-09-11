import React from "react";
import PropTypes from "prop-types";

class DefinitionItem extends React.Component {
    constructor(props)
    {
        super(props);
    }
    render()
    {
        const { language, description } = this.props;
        return (<dd lang={ language } key={ language }>{ description }</dd> );
    }
}
DefinitionItem.propTypes = {
    language: PropTypes.string,
    description: PropTypes.string,
};

class Definition extends React.Component {
    constructor(props)
    {
        super(props);
    }
    part_of_speech()
    {
        return this.props.item.pos;
    }
    descriptions()
    {
        return this.props.item.description;
    }
    render()
    {
        const part_of_speech = this.part_of_speech();
        const descriptions = this.descriptions();
        return (
            <section className="definition">
                <dt className="pos">{ part_of_speech }</dt>
                { descriptions.map( ({ language, description }) => (
                    <DefinitionItem lang={ language } key={ language } description={ description } /> )
                ) }
            </section>
        );
    }
}

Definition.propTypes = {
    item: PropTypes.object,
};

export default Definition;
