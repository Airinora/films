import React from 'react';

import cn from '../../utils/cn';
import Search from '../search/search';
import PaginationBasic from "../pagination/pagination";

@cn('page-main')
export default class PageMain extends React.Component {
    state = {
        activePage: 1
    };

    handlePageChange = (page) => {
        this.setState({activePage: page});
    };

    render(cn) {
        const {activePage} = this.state;
        return (
            <div className={ cn() }>
                <Search />
                <PaginationBasic
                    total={ 4 }
                    onChange={ this.handlePageChange }
                    activePage={ activePage }
                />
            </div>
        );
    }
}
