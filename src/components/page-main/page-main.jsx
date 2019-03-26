import React from 'react';

import cn from '../../utils/cn';
import Header from '../header/header';
import Content from '../content/content';

@cn('page-main')
export default class PageMain extends React.Component {
    render(cn) {
        return (
            <div className={ cn() }>
                <Header />
                <Content />
            </div>
        );
    }
}
