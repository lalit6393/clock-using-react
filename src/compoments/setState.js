import React, {Component} from "react";
import style from './setState.module.css';

class State extends Component {

    constructor(props){
          super(props);
          this.state = {
            hour:0,          
            min:0,
            sec: 0,
            clicked:0
          };
    };

    start(){
      if(this.state.clicked === 0){
        this.counter();
      };

      this.setState({
        clicked: 1
      });
    };

    counter(){
        const hour = document.querySelector('#H');
        const min = document.querySelector('#M');
        const sec = document.querySelector('#S');
        const date = new Date();
        // console.log(date.getHours(),"/",date.getMinutes(),"/", date.getSeconds());



        this.setState({
                hour:date.getHours(),
                min:date.getMinutes(),
            }, () => {
                if(this.state.hour >= 12){
                    this.setState({
                        hour: this.state.hour - 12
                    });
                };
                hour.style.transform = 'rotate('+ (this.state.hour*60 + this.state.min)*0.5 +'deg)';
                min.style.transform = 'rotate('+ this.state.min*6 +'deg)';
            });

        setInterval(() => {
            if(this.state.sec >= 60){
                this.setState({
                    sec:0
                });
            };

            this.setState((prevState) => ({
                sec : prevState.sec + 1
         }), () => {
            // console.log("sec", this.state.sec);
            sec.style.transform = 'rotate('+ this.state.sec*6 +'deg)';
            // console.log(this.state.sec * 6);
            // console.log(sec.rotate(0));
         });
        }, 1000);


        setInterval(() => {
            if(this.state.min >= 60){
                this.setState({
                    min:0
                });
                if(this.state.hour >= 12){
                    this.setState({
                        hour: this.state.hour - 12
                    });
                };
                this.setState((prevState) => ({
                    hour : prevState.hour + 1
             }));
            };


            this.setState((prevState) => ({
                min : prevState.min + 1
         }), () => {
            // console.log("min", this.state.min);
            min.style.transform = 'rotate('+ this.state.min*6 +'deg)';
            hour.style.transform = 'rotate('+ (this.state.hour*60 + this.state.min)*0.5 +'deg)';
            // console.log("min",this.state.min * 6);
         });
        }, 60000);


    //     setInterval(() => {

    //         if(this.state.hour >= 12){
    //             this.setState({
    //                 hour: this.state.hour - 12
    //             });
    //         };
    //         this.setState((prevState) => ({
    //             hour : prevState.hour + 1
    //      }));
    //     }, 3600000 );
    };

    render(){
        return(
            <div>
             <h1>{this.state.hour}:{this.state.min}:{ this.state.sec}</h1>
             <button className = {style.StartButton} onClick = { () => { this.start() }}>Start</button>
             <div className = {style.page}>
                <div className = {style.maindiv}>
                    <div className = {style.clockframe}>
                        <div className = {style.centre}></div>
                        <div id="H" className = {style.hour}></div>
                        <div id="M" className = {style.minute}></div>
                        <div id="S" className = {style.second}></div>
                        <div className = {style.top}></div>
                        <div className = {style.left}></div>
                        <div className = {style.bottom}></div>
                        <div className = {style.right}></div>
                    </div>
                </div>
             </div>
            </div>
        )
    };
};

export default State;