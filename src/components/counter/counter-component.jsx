import React, {Component} from 'react';
import {connect} from "react-redux";
/* eslint-disable-next-line import/no-extraneous-dependencies */
import PropTypes from "prop-types";
import { clickMinus, clickPlus } from "../../actions/action";

export class CounterComponent extends Component {
    static propTypes = {
        number: PropTypes.number.isRequired,
        clickPlus: PropTypes.func.isRequired,
        clickMinus: PropTypes.func.isRequired
    };

    render() {
        const { number, clickMinus, clickPlus } = this.props;
        return (
            <div>
                <button type='button' onClick={ clickMinus }>-</button>
                <div>{ number }</div>
                <button type='button' onClick={ clickPlus }>+</button>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    number: store.counter.number
});

export default connect(
    mapStateToProps,
    {
        clickMinus,
        clickPlus
    }
)(CounterComponent);
