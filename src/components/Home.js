import { Component } from "react";

class Home extends Component{
    constructor(props){
        super();
        this.state = {
            time: new Date().toLocaleTimeString(),
            clicks: 0
        };
        this.props = props
    }
    componentDidMount(){
        // console.log("Mounted")
        setInterval(() => {
            this.setState({ time: new Date().toLocaleTimeString() })
        }, 1000);
    }

    clickGame() {
        this.state.clicks++;
        if(this.state.clicks%15==0) alert("FizzBuzz");
        else if(this.state.clicks%3==0) alert("Fizz");
        else if(this.state.clicks%5==0) alert("Buzz");
    }
    render(){
        // console.log(this.props.bootcamp);
        return(
            <div>
                <h2>
                    Welcome to {this.props.bootcamp}.
                    It is {this.state.time}
                </h2>
                <button onClick={() => this.clickGame()}> 
                    Clicky Game
                </button>
                {this.state.clicks>0?<h4>{this.state.clicks} Clicks</h4>:null}
            </div>
        );
    }
}

export default Home