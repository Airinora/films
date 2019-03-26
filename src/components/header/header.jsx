
import React, {Component} from 'react';
import './header.pcss';
import { NavLink } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { MAIN_PAGE_ROUTE, FAVOURITE_ROUTE, WATCHED_ROUTE } from '../../constants/routes';
import cn from "../../utils/cn";

@cn('header')
class Header extends Component {
    render(cn) {
        return (
            <div className={ cn() }>
                <Navbar bg='dark' variant='dark'>
                    <Container className={ cn('nav') }>
                        <div className={ cn('label') }>Amazing Films</div>
                        <Nav className='mr-auto'>
                            <Nav.Link>
                                <NavLink to={ MAIN_PAGE_ROUTE } className={ cn('nav-link') }>
                                    Home
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink to={ FAVOURITE_ROUTE } className={ cn('nav-link') }>
                                    Favourite
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink to={ WATCHED_ROUTE } className={ cn('nav-link') }>
                                    Watched
                                </NavLink>
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Header;