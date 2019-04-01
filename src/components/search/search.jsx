import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/es/FormControl";
import Button from "react-bootstrap/Button";
import cn from "../../utils/cn";
import './search.pcss';
import Heading from "../heading/heading";

// let searchResults = [
//     {title: "Wedding Crashers", year: "2005", imdbID: "tt0396269"},
//     {title:"American Wedding",year:"2003",imdbID:"tt0328828"},
//     {title:"The Wedding Singer",year:"1998",imdbID:"tt0120888"},
//     {title:"My Best Friend's Wedding",year:"1997",imdbID:"tt0119738"},
//     {title:"My Big Fat Greek Wedding",year:"2002",imdbID:"tt0259446"},
//     {title:"Mike and Dave Need Wedding Dates",year:"2016",imdbID:"tt2823054"},
//     {title:"The Wedding Planner",year:"2001",imdbID:"tt0209475"},
//     {title:"The Wedding Ringer",year:"2015",imdbID:"tt0884732"},
//     {title:"The Wedding Date",year:"2005",imdbID:"tt0372532"},
//     {title:"The Big Wedding",year:"2013",imdbID:"tt1931435"},
//     {title:"Muriel's Wedding",year:"1994",imdbID:"tt0110598"},
//     {title:"After the Wedding",year:"2006",imdbID:"tt0457655"},
//     {title:"My Big Fat Greek Wedding 2",year:"2016",imdbID:"tt3760922"},
//     {title:"Monsoon Wedding",year:"2001",imdbID:"tt0265343"},
//     {title:"Margot at the Wedding",year:"2007",imdbID:"tt0757361"},
//     {title:"Wedding Daze",year:"2006",imdbID:"tt0484877"},
//     {title:"Destination Wedding",year:"2018",imdbID:"tt6987770"},
//     {title:"The Wedding Banquet",year:"1993",imdbID:"tt0107156"},
//     {title:"Veere Di Wedding",year:"2018",imdbID:"tt5842616"},
//     {title:"Jenny's Wedding",year:"2015",imdbID:"tt3289712"},
//     {title:"Crazy, Stupid, Love.",year:"2011",imdbID:"tt1570728","type":"movie"},
//     {title:"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",year:"1964",imdbID:"tt0057012"},
//     {title:"Love Actually",year:"2003",imdbID:"tt0314331"},
//     {title:"Shakespeare in Love",year:"1998",imdbID:"tt0138097"},
//     {title:"P.S. I Love You",year:"2007",imdbID:"tt0431308"},
//     {title:"I Love You, Man",year:"2009",imdbID:"tt1155056"},
//     {title:"Love & Other Drugs",year:"2010",imdbID:"tt0758752"},
//     {title:"Punch-Drunk Love",year:"2002",imdbID:"tt0272338"},
//     {title:"From Paris with Love",year:"2010",imdbID:"tt1179034"},
//     {title:"From Russia with Love",year:"1963",imdbID:"tt0057076"}
// ];


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
