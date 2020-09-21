import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class TabForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: '',
            name: '',
            status: false
        };
    }

    componentWillMount() {
        if(this.props.itemEditing && this.props.itemEditing.id !== ''){
            this.setState({
                id : this.props.itemEditing.id,
                name : this.props.itemEditing.name,
                status : this.props.itemEditing.status
            });
        }else{
            this.resetForm();
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.itemEditing){
            this.setState({
                id : nextProps.itemEditing.id,
                name : nextProps.itemEditing.name,
                status : nextProps.itemEditing.status
            });
        }else{
            this.resetForm();
        }
    }

    Pointer(pointer){
        return{
            cursor: pointer
        };
    }

    onCloseForm(){
        this.props.onCloseForm();
    }
    

    onChange = (event)=>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name === 'status'){
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name]: value
        });
    }

    onSubmit = (event) =>{
        event.preventDefault();
        this.props.onAddTask(this.state);
        this.resetForm();
        this.props.onCloseForm();
    }

    resetForm = () =>{
        this.setState({
            id: '',
            name: '', 
            status: false
        });
    }

    clearForm = () =>{
        this.setState({
            name: '', 
            status: false
        });
    }

  	render() {
        var id = (this.props.itemEditing ? this.props.itemEditing.id : '')
        if(!this.props.isDisplayForm) return '';
        return(
            <div className="panel panel-warning">
                <div className="panel-heading" >
                    <h2 className="panel-title">
                        {id === '' ? 'Thêm công việc' : 'Chỉnh sửa công việc'}
                        <i className="glyphicon glyphicon-remove textRight" 
                            style={this.Pointer("pointer")}
                            onClick={()=>this.onCloseForm()}

                        ></i>
                    </h2>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Tên: </label>
                            <input type="text" 
                                className="form-control" 
                                name="name" 
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Trạng thái: </label>
                            <select className="form-control" 
                                name="status"
                                value={this.state.status}
                                onChange={this.onChange}
                            >
                                <option value={true}>Kích hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select><br />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            <i className="glyphicon glyphicon-plus"></i>&nbsp;
                            Lưu lại
                        </button>
                        &nbsp;&nbsp;&nbsp;
                        <button type="button" className="btn btn-danger"
                            onClick={this.clearForm}
                        >
                            <i className="glyphicon glyphicon-remove"></i>&nbsp;
                            Hủy bỏ
                        </button>
                    </form>
                </div>
            </div>
        );
 	}
}
const mapStateToProps = (state) =>{
    return{
        isDisplayForm: state.isDisplayForm,
        itemEditing: state.itemEditing
    }
};

const mapDispatchToProps = (dispatch, props) =>{
    return{
        onAddTask : (task) =>{
            dispatch(actions.addTask(task))
        },
        onCloseForm : () =>{
            dispatch(actions.closeForm())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TabForm);
