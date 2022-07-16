import React, {Component} from "react";

class Subscribe extends Component {

    constructor(){
        super();
        this.state = {
            message: 'Welcome Visitors'
        };
    }

    subscribed(){
       this.setState({
                 message:'Thank you for subscribing.'
       });
    };

    render(){
         return(
            <div>
        <h1>{this.state.message}</h1>
        <button onClick={ () => {this.subscribed()}}>Subscribe</button>
            </div>
         )
    }
};

export default Subscribe;