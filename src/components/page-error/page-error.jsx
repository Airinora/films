import React from 'react';
import { Link } from 'react-router-dom';

import { MAIN_PAGE_ROUTE } from '../../constants/routes';
import cn from '../../utils/cn';

@cn('page-error')
export default class PageError extends React.Component {
    render(cn) {
        return (
            <div className={ cn() }>
                <h2>This page does not exist</h2>
                <Link to={ MAIN_PAGE_ROUTE }>
                    To the home page
                </Link>
            </div>
        );
    }
}
