import React, { Component } from 'react';

class TableOfContents extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="poem-container">
                <div className="poem-body toc">
                    <div style={{marginBottom: "3vh"}}>
                        <span style={{fontWeight: "bolder"}}>VHS VOL. 5</span>
                        &nbsp;&nbsp;
                        <span style={{fontSize: "12px"}}>After Carmen Giménez Smith</span>
                    </div>
                    <div style={{marginBottom: "3vh"}}>
                        <span style={{fontWeight: "bolder"}}>DEAR DIARY,</span>
                    </div>
                    <div style={{marginBottom: "3vh"}}>
                        <span style={{fontWeight: "bolder"}}>I’LL MISS YOU</span>
                        &nbsp;&nbsp;
                        <span style={{fontSize: "12px"}}>After Su Hwang</span>
                    </div>
                    <div style={{marginBottom: "3vh"}}>
                        <span style={{fontWeight: "bolder"}}>SEPTEMBER</span>
                    </div>
                    <div style={{marginBottom: "3vh"}}>
                        <span style={{fontWeight: "bolder"}}>CHOOSE-YOUR-OWN-UNEVENTFUL-DAY</span>
                    </div>
                    <div style={{marginBottom: "3vh"}}>
                        <span style={{fontWeight: "bolder"}}>1:49 AM</span>
                    </div>
                    <div style={{marginBottom: "3vh"}}>
                        <span style={{backgroundColor: "black"}}>Brandon</span>
                    </div>
                    <div>
                        ↑
                    </div>
                </div>
            </div>
        );
    }
}

export default TableOfContents;