import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import VHSVol5 from '../../poems/VHSVol5/VHSVol5';
import DearDiary from '../../poems/DearDiary/DearDiary';
import IllMissYou from '../../poems/IllMissYou/IllMissYou';
import September from '../../poems/September/September';
import AM145 from '../../poems/AM145/AM145';
import ChooseYourOwn from '../../poems/ChooseYourOwn/ChooseYourOwn';
import Letter from '../../poems/Letter/Letter';
import "./PoemContainer.css";

class PoemContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            black: true
        };
    }

    // componentDidMount = () => {
    //     setTimeout(() => {
    //         this.setState({
    //             content: <VHSVol5/>,
    //         })
    //     }, 7500);
    // }

    // handlePrev = () => {
    //     this.setState({
    //         currPoem: this.state.currPoem - 1
    //     })
    // }

    // handleNext = () => {
    //     this.setState({
    //         currPoem: this.state.currPoem + 1
    //     })
    // }

    switchBW = () => {
        this.setState({
            black: !this.state.black
        })
    }

    render() {
        return (
            <Fade>
                <div className="page-container">
                <div className="poem-divider" id={this.state.black ? "poem-transition-white-black" : "poem-transition-black-white"}>
                    {this.state.black ? "" : <a>The end</a>}
                </div>
                <div className={(this.state.black ? "black" : "white") + " secret"}>
                    <VHSVol5/>
                </div>
                <div className={"poem-divider " + (this.state.black ? "black" : "white")}>
                    <div>
                        <span style={{color: "black"}}>shine</span>
                    </div>
                    <div>
                        <span style={{color: "black"}}>let's</span>
                    </div>
                    <div>
                        <span style={{color: "black"}}>But</span>
                    </div>
                    <div>
                        <span style={{color: "black"}}>unknown.</span>
                    </div>
                    <div>
                        <span style={{color: "black"}}>the</span>
                    </div>
                    <div>
                        <span style={{color: "black"}}>of</span>
                    </div>
                </div>
                <div className={(this.state.black ? "black" : "white") + " secret"}>
                    <DearDiary/>
                </div>
                <div className={"poem-divider " + (this.state.black ? "black" : "white")}>
                    <div>
                        <span style={{color: "black"}}>on</span>
                    </div>
                    <div>
                        <span style={{color: "black"}}>perspective</span>
                    </div>
                    <div>
                        <span style={{color: "black"}}>unique</span>
                    </div>
                    <div>
                        <span style={{color: "black"}}>a</span>
                    </div>
                    <div>
                        <span style={{color: "black"}}>me</span>
                    </div>
                    <div>
                        <span style={{color: "black"}}>gives</span>
                    </div>
                </div>
                <div className={(this.state.black ? "black" : "white") + " secret"}>
                    <IllMissYou/>
                </div>
                <div className={"poem-divider " + (this.state.black ? "black" : "white")}>
                    <div>
                        <span style={{color: "black"}}>is</span>
                    </div>
                    <div>
                        <span style={{color: "black"}}>it</span>
                    </div>
                    <div>
                        <span style={{color: "black"}}>see</span>
                    </div>
                    <div>
                        <span style={{color: "black"}}>you</span>
                    </div>
                    <div>
                        <span style={{color: "black"}}>How</span>
                    </div>
                </div>
                <div className={(this.state.black ? "black" : "white") + " secret"}>
                    <September/>
                </div>
                <div className={"poem-divider " + (this.state.black ? "black" : "white")}>
                    <div>
                        <span style={{color: "black"}}>hellos.</span>
                    </div>
                    <div>
                        <span style={{color: "black"}}>warm</span>
                    </div>
                    <div>
                        <span style={{color: "black"}}>new</span>
                    </div>
                </div>
                <div className={(this.state.black ? "black" : "white") + " secret"}>
                    <AM145/>
                </div>
                <div className="poem-divider" id={this.state.black ? "poem-transition-black-white" : "poem-transition-white-black"}></div>
                <div className={(this.state.black ? "white" : "black") + " secret"} style={{color: "black"}}>
                    <ChooseYourOwn highlight={this.state.black ? "lightgray" : "black"}/>
                </div>
                <div className={"poem-divider " + (this.state.black ? "white" : "black")}>
                    <div>
                        was
                    </div>
                    <div>
                        life
                    </div>
                    <div>
                        my
                    </div>
                    <div>
                        Although
                    </div>
                </div>
                <div className={(this.state.black ? "white" : "black")  + " secret"} style={{color: "black"}}>
                    <Letter switchBW={this.switchBW.bind(this)} highlight={this.state.black ? "black" : "white"}/>
                </div>
            </div>
            </Fade>
        );
    }
}

export default PoemContainer;