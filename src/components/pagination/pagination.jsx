
import React, {Component} from "react";
import Pagination from "react-bootstrap/Pagination";
/* eslint-disable-next-line import/no-extraneous-dependencies */
import PropTypes from "prop-types";

function setItems(maxNumber) {
    let items = [];
    for (let pageNumber = 1; pageNumber <= maxNumber; pageNumber++) {
        items.push(pageNumber);
    }
    return items;
}

class PaginationBasic extends Component {
    static propTypes = {
        total: PropTypes.number.isRequired,
        activePage: PropTypes.number.isRequired,
        onChange: PropTypes.func.isRequired
    };

    state = {
        items: []
    };


    componentWillMount() {
        const {total} = this.props;
        const items = setItems(total);
        this.setState({items});
    };

    componentWillReceiveProps(nextProps) {
        const {total} = this.props;
        if (total !== nextProps.total) {
            const items = setItems(nextProps.total);
            this.setState({items});
        }
    };

    changePageOnClick = (pageNumber) => (event) => {
        event.preventDefault();
        const {onChange} = this.props;
        onChange(pageNumber);
    };

    render() {
        let {items} = this.state;
        let {activePage, total} = this.props;
        let lastPage = total;
        let previousPage = activePage - 1;
        let nextPage = activePage + 1;
        let prevDisabled = activePage === 1;
        let nextDisabled = activePage === total;
        return (
            <div>
                <Pagination
                    active={ activePage }
                    maxNumber={ total }
                >
                    <Pagination.First
                        className='firstPage'
                        onClick={ this.changePageOnClick(1) }
                        disabled={ prevDisabled }
                    />
                    <Pagination.Prev
                        className='prevPage'
                        onClick={ this.changePageOnClick(previousPage) }
                        disabled={ prevDisabled }
                    />
                    {
                        items.map((pageNumber) => (
                            <Pagination.Item
                                key={ pageNumber }
                                active={ pageNumber === activePage }
                                onClick={ this.changePageOnClick(pageNumber) }
                            >
                                {pageNumber}
                            </Pagination.Item>
                        ))
                    }
                    <Pagination.Next
                        className='nextPage'
                        onClick={ this.changePageOnClick(nextPage) }
                        disabled={ nextDisabled }
                    />
                    <Pagination.Last
                        className='lastPage'
                        onClick={ this.changePageOnClick(lastPage) }
                        disabled={ nextDisabled }
                    />
                </Pagination>
            </div>
        );
    }
}

export default PaginationBasic;
