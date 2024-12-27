import React , {Component} from 'react';

class DigitalClock extends Component {
    constructor(props){
        super (props);
        this.state = {
            time : new Date(),
        }
    }
    componentDidMount(){
        this.timeId = setInterval(()=>this.updateTime(),1000)
    }

    updateTime(){
        this.setState({
            time :new Date(),
        })
    }

    render(){
        return (
            <div>
                <h1>
                    {this.state.time.toLocaleTimeString()}
                </h1>
            </div>
        )
    }
}

export default DigitalClock;