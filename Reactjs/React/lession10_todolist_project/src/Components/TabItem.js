import React, { Component } from 'react';

class TabItem extends Component {

    Pointer(pointer){
        return{
            cursor: pointer
        };
    }

    updateStatus =()=>{
        this.props.updateStatus(this.props.task.id);
    }

    delete =()=>{
        this.props.deleteID(this.props.task.id);
    }

    edit=()=>{
        this.props.editID(this.props.task.id);
    }

  	render() {
        var {task, index} = this.props;
        return(
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span 
                        className={task.status === true ?"label label-danger":"label label-success"}
                        style={this.Pointer("pointer")}
                        onClick={this.updateStatus}
                    >
                        {task.status === true?'Kích hoat':"Ẩn"}
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning"
                        onClick={this.edit}
                    >
                        <i className="glyphicon glyphicon-pencil"></i>&nbsp;
                        Sửa
                    </button>&nbsp;
                    <button type="button" className="btn btn-danger"
                        onClick={this.delete}
                    >
                        <i className="glyphicon glyphicon-trash"></i>&nbsp;
                        Xóa
                    </button>
                </td>
            </tr>
        );
 	}
}

export default TabItem;
