import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const List = ({ items }) => {
    return (
        <ListGroup>
            {items.map((item) => {
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