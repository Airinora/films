import React, { Component } from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import cn from '../../utils/cn';

@cn('heading')
export default class Heading extends Component {
    static propTypes = {
        headingValue: PropTypes.string.isRequired,
        headingIsShown: PropTypes.bool.isRequired
    };

    render(cn) {
        const { headingValue, headingIsShown } = this.props;
        if (headingIsShown === true) {
            return (
                <h2 className={ cn() }>{headingValue}</h2>
            );
        } return (
            <h2 className={ cn() }>
                The list of films is empty.
            </h2>
        );
    }
}
