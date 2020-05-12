import React, { Component } from 'react';

class Title extends Component {
    render() {
        return (
            <div className="poem-container">
                <div className="poem-body title">
                    <div style={{marginBottom: "3vh"}}>
                        <span style={{fontWeight: "bolder", fontSize: "30px"}}>Perspective</span>
                    </div>
                    <div style={{marginBottom: "3vh"}}>
                        <span>2020</span>
                    </div>
                    <div>
                        <span>Brandon Lee</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Title;