import React, {Component} from 'react';
import cn from "../../utils/cn";
import {ButtonBack} from "../button-back/button";
import './film.pcss'

@cn('film')
export default class Film extends Component {
    render(cn) {
        return (
            <div>
                <ButtonBack />
                <div className={ cn() }>
                    <div className={ cn('poster-container') }>
                        <div className={ cn('poster') }>
                            <img alt='poster' src='' />
                        </div>
                    </div>
                    <div className={ cn('content') }>
                        <h2 className={ cn('title') }>Title</h2>
                        <div className={ cn('info-block') }>
                            <div className={ cn('info') }>
                                <h6 className={ cn('info-title') }>Year</h6>
                                <span>Year</span>
                            </div>
                            <div className={ cn('info') }>
                                <h6 className={ cn('info-title') }>Country</h6>
                                <span>Country</span>
                            </div>
                            <div className={ cn('info') }>
                                <h6 className={ cn('info-title') }>Director</h6>
                                <span>Director</span>
                            </div>
                            <div className={ cn('info') }>
                                <h6 className={ cn('info-title') }>Genre</h6>
                                <span>Genre</span>
                            </div>
                        </div>
                        <div className={ cn('plot') }>plot</div>
                    </div>
                </div>
            </div>
        );
    }
}
