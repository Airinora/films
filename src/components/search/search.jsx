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
import {FILM_ROUTE} from "../../constants/routes";
import {getFilms} from "../../actions/action";

const mapStateToProps = ({films: {items, error}}) => ({
    items,
    error
});

// const searchInput = document.getElementById('searchInput');
// const inputValue = searchInput.value;


@cn('search')
export class Search extends Component {
    static propTypes = {
        getFilms: PropTypes.func.isRequired,
        items: PropTypes.array
    };

    componentDidMount() {
        const { getFilms } = this.props;
        getFilms('wedding', undefined);
    }

    render(cn) {
        const { items } = this.props;
        return (
            <div className={ cn() }>
                <Form className={ cn('form') }>
                    <FormControl type='text' placeholder='Film title' className={ cn('input') } id='searchInput' />
                    <Button variant='primary' className={ cn('button') }>Find film</Button>
                </Form>
                <Heading headingValue='Search results' />
                {
                    items.map((resultPage) => {
                        const {Year, Title, imdbID} = resultPage;
                        return (
                            <div className={ cn('film') } key={ imdbID } id={ imdbID }>
                                <div className={ cn('film-info') }>
                                    <div className={ cn('film-date') }>{Year}</div>
                                    <NavLink to={ FILM_ROUTE } className={ cn('film-title') }>{Title}</NavLink>
                                </div>
                                <div className={ cn('film-buttons') }>
                                    <Button type='button' className={ cn('film-button') }>Add to Watched</Button>
                                    <Button variant='link' type='button' className={ cn('film-button') }>Add to Favourite</Button>
                                </div>
                            </div>
                        )})
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, {getFilms})(Search);
