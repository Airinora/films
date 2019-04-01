import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import cn from "../../utils/cn";

@cn('film')
export default class Film extends Component {
    render(cn) {
        return (
            <div className={ cn() }>
                <Button variant='primary' className={ cn('button') } type='button'>Back</Button>
                <h2 className={ cn('title') }>Title</h2>
                <div className={ cn('poster') }>
                    <img alt='poster' src='' />
                </div>
            </div>
        );
    }
}
