import React, {Component} from 'react';
import cn from "../../utils/cn";

@cn('search')
class Search extends Component {
    render(cn) {
        return (
            <div className={ cn() }>Search
            </div>
        );
    }
}


export default Search;