import React, { Component } from 'react';
import './App.css';
import TabForm from './Components/TabForm';
import TabControl from './Components/TabControl';
import TabList from './Components/TabList';
import {connect} from 'react-redux';
import * as actions from './actions/index';


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
        };
    }


    setForm(){
        if(this.props.itemEditing === null)
        {
            this.props.onToggleForm();
        }
        else
        {
            this.props.onOpenForm();
        }
        this.props.editItemEditing(null);
    }

  	render() {       
        var {isDisplayForm} = this.props;
        return(
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                </div>
                <hr />
                <div className={isDisplayForm ?"col-xs-4 col-sm-4 col-md-4 col-lg-4":""}>
                    <TabForm />
                </div>


                <div className={isDisplayForm ?"col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12"}>

                    {/*Thêm công việc*/}
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <button type="button" className="btn btn-info"
                            onClick={()=>this.setForm()}
                        >
                            <i className="glyphicon glyphicon-plus"></i>&nbsp;
                            Thêm công viêc
                        </button>&nbsp;&nbsp;&nbsp;
                        <button type="button" className="btn btn-danger"
                            //onClick={()=>this.onGenerateData()}
                        >
                            Generate Data
                        </button>
                    </div>
                    <br /><br /><br />

                    {/*Search Sort*/}
                    <TabControl />
                    <br /><br /><br />

                    {/* Table list */}
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <TabList />
                    </div>
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
}
const mapDispatchToProps = (dispatch, props) =>{
    return{
        onOpenForm : () =>{
            dispatch(actions.openForm())
        },
        editItemEditing : (task) =>{
            dispatch(actions.editTask(task))
        },
        onToggleForm :() =>{
            dispatch(actions.toggleForm())
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
