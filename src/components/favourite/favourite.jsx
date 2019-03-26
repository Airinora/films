import React, {Component} from 'react';
import cn from "../../utils/cn";

@cn('favourite')
class Favourite extends Component {
    render(cn) {
        return (
            <div className={ cn() }>Favourite
            </div>
        );
    }
}


export default Favourite;