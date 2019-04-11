
import React from "react";
import { withRouter } from "react-router";
/* eslint-disable-next-line import/no-extraneous-dependencies */
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";


class ShowHistory extends React.Component {
    static propTypes = {
        history: PropTypes.shape({
            goBack: PropTypes.func.isRequired
        }).isRequired
    };

    render() {
        const { history } = this.props;
        return (
            <Button variant='primary' onClick={ history.goBack }>
                ← Back
            </Button>
        )
    }
}

export const ButtonBack = withRouter(ShowHistory);
