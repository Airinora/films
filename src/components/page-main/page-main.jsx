import React from 'react';

import cn from '../../utils/cn';
import Search, { searchResultsTotal } from '../search/search';
import PaginationBasic from "../pagination/pagination";
import CounterComponent from "../counter/counter-component";

const itemsPerPage = 10;
let pages = Math.ceil(searchResultsTotal/itemsPerPage);

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
                    total={ pages }
                    onChange={ this.handlePageChange }
                    activePage={ activePage }
                />
                <CounterComponent />
            </div>
        );
    }
}
