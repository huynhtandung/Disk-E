import React, { Component } from 'react';
import './App.css';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            Product : [
            {
                ID: 1,
                Name: "I Phone 5 Plus",
                Price: 5000000
            },
            {
                ID: 2,
                Name: "I Phone 6 Plus",
                Price: 6000000
            }],
            isActive: true
            

        };
    }

    exchangeActive(){
        if(this.state.isActive === false){
            this.setState({
                isActive: true
            });
            
        }
        else{
            this.setState({
                isActive: false
            });
        }
    }

  	render() {
        var elements = this.state.Product.map((product, index) =>{
            var result;
            if(this.state.isActive === true)
                result = <tr key={index}>
                            <td>{product.ID}</td>
                            <td>{product.Name}</td>
                            <td>{product.Price}</td>
                        </tr>
            return result;
        })
        return(
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elements}
                    </tbody>
                </table>
                <button type="button" className="btn btn-default" onClick={()=>this.exchangeActive()} >Active {this.state.isActive?"Yes":"No"}</button>
            </div>
        );
  	}
}

export default App;
