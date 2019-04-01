
import React, {Component} from "react";
import Pagination from "react-bootstrap/Pagination";
/* eslint-disable-next-line import/no-extraneous-dependencies */
import PropTypes from "prop-types";
import cn from '../../utils/cn';

function setItems(maxNumber, activePage) {
    let items = [];
    const pageOne = {number: 1, isEllipsis: false};
    const ellipsis = {number: null, isEllipsis: true};
    const pageLast = {number: maxNumber, isEllipsis: false};
    const pagePrevious = {number: activePage - 1, isEllipsis: false};
    const pageActive = {number: activePage, isEllipsis: false};
    const pageNext = {number: activePage + 1, isEllipsis: false};
    const pageTwo = {number: 2, isEllipsis: false};
    const pageThree = {number: 3, isEllipsis: false};
    const pageFour = {number: 4, isEllipsis: false};
    const pageFive = {number: 5, isEllipsis: false};
    switch(true) {
        case (maxNumber <= 7):
            for (let pageNumber = 1; pageNumber <= maxNumber; pageNumber++) {
                items.push({number: pageNumber, isEllipsis: false});
            }
            break;
        case ((activePage + 3) < maxNumber && activePage > 4):
            items.push(
                pageOne,
                ellipsis,
                pagePrevious,
                pageActive,
                pageNext,
                ellipsis,
                pageLast
            );
            break;
        case (activePage === (maxNumber - 3)):
            items.push(
                pageOne,
                ellipsis,
                pagePrevious,
                pageActive,
                pageNext,
                {number: activePage + 2, isEllipsis: false},
                pageLast
            );
            break;
        case (activePage === (maxNumber - 2)):
            items.push(
                pageOne,
                ellipsis,
                pagePrevious,
                pageActive,
                pageNext,
                pageLast
            );
            break;
        case (activePage === (maxNumber - 1)):
            items.push(
                pageOne,
                ellipsis,
                pagePrevious,
                pageActive,
                pageLast
            );
            break;
        case (activePage === maxNumber):
            items.push(
                pageOne,
                ellipsis,
                {number: maxNumber - 1, isEllipsis: false},
                pageLast
            );
            break;
        case (activePage === 4):
            items.push(
                pageOne,
                pageTwo,
                pageThree,
                pageFour,
                pageFive,
                ellipsis,
                pageLast
            );
            break;
        case (activePage === 3):
            items.push(
                pageOne,
                pageTwo,
                pageThree,
                pageFour,
                ellipsis,
                pageLast
            );
            break;
        case (activePage === 2):
            items.push(
                pageOne,
                pageTwo,
                pageThree,
                ellipsis,
                pageLast
            );
            break;
        case (activePage === 1):
            items.push(
                pageOne,
                pageTwo,
                ellipsis,
                pageLast
            );
            break;
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
        const previousPage = activePage - 1;
        const nextPage = activePage + 1;
        const prevDisabled = activePage === 1;
        const nextDisabled = activePage === total;
        return (
            <div>
                <Pagination
                    active={ activePage }
                >
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
                                        key={ i + 'key' }
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
                </Pagination>
            </div>
        );
    }
}

export default PaginationBasic;
