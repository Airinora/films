import React, {Component} from 'react';
import {connect} from "react-redux";
/* eslint-disable-next-line import/no-extraneous-dependencies */
import PropTypes from "prop-types";

export class CounterComponent extends Component {
    static propTypes = {
        number: PropTypes.number.isRequired
    };

    render() {
        const { number } = this.props;
        return (
            <div>
                <button type='button'>-</button>
                <div>{ number }</div>
                <button type='button'>+</button>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    number: store.counter.number
});

// const mapDispatchToProps = dispatch => {
//     return {
//         clickMinusAction => dispatch(clickMinus())
//     }
// };

export default connect(mapStateToProps)(CounterComponent);
