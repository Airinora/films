import React from 'react';

import cn from '../../utils/cn';
import Search from '../search/search';

@cn('page-main')
export default class PageMain extends React.Component {
    render(cn) {
        return (
            <div className={ cn() }>
                <Search />
            </div>
        );
    }
}
