import React, { Component } from 'react';

class Letter extends Component {
    render() {
        return (
            <div className="poem-container">
                <div className="poem-body">
                    <span style={{backgroundColor: this.props.highlight}}>Brandon</span>,&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;<span style={{color: "white"}}>↑</span><br/>
                    <br/>
                    I’m going to keep it short. Don’t <span style={{backgroundColor: this.props.highlight}}>continue</span> to be <span style={{backgroundColor: this.props.highlight}}>discouraged</span>. <span style={{backgroundColor: this.props.highlight}}>Mistakes</span> are bound<br/>
                    to <span style={{backgroundColor: this.props.highlight}}>happen</span>, and some <span style={{backgroundColor: this.props.highlight}}>days</span> are just <span style={{backgroundColor: this.props.highlight}}>unideal</span>. Look <span style={{backgroundColor: this.props.highlight}}>forward</span>. <span style={{backgroundColor: this.props.highlight}}>Noone</span> is going to<br/>
                    remember. <span style={{backgroundColor: this.props.highlight}}></span>Correcting any wrongs and <span style={{backgroundColor: this.props.highlight}}></span>continuing on is <span style={{backgroundColor: this.props.highlight}}></span>what’s important.<br/>
                    <span style={{backgroundColor: this.props.highlight}}>Challenges</span> will be waiting for you <span style={{backgroundColor: this.props.highlight}}>ahead</span>. But that’s all <span style={{backgroundColor: this.props.highlight}}>part</span> of <span style={{backgroundColor: this.props.highlight}}>learning</span>. I know<br/>
                    you were <span style={{backgroundColor: this.props.highlight}}>hesitant</span> with <span style={{backgroundColor: this.props.highlight}}>poetry</span>. <span style={{backgroundColor: this.props.highlight}}>Don’t</span> you <span style={{backgroundColor: this.props.highlight}}>think</span> it was one of your <span style={{backgroundColor: this.props.highlight}}>best</span> decisions?<br/>
                    Your life is an <span style={{backgroundColor: this.props.highlight}}>ocean</span> filled with <span style={{backgroundColor: this.props.highlight}}>opportunities</span>. Go on more <span style={{backgroundColor: this.props.highlight}}>adventures</span>. I hope you<br/>
                    can make the best of it.
                </div>
                <div>
                    <button onClick={this.props.switchBW} style={{color: this.props.highlight, borderColor: this.props.highlight}}>...</button>
                </div>
            </div>
        );
    }
}

export default Letter;