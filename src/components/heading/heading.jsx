import React, { Component } from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import cn from '../../utils/cn';

@cn('heading')
export default class Heading extends Component {
    static propTypes = {
        headingValue: PropTypes.string.isRequired
    };

    render(cn) {
        const {headingValue} = this.props;
        return (
            <h2 className={ cn() }>{headingValue}</h2>
        );
    }
}
