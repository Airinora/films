import React, {Component} from 'react';
import cn from "../../utils/cn";

@cn('watched')
class Watched extends Component {
    render(cn) {
        return (
            <div className={ cn() }>Watched
            </div>
        );
    }
}


export default Watched;