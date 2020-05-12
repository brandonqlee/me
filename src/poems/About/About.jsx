import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="poem-container" style={{width: "60vw", margin: "auto"}}>
                <div className="poem-body-long">
                    <div style={{marginBottom: "3vh"}}>
                        <span style={{fontWeight: "bolder", fontSize: "20px"}}>Artist's Statement</span>
                    </div>
                    <div style={{fontWeight: "500"}}>
                    My life always felt a bit fragmented. I moved around about every two years because of my father’s occupation. The home I slept in, the school I went to everyday, and the friends I laughed with became a fragment of memory the instant I shut the car door behind me. I always had to leave just when I began to feel comfortable.
                    <br/><br/>
                    I wished I could have lived in the same neighborhood and grew up with the same group of friends. I always had a moment in the car or plane going to my new place to call home where I reflect on the life I had before. <span style={{fontWeight: "bolder"}}>I’LL MISS YOU</span> is based on this moment.
                    <br/><br/>
                    But I learned to try to see my life with another perspective. Not many can say they’ve met as many people or lived in a variety of places as I had. I am myself with my experiences that makes me unique.
                    <br/><br/>
                    I draw from my memories in my writing. I wanted to record and share my life’s milestones and experiences. My collection features poems revisiting my life and others suggesting its next steps. At the end, I walk back through my memories and see it through another perspective. I reminisce and see the moments of joy I had beyond the sad times. I was privileged to live such an adventurous life and to be able have many diverse experiences.
                    <br/><br/>
                    My life isn’t a collection of fragments but special puzzle pieces working together. They are assembled to write my unique story that’s still in progress. I thought I would be able to spend my entire four years of college uninterrupted for the first time. It’s funny how I had to temporarily leave college about two years in, just like my life before college. Times right now are highly uncertain, even scary. And it doesn’t seem to go away anytime soon. We are physically apart, but now we are closer together than ever. Just like how I now see my life, I hope you can also find your own special mirror to look past doubt and uncertainty towards hope.

                    </div>
                </div>
            </div>
        );
    }
}

export default About;