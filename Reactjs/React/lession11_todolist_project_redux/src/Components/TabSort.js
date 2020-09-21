import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class TabSort extends Component {

    constructor(props){
        super(props);
        this.state={
            sort: {
                by: '',
                value: 1
            },
            title: "Sắp xếp"
        }
    }

    onClick =(sortBy, sortValue) =>{
        var ob = {
            by: sortBy,
            value: sortValue
        };
        this.props.onSort(ob);

        this.setState({
            sort: {
                by: sortBy,
                value: sortValue
            }
        });
        
        if(sortBy === 'name'){
            if(sortValue === 1){
                this.setState({
                    title: "Từ A - Z"
                });
            }
            else
            {
                this.setState({
                    title: "Từ Z - A"
                });
            }
        }else{
            if(sortValue === 1){
                this.setState({
                    title: "Kích hoạt"
                });
            }
            else
            {
                this.setState({
                    title: "Ẩn"
                });
            }
        }

    }
  	render() {
        var {by, value} = this.state.sort;
    	return(
            <div className="dropdown">
                <button data-toggle="dropdown" type="button" className="btn btn-info">
                    {this.state.title} &nbsp;
                    <i className="glyphicon glyphicon-triangle-bottom"></i>
                </button>
                <ul className="dropdown-menu">
                    <li onClick={()=>this.onClick('name', 1)}>
                        <a role="button" >
                            <i className="glyphicon glyphicon-sort-by-alphabet"></i>&nbsp;&nbsp;
                            Tên A - Z&nbsp;
                            <i className={by === 'name' && value ===1 ?"glyphicon glyphicon-ok":""}></i>
                        </a>
                    </li>
                    <li onClick={()=>this.onClick('name', -1)}>
                        <a role="button" >
                            <i className="glyphicon glyphicon-sort-by-alphabet-alt"></i>&nbsp;&nbsp;
                            Tên Z - A&nbsp;
                            <i className={by === 'name' && value ===-1 ?"glyphicon glyphicon-ok":""}></i>
                        </a>
                    </li>
                    <li onClick={()=>this.onClick('status', 1)}>
                        <a role="button" >
                            Trạng thái kích hoạt
                            &nbsp;
                            <i className={by === 'status' && value ===1 ?"glyphicon glyphicon-ok":""}></i>
                        </a>
                    </li>
                    <li onClick={()=>this.onClick('status', -1)}>
                        <a role="button" >
                            Trạng thái ẩn
                            &nbsp;
                            <i className={by === 'status' && value ===-1 ?"glyphicon glyphicon-ok":""}></i>
                        </a>
                    </li>
                </ul>
            </div>
    	);
 	}
}
const mapDispatchToProps = (dispatch, props) =>{
    return{
        onSort : (ob) =>{
            dispatch(actions.sort(ob))
        }
    }
}
export default connect(null, mapDispatchToProps)(TabSort);
