import React, { Component } from 'react';
import  { Breakpoint, BreakpointProvider } from 'react-socks';
import Fade from 'react-reveal/Fade';
import "./App.css";
import PoemContainer from './components/PoemContainer/PoemContainer';
import Intro from './poems/Intro/Intro';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          content: <Fade><Intro/></Fade>,
        };
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({
                content: <Fade><PoemContainer/></Fade>,
            })
        }, 4000);
    }

    render() {
        return (
            <div className="App">
                <BreakpointProvider>
                    <Breakpoint large up>
                        {this.state.content}
                    </Breakpoint>
                    <Breakpoint medium down>
                        <Fade>
                            <div className="unsupported">
                                <div style={{textAlign: "center", marginLeft: "5vw", marginRight: "5vw"}}>
                                    This experience is optimized for devices with larger screens. Please revisit from a desktop or laptop computer.
                                </div>
                            </div>
                        </Fade>
                    </Breakpoint>
                </BreakpointProvider>
            </div>
        );
    }
}

export default App;