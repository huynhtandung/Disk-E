import React, { Component } from 'react';

class TabForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: '',
            name: '',
            status: false
        };
    }

    Pointer(pointer){
        return{
            cursor: pointer
        };
    }

    
    componentWillMount(){
        if(this.props.tabEditting){
            this.setState({
                id: this.props.tabEditting.id,
                name: this.props.tabEditting.name,
                status: this.props.tabEditting.status
            });
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps){
            this.setState((prevState, nextProps)=>({
                id: (nextProps.tabEditting ?nextProps.tabEditting.id:''),
                name: (nextProps.tabEditting ?nextProps.tabEditting.name:''),
                status: (nextProps.tabEditting ?nextProps.tabEditting.status:false)
            }));
        }
    }

    /*componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.tabEditting){
            this.setState({
                id: (nextProps.tabEditting ?nextProps.tabEditting.id:''),
                name: (nextProps.tabEditting ?nextProps.tabEditting.name:''),
                status: (nextProps.tabEditting ?nextProps.tabEditting.status:false)
            });
        }
    }*/

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
        this.props.onSubmit(this.state);
        // xoa state
        this.resetForm();
        this.props.onCloseForm();
    }

    resetForm = () =>{
        this.setState({
            name: '', 
            status: false
        });
    }

  	render() {
        var {id} = this.state;
        return(
            <div className="panel panel-warning">
                <div className="panel-heading" >
                    <h2 className="panel-title">
                        {id === '' ? 'Thêm công việc' : 'Chỉnh sửa công việc'}
                        <i className="glyphicon glyphicon-remove textRight" 
                            style={this.Pointer("pointer")}
                            onClick={()=>this.props.onCloseForm()}

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
                            onClick={this.resetForm}
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

export default TabForm;
