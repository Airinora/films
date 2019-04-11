import React, {Component} from "react";
/* eslint-disable-next-line import/no-extraneous-dependencies */
import PropTypes from "prop-types";
import cn from "../../utils/cn";
import './preloader.pcss';

@cn('preloader')
export default class Preloader extends Component {
    static propTypes = {
        isLoading: PropTypes.bool.isRequired
    };

    render(cn) {
        const { isLoading } = this.props;
        if (isLoading === true) {
            return (
                <div className={ cn() }>
                    <div className={ cn('background') }>
                        <div className={ cn('content') }>
                            <div className={ cn('text') }>
                                Loading . . .
                            </div>
                        </div>
                    </div>
                </div>
            )
        } return null
    }
}