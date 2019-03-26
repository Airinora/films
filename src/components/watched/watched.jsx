import React, {Component} from 'react';
import cn from "../../utils/cn";
import Heading from "../heading/heading";

@cn('watched')
class Watched extends Component {
    render(cn) {
        return (
            <div>
                <Heading headingValue='Watched films' />
                <div className={ cn() }>Watched
                </div>
            </div>
        );
    }
}


export default Watched;