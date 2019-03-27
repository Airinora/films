import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import PageMain from '../page-main/page-main';
import PageError from '../page-error/page-error';
import { MAIN_PAGE_ROUTE, FAVOURITE_ROUTE, WATCHED_ROUTE } from '../../constants/routes';
import Header from '../header/header';
import Favourite from "../favourite/favourite";
import Watched from "../watched/watched";
import './app.pcss';
import '../../assets/styles/styles.pcss';

export default class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div className='app'>
                    <Header />
                    <Container>
                        <Switch>
                            <Route
                                exact={ true }
                                path={ MAIN_PAGE_ROUTE }
                                component={ PageMain }
                            />
                            <Route
                                exact={ true }
                                path={ FAVOURITE_ROUTE }
                                component={ Favourite }
                            />
                            <Route
                                exact={ true }
                                path={ WATCHED_ROUTE }
                                component={ Watched }
                            />
                            <Route
                                path='*'
                                component={ PageError }
                            />
                        </Switch>
                    </Container>
                </div>
            </HashRouter>
        );
    }
}
