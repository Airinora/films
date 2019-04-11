import React, {Component} from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {connect} from "react-redux";
import cn from "../../utils/cn";
import Heading from "../heading/heading";
import PaginationBasic from "../pagination/pagination";
import {changeFavouriteActivePage} from "../../actions/filter-action";
import {removeFilmFromFavourite} from "../../actions/favourite-action";
import './favourite.pcss';


const mapStateToProps = ({favouriteFilms: {favourite}, filter: {favouriteActivePage}}) => ({
    favourite,
    favouriteActivePage
});

@cn('favourite')
class Favourite extends Component {
    static propTypes = {
        favourite: PropTypes.array.isRequired,
        favouriteActivePage: PropTypes.number.isRequired,
        changeFavouriteActivePage: PropTypes.func.isRequired,
        removeFilmFromFavourite: PropTypes.func.isRequired
    };

    getNewPage = (newPage) => {
        const { changeFavouriteActivePage } = this.props;
        changeFavouriteActivePage(newPage);
    };

    fromFavourite = (id) => () => {
        const { removeFilmFromFavourite } = this.props;
        removeFilmFromFavourite(id);
    };

    render(cn) {
        const {favourite, favouriteActivePage} = this.props;
        const {length} = favourite;
        const itemsPerPage = 10;
        let pagesCount = Math.ceil(length/itemsPerPage);
        const filmPage = favourite.slice(((favouriteActivePage - 1) * 10), favouriteActivePage * 10);
        let headingIsShown;
        headingIsShown = length > 0;
        return (
            <div>
                <Heading
                    headingValue='Favourite films'
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
                                    onClick={ this.fromFavourite(imdbID) }
                                >
                                    Remove from Favourites
                                </Button>
                            </div>
                        );
                    })
                }
                <PaginationBasic
                    total={ pagesCount }
                    onChange={ this.getNewPage }
                    activePage={ favouriteActivePage }
                    paginationIsShown={ true }
                />
            </div>
        )
    }
}

export default connect(mapStateToProps,
    {
        changeFavouriteActivePage,
        removeFilmFromFavourite
    }
)(Favourite);