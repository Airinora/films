
// import React, {Component} from "react";
// import './pagination.pcss';
// import Pagination from "react-bootstrap/Pagination";
// /* eslint-disable-next-line import/no-extraneous-dependencies */
// import PropTypes from "prop-types";


// @cn('pagination')
// export default class PaginationBasic extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             activePage: 1
//         };
//     }
//
//     handlePageChange = (pageNumber) => {
//         console.log(`active page is ${pageNumber}`);
//         this.setState({activePage: pageNumber});
//     };
//
//     render(cn) {
//         return (
//             <div>
//                 <Pagination
//                     activePage={this.state.activePage}
//                     itemsCountPerPage={2}
//                     totalItemsCount={10}
//                     pageRangeDisplayed={5}
//                     onChange={this.handlePageChange}
//                     itemClass={ cn('item') }
//                     linkClass={ cn('link') }
//                     activeLinkClass={ cn('link--active') }
//                 />
//             </div>
//         );
//     }
// }


// function setItems(maxNumber, pageNumber, active) {
//     let items = [];
//     for (pageNumber; pageNumber <= maxNumber; pageNumber++) {
//         items.push(
//             <Pagination.Item key={ pageNumber } active={ pageNumber === active }>
//                 {pageNumber}
//             </Pagination.Item>,
//         );
//     }
//     return items;
// }
//
// class PaginationBasic extends Component {
//     static propTypes = {
//         maxNumber: PropTypes.number.isRequired,
//         active: PropTypes.number.isRequired,
//         onChange: PropTypes.func.isRequired
//     };
//
//     state = {
//         active: 1
//     };
//
//     componentWillMount() {
//         setItems()
//     };
//
//     componentWillReceiveProps() {
//         setItems()
//     };
//
//     handlePageChange = (pageNumber) => {
//         this.setState({active: pageNumber});
//     };
//
//     render() {
//         return (
//             <div>
//                 <Pagination
//                     active={ this.state.active }
//                     maxNumber={ this.props.maxNumber }
//                     onChange={ this.handlePageChange }
//                 >
//                     {items}
//                 </Pagination>
//             </div>
//         );
//     }
// }
//
// export default PaginationBasic;
