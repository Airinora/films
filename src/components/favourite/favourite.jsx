import React, {Component} from 'react';
import cn from "../../utils/cn";
import Heading from "../heading/heading";
import PaginationBasic from "../pagination/pagination";

@cn('favourite')
class Favourite extends Component {
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
                <Heading
                    headingValue='Favourite films'
                    headingIsShown={ true }
                />
                <PaginationBasic
                    total={ 5 }
                    onChange={ this.handlePageChange }
                    activePage={ activePage }
                    paginationIsShown={ true }
                />
            </div>
        );
    }
}


export default Favourite;
