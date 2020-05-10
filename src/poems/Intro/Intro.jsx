import React, { Component } from 'react';
import ImageFadeIn from "react-image-fade-in";
import roll from "../../assets/images/roll.png";
// import strip1 from "../../assets/images/strip1.png";
// import strip2 from "../../assets/images/strip2.png";
// import strip3 from "../../assets/images/strip3.png";
import "./Intro.css";

// function Roll() {
//     return <ImageFadeIn className="intro-img" id="intro-0" src={roll} opacityTransition="2" />;
// }

// function Strip1() {
//     return <ImageFadeIn className="intro-img" id="intro-1" src={strip1} opacityTransition="2" />;
// }

// function Strip2() {
//     return <ImageFadeIn className="intro-img" id="intro-2" src={strip2} opacityTransition="2" />;
// }

// function Strip3() {
//     return <ImageFadeIn className="intro-img" id="intro-3" src={strip3} opacityTransition="2" />;
// }

class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {
        //   currImg: 0,
        };
    }

    // componentDidMount = () => {
    //     setTimeout(() => {
    //         this.setState({
    //             currImg: 1,
    //         })
    //         // setTimeout(() => {
    //         //     this.setState({
    //         //         currImg: 2,
    //         //     })
    //         //     setTimeout(() => {
    //         //         this.setState({
    //         //             currImg: 3,
    //         //         })
    //         //     }, 1000);
    //         // }, 2000);
    //     }, 4000);
    // }
    
    render() {
        return (
            <div className="intro-container">
                <ImageFadeIn className="intro-img" id="intro-0" src={roll} opacityTransition="2" />
            </div>
        );
    }
}

export default Intro;