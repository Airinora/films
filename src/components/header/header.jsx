
import React, {Component} from 'react';
import cn from "../../utils/cn";

@cn('header')
class Header extends Component {
    render(cn) {
        return (
            <div className={ cn() }>
                <ul className={ cn('nav') }>
                    <li><a className={ cn('nav-link') } href='/'>Home</a></li>
                    <li><a className={ cn('nav-link') } href='/'>Favourite</a></li>
                    <li><a className={ cn('nav-link') } href='/'>Watched</a></li>
                </ul>
                <div className='content' />
            </div>
        );
    }
}

export default Header;