import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/es/FormControl";
import Button from "react-bootstrap/Button";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import PropTypes from "prop-types";
import cn from "../../utils/cn";
import './search.pcss';
import Heading from "../heading/heading";
import { getFilms } from "../../actions/action";
import Preloader from "../preloader/preloader";
import PaginationBasic from "../pagination/pagination";
import { changeActivePage, changeTitle } from "../../actions/filter-action";
import { addFilmToWatched } from "../../actions/watched-action";

const mapStateToProps = ({films: {items, error, isLoading, total}, filter: {title, activePage}}) => ({
    items,
    error,
    isLoading,
    total,
    title,
    activePage
});

@cn('search')
export class Search extends Component {
    static propTypes = {
        getFilms: PropTypes.func.isRequired,
        items: PropTypes.array.isRequired,
        isLoading: PropTypes.bool.isRequired,
        total: PropTypes.number.isRequired,
        changeTitle: PropTypes.func.isRequired,
        changeActivePage: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired,
        activePage: PropTypes.number.isRequired,
        addFilmToWatched: PropTypes.func.isRequired
    };

    componentDidMount() {
        const { getFilms, title, activePage } = this.props;
        if (title !== '') {
            getFilms(title, activePage);
        }
    };

    setNewValue = (event) => {
        const { changeTitle } = this.props;
        changeTitle(event.target.value);
    };

    getNewPage = (newPage) => {
        const { getFilms, title, changeActivePage } = this.props;
        changeActivePage(newPage);
        getFilms(title, newPage);
    };

    toWatched = (item) => () => {
        const { addFilmToWatched } = this.props;
        addFilmToWatched(item);
    };

    render(cn) {
        const { items, getFilms, isLoading, total, title, activePage } = this.props;
        const itemsPerPage = 10;
        let pagesCount = Math.ceil(total/itemsPerPage);
        let headingIsShown;
        let paginationIsShown;
        if (title !== '') {
            headingIsShown = true;
            paginationIsShown = true
        } else {
            headingIsShown = false;
            paginationIsShown = false
        }
        return (
            <div className={ cn() }>
                <Preloader
                    isLoading={ isLoading }
                />
                <Form className={ cn('form') }>
                    <FormControl
                        type='text'
                        placeholder='Film title'
                        className={ cn('input') }
                        id='searchInput'
                        value={ title }
                        onChange={ this.setNewValue }
                    />
                    <Button
                        variant='primary'
                        className={ cn('button') }
                        type='button'
                        onClick={ () => getFilms(title, undefined)  }
                    >
                        Find film
                    </Button>
                </Form>
                <Heading
                    headingValue='Search results'
                    headingIsShown={ headingIsShown }
                />
                {
                    items.map((item) => {
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
                                <div className={ cn('film-buttons') }>
                                    <Button
                                        type='button'
                                        data-id={ imdbID }
                                        className={ cn('film-button') }
                                        onClick={ this.toWatched(item) }
                                    >
                                        Add to Watched
                                    </Button>
                                    <Button
                                        variant='link'
                                        type='button'
                                        data-id={ imdbID }
                                        className={ cn('film-button') }
                                    >
                                        Add to Favourite
                                    </Button>
                                </div>
                            </div>
                        )
                    })
                }
                <PaginationBasic
                    total={ pagesCount }
                    onChange={ this.getNewPage }
                    activePage={ activePage }
                    paginationIsShown={ paginationIsShown }
                />
            </div>
        );
    }
}

export default connect(mapStateToProps,
    {
        getFilms,
        changeActivePage,
        changeTitle,
        addFilmToWatched
    }
)(Search);
