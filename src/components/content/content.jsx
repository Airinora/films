import React, {Component} from 'react';
import cn from "../../utils/cn";
import Search from '../search/search';
import Favourite from '../favourite/favourite';
import Watched from '../watched/watched';

@cn('content')
class Content extends Component {
    render(cn) {
        return (
            <div className={ cn() }>Content
                <Search />
                <Favourite />
                <Watched />
            </div>
        );
    }
}


export default Content;