/*jshint esversion: 6 */
import React, {Component} from 'react';
import Header from '../views/header.js';
import Footer from '../views/footer.js';
import ReactDOM from "react-dom";
import axios from 'axios';

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
        axios.post(
            '/contact',{
                name: this.state.name,
                email: this.state.email,
                message: this.state.message
            },
            'json')
            .then(function(data) {
                console.log(data);
            })
            .catch(function(xhr, status, err) {
                console.error(status, err.toString());
            });
    }

    render() {
        return (
            <div name="Sara">
                <Header/>
                <div id="grid_page" class="grid-page">
                    <h1 class="title">Contact</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div class="row">
                            <label class="label">votre nom *</label>
                            <input id="" name="name" class="block" value={this.state.name} onChange={this.handleChange}/>
                        </div>
                        <div class="row">
                            <label class="label">votre email *</label>
                            <input id="" name="email" class="block" value={this.state.email} onChange={this.handleChange}/>
                        </div>
                        <div class="row">
                            <label class="label">votre message *</label>
                            <textarea name="message" class="block" value={this.state.message} onChange={this.handleChange}></textarea>
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
