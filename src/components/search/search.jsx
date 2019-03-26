import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/es/FormControl";
import Button from "react-bootstrap/Button";
import cn from "../../utils/cn";
import './search.pcss';
import Heading from "../heading/heading";


@cn('search')
class Search extends Component {
    render(cn) {
        return (
            <div className={ cn() }>
                <Form className={ cn('form') }>
                    <FormControl type='text' placeholder='Film title' className={ cn('input') } />
                    <Button variant='primary' className={ cn('button') }>Find film</Button>
                </Form>
                <Heading headingValue='Search results' />
            </div>
        );
    }
}


export default Search;