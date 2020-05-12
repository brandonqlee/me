import React, { Component } from 'react';
import  { Breakpoint, BreakpointProvider } from 'react-socks';
import Fade from 'react-reveal/Fade';
import "./App.css";
import PoemContainer from './components/PoemContainer/PoemContainer';
import Intro from './poems/Intro/Intro';
import TableOfContents from './poems/TableOfContents/TableOfContents';
import Title from './poems/Title/Title';
import Thanks from './poems/Thanks/Thanks';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: <Fade><Title/></Fade>,
        };
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({
                content: <Fade><Fade><TableOfContents/></Fade></Fade>,
            })
        }, 4000);
        setTimeout(() => {
            this.setState({
                content: <Fade><Fade><Fade><Thanks/></Fade></Fade></Fade>,
            })
        }, 14000);
        setTimeout(() => {
            this.setState({
                content: <Fade><Intro/></Fade>,
            })
        }, 21000);
        setTimeout(() => {
            this.setState({
                content: <Fade><PoemContainer/></Fade>,
            })
        }, 25000);
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