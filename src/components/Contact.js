import React, {Component} from 'react';
import { Prompt } from "react-router-dom";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        };
    }

    allow = () => {
        this.setState({ isChecked: false });
    }

    notAllow = () => {
        this.setState({ isChecked: true });
    }

    render() {
        return (
            <div>
                this is Contact page <br/>
                <button type="button" className="btn btn-info" onClick={this.allow}>Allow</button><br/>
                <button type="button" className="btn btn-danger" onClick={this.notAllow}>Not Allow</button>
                <Prompt when={this.state.isChecked} message={ location => (`Are you sure you want to go to ${location.pathname}`)} />
            </div>
        );
    }
}

export default Contact;