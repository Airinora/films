import React, {Component} from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {connect} from "react-redux";
import cn from "../../utils/cn";
import Heading from "../heading/heading";
import PaginationBasic from "../pagination/pagination";
import {getFilms} from "../../actions/action";
import './watched.pcss';
import {changeWatchedActivePage} from "../../actions/filter-action";
import {removeFilmFromWatched} from "../../actions/watched-action";


const mapStateToProps = ({watchedFilms: {watched}, filter: {watchedActivePage}}) => ({
    watched,
    watchedActivePage
});

@cn('watched')
class Watched extends Component {
    static propTypes = {
        watched: PropTypes.array.isRequired,
        watchedActivePage: PropTypes.number.isRequired,
        changeWatchedActivePage: PropTypes.func.isRequired,
        removeFilmFromWatched: PropTypes.func.isRequired
    };

    getNewPage = (newPage) => {
        const { changeWatchedActivePage } = this.props;
        changeWatchedActivePage(newPage);
    };

    fromWatched = (id) => () => {
        const { removeFilmFromWatched } = this.props;
        removeFilmFromWatched(id);
    };

    render(cn) {
        const {watched, watchedActivePage} = this.props;
        const {length} = watched;
        const itemsPerPage = 10;
        let pagesCount = Math.ceil(length/itemsPerPage);
        const filmPage = watched.slice(((watchedActivePage - 1) * 10), watchedActivePage * 10);
        let headingIsShown;
        headingIsShown = length > 0;
        return (
            <div>
                <Heading
                    headingValue='Watched films'
                    headingIsShown={ headingIsShown }
                />
                {
                    filmPage.map((item) => {
                        const {Year, Title, imdbID} = item;
                        return (
                            <div className={ cn('film') } key={ imdbID } id={ imdbID }>
                                <div className={ cn('film-info') }>
                                    <div className={ cn('film-date') }>{Year}</div>
                                    <NavLink
                                        to={ `/film/${imdbID}` }
                                        className={ cn('film-title') }
                                    >
                                        {Title}
                                    </NavLink>
                                </div>
                                <Button
                                    type='button'
                                    className={ cn('film-button') }
                                    onClick={ this.fromWatched(imdbID) }
                                >
                                    Remove from Watched
                                </Button>
                            </div>
                        );
                    })
                }
                <PaginationBasic
                    total={ pagesCount }
                    onChange={ this.getNewPage }
                    activePage={ watchedActivePage }
                    paginationIsShown={ true }
                />
            </div>
        )
    }
}

export default connect(mapStateToProps,
    {
        getFilms,
        changeWatchedActivePage,
        removeFilmFromWatched
    }
)(Watched);