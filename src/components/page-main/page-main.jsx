import React from 'react';

import {connect} from "react-redux";
/* eslint-disable-next-line import/no-extraneous-dependencies */
import PropTypes from "prop-types";
import cn from '../../utils/cn';
import Search from '../search/search';
import PaginationBasic from "../pagination/pagination";
import CounterComponent from "../counter/counter-component";

const mapStateToProps = ({films: {total}}) => ({
    total
});

@cn('page-main')
export class PageMain extends React.Component {
    static propTypes = {
        total: PropTypes.number.isRequired
    };

    state = {
        activePage: 1
    };

    handlePageChange = (page) => {
        this.setState({activePage: page});
    };

    render(cn) {
        const { activePage } = this.state;
        const { total } = this.props;
        const itemsPerPage = 10;
        let pagesCount = Math.ceil(total/itemsPerPage);
        return (
            <div className={ cn() }>
                <Search />
                <PaginationBasic
                    total={ pagesCount }
                    onChange={ this.handlePageChange }
                    activePage={ activePage }
                />
                <CounterComponent />
            </div>
        );
    }
}

export default connect(mapStateToProps)(PageMain);
