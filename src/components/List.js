import React from "react";

import Item from "./Item";

class List extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.tasks.map((task, index) => {
                    return <Item
                        key={index}
                        id={this.props.id}
                        tasks={task}
                        handleDelete={this.props.handleDelete}
                        handleEdit={this.props.handleEdit}
                    />
                })}
            </React.Fragment>
        );
    }
}

export default List;