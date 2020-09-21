import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

class TabItem extends Component {

    Pointer(pointer){
        return{
            cursor: pointer
        };
    }

    updateStatus(){
        this.props.onChageStatus(this.props.task.id);
    }

    delete = () => {
        this.props.onDeleteTask(this.props.task.id);
    }

    edit = () =>{
        this.props.onOpenForm();
        this.props.onEditTask(this.props.task);
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
                        onClick={()=>this.updateStatus()}
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
const mapStateToProps = (state) =>{
    return{
        
    }
}
const mapDispatchToProps = (dispatch, props) =>{
    return{
        onChageStatus : (id) =>{
            dispatch(actions.changeStatus(id))
        },
        onDeleteTask :(id) =>{
            dispatch(actions.deleteTask(id))
        },
        onOpenForm : () =>{
            dispatch(actions.openForm())
        },
        onEditTask : (task) =>{
            dispatch(actions.editTask(task))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabItem);
