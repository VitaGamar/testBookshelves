import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const List = props => {

    return (
        <ListGroup>
            {props.items.map((item, index) => {
                return (
                    <ListGroupItem>
                        {item.title}
                    </ListGroupItem>
                );
            })}
        </ListGroup>
    );
}

export default List