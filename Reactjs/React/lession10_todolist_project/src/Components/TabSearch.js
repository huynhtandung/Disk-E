import React, { Component } from 'react';

class TabSearch extends Component {

    constructor(props){
        super(props);
        this.state={
            keyword: ''
        }
    }

    onChange = (event) =>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        
        this.setState({
            [name]: value
        });
    }

    onSearch = () =>{
        this.props.onSearch(this.state.keyword);
    }

  	render() {
    	return(
            <div className="input-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Nhap tu khoa..."
                    name="keyword"
                    onChange={this.onChange}
                />                    
                
                <span className="input-group-btn">
                    <button type="button" className="btn btn-info"
                        onClick={this.onSearch}
                    >
                        <i className="glyphicon glyphicon-search"></i>&nbsp;
                        Tìm
                    </button>
                </span>
            </div>  
    	);
 	}
}

export default TabSearch;
