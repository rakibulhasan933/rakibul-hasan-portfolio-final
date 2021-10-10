import React, { useEffect, useRef } from 'react';
import './Intro.scss'
import { init } from 'ityped';

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Web Developer', 'React Developer', 'Designer', 'MERN STACK Developer', 'Developer']
        })
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There I'am</h2>
                    <h1>Rakibul Hasan</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#myProtfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
