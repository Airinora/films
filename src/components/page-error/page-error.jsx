import React from 'react';
import { Link } from 'react-router-dom';

import { MAIN_PAGE_ROUTE } from '../../constants/routes';
import cn from '../../utils/cn';
import Heading from "../heading/heading";

@cn('page-error')
export default class PageError extends React.Component {
    render(cn) {
        return (
            <div className={ cn() }>
                <Heading headingValue={ 'Oops! This page doesn\'t exist :(' } />
                <Link to={ MAIN_PAGE_ROUTE }>To the home page</Link>
            </div>
        );
    }
}
