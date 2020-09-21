import React, { Component } from 'react';
import './App.css';
import TabForm from './Components/TabForm';
import TabControl from './Components/TabControl';
import TabList from './Components/TabList';
//import {findIndex, filter} from 'lodash';


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            tasks: [],   //id: unique, name, status
            isDisplayForm: false,
            //title: '',
            tabEditting: null,
            filter: {
                name: '',
                status: -1
            },
            keyword: '',
            sortBy: '',
            sortValue: -1
        };
        //this.setForm = this.setForm.bind(this);
    }

    componentWillMount(){
        if(localStorage && localStorage.getItem('tasks')){
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks: tasks
            })
        }
    }

    onGenerateData(){
        var tasks = [
            {
                id: this.generateID(),
                name: 'Học lập trình ',
                status: true
            },
            {
                id: this.generateID(),
                name: 'Đi bơi ',
                status: false
            },
            {
                id: this.generateID(),
                name: 'Ngủ ',
                status: true
            }
        ];
        this.setState({
            tasks: tasks
        });
        //localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    s4(){
        return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
    }

    generateID(){
        return this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4();
    }

    setForm(){
        this.setState({
            isDisplayForm: true,
            //title: "Thêm công việc",
            tabEditting: null
        });
    }

    onCloseForm(){       
        this.setState({
            //isDisplayForm: (this.state.isDisplayForm ? false : true)
            isDisplayForm: false
        });
    }

    onSubmit = (data) =>{
        var {tasks} = this.state;
        if(data.id === ''){
            data.id = this.generateID();
            tasks.push(data);
        }else{
            var index = this.findIndex(data.id);
            tasks[index] = data;
        }
        
        this.setState({
            tasks: tasks,
            //tabEditting: null
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    onUpdateStatus =(id)=>{
        var {tasks} = this.state;
        var index = this.findIndex(id);
        
        //console.log(index);
        /*var index = findIndex(tasks, (task)=>{
            return task.id == id;
        });*/

        if(index !== -1){
            tasks[index].status = !tasks[index].status;
            this.setState({
                tasks: tasks
            });
            //localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

    findIndex = (id)=>{
        var {tasks} = this.state;
        var result = -1;
        tasks.forEach((task, index)=>{
            if(task.id === id){
                result = index;
            }
        });
        return result;
    }

    onDelete = (id)=>{
        var {tasks} = this.state;
        var index = this.findIndex(id);
        if(index !== -1){
            tasks.splice(index, 1);
            this.setState({
                tasks: tasks
            });
            //localStorage.setItem('tasks', JSON.stringify(tasks));
            this.onCloseForm();
        }
    }

    onEdit=(id)=>{
        this.setState({
            isDisplayForm: true,
            //title: "Chỉnh sửa công việc"
        });

        var {tasks} = this.state;
        var index = this.findIndex(id);
        var tabEditting = tasks[index];
        

        this.setState({
            tabEditting: tabEditting
        });


    }

    onFilter  = (filterName, filterStatus) =>{
        //filterStatus = parseInt(filterStatus);
        filterStatus = +filterStatus;
        this.setState({
            filter:{
                name: filterName.toLowerCase(),
                status: filterStatus
            }
        });

    }

    onSearch = (keyword) =>{
        this.setState({
            keyword: keyword
        });
    }

    onSort =(by, value) =>{
        this.setState({
            sortBy: by,
            sortValue: value
        });
    }

  	render() {
        var {tasks, isDisplayForm, tabEditting, filter, keyword, sortBy, sortValue} = this.state;
        if(filter){
            if(filter.name){
                tasks = tasks.filter((task)=>{
                    return (task.name.toLowerCase().indexOf(filter.name) !==-1);
                });
            }
            tasks = tasks.filter((task)=>{
                if(filter.status === -1)
                    return task;
                else{
                    return task.status === (filter.status === 1 ? true : false)
                }
            });
        }

        if(keyword){
            tasks = tasks.filter((task)=>{
                return (task.name.toLowerCase().indexOf(keyword) !==-1);
            });
           /*tasks = filter(tasks, (task)=>{
                return task.name.toLowerCase().indexOf(keyword.toLowerCase())!==-1;
            })*/
        }

        if(sortBy === 'name'){
            tasks.sort((a, b)=>{
                if(a.name > b.name) return sortValue;
                else if(a.name < b.name) return -sortValue;
                else return 0;
            });
        }
            /*tasks.sort(function(a, b){
                if (a.name > b.name) return sortValue;
                else if(a.name < b.name) return -sortValue;
                else return 0;
            });*/
        if(sortBy === 'status'){
            tasks.sort((a, b)=>{
                if(a.status > b.status) return -sortValue;
                else if(a.status < b.status) return sortValue;
                else return 0;
            });
        }

        {/* Tuong tu voi var tasks = this.state.tasks */}
        var elemTabForm = isDisplayForm ? <TabForm onCloseForm={()=>this.onCloseForm()}
                            onSubmit = {this.onSubmit}
                            //title={this.state.title}
                            tabEditting = {tabEditting}
                        >


                        </TabForm> : "";

        return(
            <div className="container">

                {/* Tiêu đề */}
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                </div>
                <hr />

                {/* Form*/  }
                <div className={isDisplayForm ?"col-xs-4 col-sm-4 col-md-4 col-lg-4":""}>
                    {elemTabForm}
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
                            onClick={()=>this.onGenerateData()}
                        >
                            Generate Data
                        </button>
                    </div>
                    <br /><br /><br />

                    {/*Search Sort*/}
                    <TabControl 
                        search={this.onSearch}
                        sort={this.onSort}
                    >
                    </TabControl>
                    <br /><br /><br />

                    {/* Table list */}
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <TabList 
                            tasks={ tasks }
                            onUpdateStatus={this.onUpdateStatus}
                            onDelete={this.onDelete}
                            onEdit={this.onEdit}
                            onFilter={this.onFilter}
                        >
                        </TabList>
                    </div>
                </div>
            </div>
        );
  	}
}

export default App;
