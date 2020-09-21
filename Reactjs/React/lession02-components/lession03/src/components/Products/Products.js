import React, { Component } from 'react';

class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editing : false
        };
    }
    
    format_curency= (price)=> {
        return price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }

    show_info = (mgs)=>{
        alert(mgs);
    }

    changeState_BtnEdit = ()=>{
        this.setState({editing: true});
    }

    changeState_BtnSave = ()=>{
        this.setState({editing: false});
        console.log(this.txtName.value);
    }

    renderNormal = ()=>{
        return <div className="col-md-12 product-info smart-form" style={{marginTop:10}}>
                    <div className="form-group">
                        <button className="btn btn-info" onClick = {()=> this.changeState_BtnEdit()}>Edit</button>
                        <button className="btn btn-danger">Remove</button>
                    </div>
                </div>
    }

    renderForm = ()=>{
        return <div className="col-md-12 product-info smart-form" style={{marginTop:10}}>
                    <div className="form-group">
                        <input ref={(input)=>{this.txtName = input}} defaultValue={this.props.children} type="text" className="form-control" id="usr" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-info" onClick={()=>this.changeState_BtnSave()}>Save</button>
                    </div>
                </div>
    }

    showButton = ()=>{
        if(this.state.editing === false) return this.renderNormal();
        else return this.renderForm();
    }

    render() {
        return (
            <div className="col-xs-12 col-md-6">
                <div className="prod-info-main prod-wrap clearfix">            
                    <div className="row">
                        <div className="col-md-5 col-sm-12 col-xs-12">
                            <div className="product-image">
                            <img src={this.props.images} className="img-responsive" />
                            </div>
                        </div>
                        <div className="col-md-7 col-sm-12 col-xs-12">
                            <div className="product-deatil">
                                <h5 className="name">
                                    <a href="#">
                                    {this.props.children}
                                    </a>
                                    <br/>
                                    <a href="#">
                                    <span>Product Category</span>
                                    </a>
                                </h5>
                                <p className="price-container">
                                    <span>{()=>this.format_curency(this.props.price)}</span>
                                </p>
                                <span className="tag1" />
                            </div>
                            <div className="description">
                                <p>A short product description here</p>
                            </div>
                            <div className="product-info smart-form">           
                                <div className="row">
                                    <div className="col-md-12">
                                        <a data-toggle="modal" data-target="#myModal" className="btn btn-danger">Add to cart</a>
                                        <a onClick = {() => this.show_info(this.props.children)} className="btn btn-info">More info</a>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="rating">Rating:
                                            <label htmlFor="stars-rating-5"><i className="fa fa-star text-danger" /></label>
                                            <label htmlFor="stars-rating-4"><i className="fa fa-star text-danger" /></label>
                                            <label htmlFor="stars-rating-3"><i className="fa fa-star text-danger" /></label>
                                            <label htmlFor="stars-rating-2"><i className="fa fa-star text-warning" /></label>
                                            <label htmlFor="stars-rating-1"><i className="fa fa-star text-warning" /></label>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        
                        <hr/>
                        {this.showButton()}
                        
                    </div>      
                </div>
            </div>

        );
    }
}

export default Products;