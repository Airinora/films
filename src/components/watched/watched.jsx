import React, {Component} from 'react';
import cn from "../../utils/cn";
import Heading from "../heading/heading";
import PaginationBasic from "../pagination/pagination";

@cn('watched')
class Watched extends Component {
    render(cn) {
        return (
            <div>
                <Heading headingValue='Watched films' />
                <div className={ cn() }>
                    Watched
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


export default Watched;