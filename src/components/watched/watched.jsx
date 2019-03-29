import React, {Component} from 'react';
import cn from "../../utils/cn";
import Heading from "../heading/heading";
import PaginationBasic from "../pagination/pagination";

@cn('watched')
class Watched extends Component {
    state = {
        activePage: 1
    };

    handlePageChange = (page) => {
        this.setState({activePage: page});
    };

    render(cn) {
        const {activePage} = this.state;
        return (
            <div>
                <Heading headingValue='Watched films' />
                <div className={ cn() } />
                <PaginationBasic
                    total={ 30 }
                    onChange={ this.handlePageChange }
                    activePage={ activePage }
                />
            </div>
        );
    }
}


export default Watched;