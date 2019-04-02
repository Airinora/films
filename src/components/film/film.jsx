import React, {Component} from 'react';
import cn from "../../utils/cn";
import {ButtonBack} from "../button-back/button";

@cn('film')
export default class Film extends Component {
    render(cn) {
        return (
            <div>
                <ButtonBack />
                <div className={ cn() }>
                    <h2 className={ cn('title') }>Title</h2>
                    <div className={ cn('poster') }>
                        <img alt='poster' src='' />
                    </div>
                </div>
            </div>
        );
    }
}
