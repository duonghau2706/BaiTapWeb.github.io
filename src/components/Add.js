import React from "react";

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isEdit: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        if (this.state.isEdit) {
            this.setState({
                value: event.target.value,
                isEdit: true
            })
        }
        else {
            this.setState({
                value: event.target.value,
                isEdit: false
            })
        }
    }

    handleClick(event) {
        event.preventDefault();
        event.target.innerText = 'Add';
        if (this.state.isEdit) {
            this.props.setDisabled();
            this.props.setEdit(this.props.id, this.state.value);
        }
        else this.props.handleAdd(this.state.value);
        this.setState({
            value: '',
            isEdit: false
        });
    }

    render() {
        if (this.props.isEdit) {
            document.querySelector('.btn').innerText = 'Save';
            this.setState({
                value: this.props.title,
                isEdit: true
            })
            this.props.setEdit(this.props.id, this.state.value)
        }

        return (
            <form>
                <label>Name</label>
                <input type='text' value={this.state.value} onChange={this.handleChange} />
                <button className="btn" onClick={this.handleClick}>Add</button>
            </form>
        );
    }
}

export default Add;