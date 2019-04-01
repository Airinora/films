
import React, {Component} from "react";
import Pagination from "react-bootstrap/Pagination";
/* eslint-disable-next-line import/no-extraneous-dependencies */
import PropTypes from "prop-types";
import cn from '../../utils/cn';

function setItems(maxNumber, activePage) {
    let items = [];
    if (maxNumber <= 5) {
        for (let pageNumber = 1; pageNumber <= maxNumber; pageNumber++) {
            items.push({number: pageNumber, isEllipsis: false});
        }
    } else if ((activePage + 3) < maxNumber && activePage > 4) {
        items.push(
            {number: 1, isEllipsis: false},
            {number: null, isEllipsis: true},
            {number: (activePage - 1), isEllipsis: false},
            {number: activePage, isEllipsis: false},
            {number: (activePage + 1), isEllipsis: false},
            {number: null, isEllipsis: true},
            {number: (maxNumber), isEllipsis: false}
        );
    } else if (activePage === (maxNumber - 3)) {
        items.push(
            {number: 1, isEllipsis: false},
            {number: null, isEllipsis: true},
            {number: (activePage - 1), isEllipsis: false},
            {number: activePage, isEllipsis: false},
            {number: (activePage + 1), isEllipsis: false},
            {number: (activePage + 2), isEllipsis: false},
            {number: (maxNumber), isEllipsis: false}
        );
    } else if (activePage === (maxNumber - 2)) {
        items.push(
            {number: 1, isEllipsis: false},
            {number: null, isEllipsis: true},
            {number: (activePage - 1), isEllipsis: false},
            {number: activePage, isEllipsis: false},
            {number: (activePage + 1), isEllipsis: false},
            {number: (maxNumber), isEllipsis: false}
        );
    } else if (activePage === (maxNumber - 1)) {
        items.push(
            {number: 1, isEllipsis: false},
            {number: null, isEllipsis: true},
            {number: (activePage - 1), isEllipsis: false},
            {number: activePage, isEllipsis: false},
            {number: (maxNumber), isEllipsis: false}
        );
    } else if (activePage === maxNumber) {
        items.push(
            {number: 1, isEllipsis: false},
            {number: null, isEllipsis: true},
            {number: (maxNumber - 1), isEllipsis: false},
            {number: (maxNumber), isEllipsis: false}
        );
    } else if (activePage === 4) {
        items.push(
            {number: 1, isEllipsis: false},
            {number: 2, isEllipsis: false},
            {number: 3, isEllipsis: false},
            {number: 4, isEllipsis: false},
            {number: 5, isEllipsis: false},
            {number: null, isEllipsis: true},
            {number: (maxNumber), isEllipsis: false}
        );
    } else if (activePage === 3) {
        items.push(
            {number: 1, isEllipsis: false},
            {number: 2, isEllipsis: false},
            {number: 3, isEllipsis: false},
            {number: 4, isEllipsis: false},
            {number: null, isEllipsis: true},
            {number: (maxNumber), isEllipsis: false}
        );
    } else if (activePage === 2) {
        items.push(
            {number: 1, isEllipsis: false},
            {number: 2, isEllipsis: false},
            {number: 3, isEllipsis: false},
            {number: null, isEllipsis: true},
            {number: (maxNumber), isEllipsis: false}
        );
    } else if (activePage === 1) {
        items.push(
            {number: 1, isEllipsis: false},
            {number: 2, isEllipsis: false},
            {number: null, isEllipsis: true},
            {number: (maxNumber), isEllipsis: false}
        );
    }
    return items;
}

@cn('pagination')
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
        const {total, activePage} = this.props;
        const items = setItems(total, activePage);
        this.setState({items});
    };

    componentWillReceiveProps(nextProps) {
        const {total, activePage} = this.props;
        if (total !== nextProps.total) {
            const items = setItems(nextProps.total, nextProps.activePage);
            this.setState({items});
        } else if (activePage !==nextProps.activePage) {
            const items = setItems(nextProps.total, nextProps.activePage);
            this.setState({items});
        }
    };

    changePageOnClick = (pageNumber) => (event) => {
        event.preventDefault();
        const {onChange} = this.props;
        onChange(pageNumber);
    };

    render() {
        const {items} = this.state;
        const {activePage, total} = this.props;
        const lastPage = total;
        const previousPage = activePage - 1;
        const nextPage = activePage + 1;
        const prevDisabled = activePage === 1;
        const nextDisabled = activePage === total;
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
                        items.map((item, i) => {
                            const {number, isEllipsis} = item;
                            if (isEllipsis === true) {
                                return (
                                    <Pagination.Ellipsis
                                        disabled={ true }
                                        key={ (i + 'key') }
                                    />
                                );
                            } return (
                                <Pagination.Item
                                    key={ number }
                                    active={ number === activePage }
                                    onClick={ this.changePageOnClick(number) }
                                >
                                    {number}
                                </Pagination.Item>
                            );
                        })
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
