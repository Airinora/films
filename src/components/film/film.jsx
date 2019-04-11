import React, {Component} from 'react';
import './film.pcss'
/* eslint-disable-next-line import/no-extraneous-dependencies */
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Preloader from "../preloader/preloader";
import {getFilmById} from '../../actions/film-action';
import {ButtonBack} from "../button-back/button";
import cn from "../../utils/cn";

const mapStateToProps = ({singleFilm: {isLoading, film}}) => ({
    isLoading,
    film
});

@cn('film')
export class Film extends Component {
    static propTypes = {
        isLoading: PropTypes.bool.isRequired,
        getFilmById: PropTypes.func.isRequired,
        match: PropTypes.objectOf.isRequired,
        film: PropTypes.objectOf.isRequired
    };

    componentDidMount() {
        const { match: {params: {id}}, getFilmById } = this.props;
        getFilmById(id);
    }

    render(cn){
        const {isLoading, film: {Title, Year, Genre, Director, Country, Plot, Poster}} = this.props;
        return (
            <div>
                <Preloader
                    isLoading={ isLoading }
                />
                <ButtonBack />
                <div className={ cn() }>
                    <div className={ cn('poster-container') }>
                        <div className={ cn('poster') }>
                            <img alt='poster' src={ Poster } />
                        </div>
                    </div>
                    <div className={ cn('content') }>
                        <h2 className={ cn('title') }>
                            {Title}
                        </h2>
                        <div className={ cn('info-block') }>
                            <div className={ cn('info') }>
                                <h6 className={ cn('info-title') }>
                                    Year
                                </h6>
                                <span>
                                    {Year}
                                </span>
                            </div>
                            <div className={ cn('info') }>
                                <h6 className={ cn('info-title') }>
                                    Country
                                </h6>
                                <span>
                                    {Country}
                                </span>
                            </div>
                            <div className={ cn('info') }>
                                <h6 className={ cn('info-title') }>
                                    Director
                                </h6>
                                <span>
                                    {Director}
                                </span>
                            </div>
                            <div className={ cn('info') }>
                                <h6 className={ cn('info-title') }>
                                    Genre
                                </h6>
                                <span>
                                    {Genre}
                                </span>
                            </div>
                        </div>
                        <div className={ cn('plot') }>
                            {Plot}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, {getFilmById})(Film);
