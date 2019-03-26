import Pagination from "react-bootstrap/Pagination";
import React, {Component} from "react";
import cn from "../../utils/cn";

let active = 1;
let items = [];
const maxNumber = 5;
for (let number = 1; number <= maxNumber; number++) {
    items.push(
        <Pagination.Item key={ number } active={ number === active }>
            {number}
        </Pagination.Item>,
    );
}

@cn('pagination')
class PaginationBasic extends Component {
    render() {
        return (
            <div>
                <Pagination>{items}</Pagination>
            </div>
        );
    }
}

export default PaginationBasic;
