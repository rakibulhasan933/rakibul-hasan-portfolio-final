import React from 'react';
import './Toper.scss';
import MailIcon from '@mui/icons-material/Mail';

export default function Toper({ menuOpen, setMenuOpen }) {
    return (
        <div className={"toper " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Rakibul</a>
                    <div className="itemContainer">
                        <MailIcon className="icon" />
                        <span><a href="mailto:rakibulmd933@gmail.com">Gmail</a></span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
