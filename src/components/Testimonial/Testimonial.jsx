import React from 'react';
import './Testimonial.scss'

export default function Testimonial() {
    return (
        <div className="testimonial" id="testimonial">
            <h1>Testimonials</h1>
            <div className="container">
                <div className="card">
                    <div className="top">
                        <img src="assets/right-arrow.png" className="left" alt="" />
                        <img className="user" src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                        <img className="right" src="assets/youtube.png" alt="" />
                    </div>
                    <div className="center">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, assumenda.
                    </div>
                    <div className="bottom">
                        <h3>Rakibul hasan</h3>
                        <h4>CEO of Google</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
