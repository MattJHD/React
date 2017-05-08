/*jshint esversion: 6 */
import React, {Component} from 'react';
import Header from '../views/header.js';
import Footer from '../views/footer.js';
import ReactDOM from "react-dom";
//import axios from 'axios';

function handleContact(evt) {
    console.log(evt);
    console.log(evt.target.parentElement);
    console.log(this);
    evt.preventDefault();
}

class Contact extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        // this.setState({field: this.state.value});
        // console.log(this);
        const name = evt.target.name;
        // const name = evt.target.name;
                console.log(evt.target.value);
        this.setState({
          [name]: evt.target.value
        });
                console.log(this.state);
        // console.log(this.state[field]);
        // console.log(this.state.field);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name + ' email: ' + this.state.email + ' message: ' + this.state.message );
        event.preventDefault();
        
        var sendTo = this.state.email;
        var sub = this.state.name;
        var message = this.state.message;
        var data = {
        from: '"Matthieu" <matthieudurand.graphisme@gmail.com>',
        to: sendTo,
        subject: sub,
        text: message,
        html: '<b>'+message+'</b>'
        };
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:80/sendMail", true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(JSON.stringify(data));
    }

    render() {
        return (
            <div name="Sara">
                <Header/>
                <div id="grid_page" className="grid-page">
                    <h1 className="title">Contact</h1>
                    <form onSubmit={this.handleSubmit} className="form">
                        <div className="row">
                            <label className="label">votre nom *</label>
                            <input id="" name="name" className="block" value={this.state.name} onChange={this.handleChange}/>
                        </div>
                        <div className="row">
                            <label className="label">votre email *</label>
                            <input id="" name="email" className="block" value={this.state.email} onChange={this.handleChange}/>
                        </div>
                        <div className="row">
                            <label className="label">votre message *</label>
                            <textarea name="message" rows="20" className="block" value={this.state.message} onChange={this.handleChange}></textarea>
                        </div>
                        <input type="submit" value="contact us !" id="btn_contact"/> {/* <input type="submit" value="contact us !" id="btn_contact" onClick={this.handle.bind(this)}/> */}
                    </form>
                </div>
                <Footer/>
            </div>
        );
    }
};

export default Contact;
