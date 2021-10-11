import '../css/OnboardingMsg.css'
import React from 'react';

const OnboardingMsg = () => {
    return (
        <div>
            <div id="overlay"></div>
            <div className="onboardingmsg">
                <h1 id="msg">Please take 5-6 steps back from the <br/>screen to enjoy the experience </h1>
                <h3 id="submsg">(Your <span id="knees-text">knees</span> should be visible in the camera frame)</h3>
            </div>

        </div>

    )
}

export default OnboardingMsg
