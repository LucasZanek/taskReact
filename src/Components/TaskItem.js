import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TaskItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.taskItem.completed ?
                'line-through' : 'none'
        }
    }


    render() {
        const { title, id } = this.props.taskItem;
        return (
            <React.Fragment>
                <h2 style={this.getStyle()}>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                    {title}
                    <button onClick={this.props.deleteTask.bind(this, id)} style={btnStyle} >x</button>
                </h2>
            </React.Fragment>
        )
    }
}


TaskItem.propTypes = {
    taskItem: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',

}

export default TaskItem
