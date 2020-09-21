import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            txtUsername: '',
            txtPassword: '',
            txtDesc: '',
            sltGender: 0,
            rdLang: 'en',
            chkbHTML: false,
            chkbCSS: true
        };
        this.onHandelChange = this.onHandelChange.bind(this);
        this.onHandelSubmit = this.onHandelSubmit.bind(this);
    }

    onHandelChange(event){
        var target = event.target;
        var name = target.name;
        var value = target.type==='checkbox'?target.checked:target.value;
        this.setState({
            [name] : value
        });
    }

    onHandelSubmit(event){
        event.preventDefault();
        console.log(this.state)
    }

    

  	render() {
        return(
            <div className="container">
                <form onSubmit={this.onHandelSubmit}>
                    <legend>Fom ReactJs</legend>
                    <div className="form-group">
                        <label >Username</label>
                        <input value={this.state.txtUsername} type="text" className="form-control" name='txtUsername' onChange={this.onHandelChange} />
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input value={this.state.txtPassword}type="password" className="form-control" name='txtPassword' onChange={this.onHandelChange} />
                    </div>
                    <div className="form-group">
                        <label >Description</label>
                        <textarea value={this.state.txtDesc} name="txtDesc" className="form-control" rows="3" onChange={this.onHandelChange}></textarea>
                    </div>
                    <label>Gioi tinh </label>
                    <select name="sltGender" className="form-control" value={this.state.sltGender} onChange={this.onHandelChange}>
                        <option value={0}>Nu</option>
                        <option value={1}>Nam</option>
                    </select>
                    <label>Ngon ngu </label>
                    <div className="radio">
                        <label>
                            <input type="radio" name="rdLang" value='en' onChange={this.onHandelChange} checked={this.state.rdLang === 'en'} />
                            English
                        </label>&nbsp;&nbsp;&nbsp;
                        <label>
                            <input type="radio" name="rdLang" value='vi' onChange={this.onHandelChange} checked={this.state.rdLang === 'vi'} />
                            Vietnamese
                        </label>
                    </div>
                    <label></label>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value={true} name='chkbHTML' onChange={this.onHandelChange} checked={this.state.chkbHTML === true} />
                            HTML
                        </label>
                        &nbsp;&nbsp;
                        <label>
                            <input type="checkbox" value={true} name='chkbCSS' onChange={this.onHandelChange} checked={this.state.chkbCSS === true} />
                            CSS
                        </label>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-info">Lưu lại</button>
                </form>
            </div>
        );
  	}
}

export default App;
