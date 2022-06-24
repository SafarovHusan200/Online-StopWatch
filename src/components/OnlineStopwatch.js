import React from "react";

class OnlineStopWatch extends React.Component{
    state = {
        hour: 0,
        minute: 0,
        second: 0,
        btnDisabled: false,
        interval: "",
        intervalpage: [],
    }

    startclick = () => {

        this.setState({
            btnDisabled: true
        })
        let timer = setInterval(() => {
            const {hour, minute, second, btnDisabled} = this.state;
            
                if(second === 59){
                    if(minute === 59){
                        this.setState({
                            minute: 0,
                            hour: hour + 1
                        })
                    }else{
                        this.setState({
                            second: 0,
                            minute: minute + 1,
                        })

                    }
                }
                else{
                    this.setState({
                        second: second + 1
                    })
                }
        }, 1000);

        this.setState({
            interval: timer
        })
    }

    stopclick = () => {
        clearInterval(this.state.interval)
        this.setState({
            btnDisabled: false
        })
    }

    intervalsclick = () => {
        const {hour, minute, second, intervalpage } = this.state;
        intervalpage.push(`${hour}:${minute}:${second}`)
        this.setState({
            intervalpage: intervalpage
        })
    }

    clearclick = () => {
        this.stopclick()
        this.setState({
            hour: 0,
            minute: 0,
            second: 0,
            intervalpage: [],
        })
    }

    render(){
        const {hour, minute, second, btnDisabled, intervalpage} = this.state;
        return(
            <div>
                <div className="container bg-light text-center justify-center d-block">

                    <div className="card">
                        <div className="card-header">
                            <h1>Online StopWatch</h1>
                        </div>
                        <div className="card-body">
                            <div className="timer">
                                <div className="timer-hour">
                                    <p className="hour">{hour}</p>
                                    <p className="label">Hours</p>
                                </div>
                                <div className="timer-minute">
                                    <p className="hour">{minute}</p>
                                    <p className="label">Minutes</p>
                                </div>
                                <div className="timer-second">
                                    <p className="hour">{second}</p>
                                    <p className="label">Seconds </p>
                                </div>
                            </div>
                            <div className="btn-group">
                                <button
                                    onClick={this.startclick} 
                                    disabled={btnDisabled}
                                    
                                >
                                    Start
                                </button>
                                
                                <button
                                    onClick={this.stopclick}
                                    
                                >
                                    Stop
                                </button>

                                <button
                                    onClick={this.intervalsclick}
                                    disabled={!btnDisabled}
                                >
                                    Interval
                                </button>
                                <button
                                    onClick={this.clearclick}
                                >Clear</button>
                            </div>
                        </div>
                        <div className="card-footer">
                            {intervalpage.map((item, index) => <p>{index + 1}=&gt; {item}</p>)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OnlineStopWatch