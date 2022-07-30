import React from "react";

import './Item.css';

class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.tasks.title
        }

        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleDelete() {
        this.props.handleDelete(this.props.tasks.id);
    }

    handleEdit() {
        this.props.handleEdit(this.props.tasks.id);
    }

    render() {
        return (
            <div className="Item">
                <h5 className="Item__content">{this.props.tasks.title}</h5>
                <div className="Item__btn__wrapper">
                    <button className="BTN" onClick={this.handleDelete}>Delete</button>
                    <button className="BTN Item__btn" onClick={this.handleEdit}>Edit</button>
                </div>
            </div>
        );
    }
}

export default Item;