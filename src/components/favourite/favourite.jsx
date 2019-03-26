import React, {Component} from 'react';
import cn from "../../utils/cn";
import Heading from "../heading/heading";

@cn('favourite')
class Favourite extends Component {
    render(cn) {
        return (
            <div>
                <Heading headingValue='Favourite films' />
                <div className={ cn() }>Favourite
                </div>
            </div>
        );
    }
}


export default Favourite;