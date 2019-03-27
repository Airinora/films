import React, {Component} from 'react';
import cn from "../../utils/cn";
import Heading from "../heading/heading";
import PaginationBasic from "../pagination/pagination";

@cn('favourite')
class Favourite extends Component {
    render(cn) {
        return (
            <div>
                <Heading headingValue='Favourite films' />
                <div className={ cn() }>
                    Favourite
                </div>
                <PaginationBasic
                    maxNumber={ 10 }
                    onChange={ this.handlePageChange }
                    active={ 1 }
                />
            </div>
        );
    }
}


export default Favourite;