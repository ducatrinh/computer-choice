import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ModelDetails extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        manufacturer: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        origin: PropTypes.string.isRequired
    }

    render() {
        return (
            <div>
                <ul>
                    {model.map(model =>
                        <li key={model.prop}>{model.prop}</li>
                    )}
                </ul>
            </div>
        )
    }
}