import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const List = ({ items }) => {
    return (
        <ListGroup>
            {items.map((item) => {
                return (
                    <ListGroupItem key={item.id}>
                        {item.title}
                    </ListGroupItem>
                );
            })}
        </ListGroup>
    );
}

export default List