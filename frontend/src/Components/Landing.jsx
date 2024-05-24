import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../Landing.css'
import logo from '../assets/img/logosp.png'
import about from '../assets/img/about1.png'
import pdf from '../assets/img/my-cv.pdf'
function Landing() {
  return (
    
    <>
    <div id="header">
        <div className="container">
            <nav>
                <img src={logo} className="logo"></img>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#services'>Features</a></li>
                    <li><a href='#contact'>Contact</a></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><a href='#'>Register</a></li>
                    
                    
                    <i className="fas fa-times"></i>
                </ul>
                <i className="fas fa-bars"></i>
            </nav>
            <div className="header-text">
                <p>Simplify Your Finances</p>
                <h1>DivvyHub:<span>Shared Expense</span><br /> Solution </h1>
                
                <button className="btn">
                <Link to='/home' style={{textDecoration:'none'}}>
      <span className="overlay"></span>
      <span className="text-wrapper">
        <span className="text"> Get Started </span>
        <span className="text cloned-text" aria-hidden="true"> Let's Split! </span>
      </span>
    </Link>
    </button>
            </div>
        </div>
    </div>
    
    <div id="about">
        <div className="container">
            <div className="row">
                <div className="about-col-1">
                    <img src={about}/>
                </div>
                <div className="about-col-2">
                    <h1 className="sub-title">About US</h1>
                    <p>Welcome to DivvyHub, where we're committed to streamlining your shared expenses. Our innovative platform is designed to empower users, enabling effortless management of finances among friends, roommates, and family members alike. Bid farewell to the tedious task of manually tracking bills and settling IOUs. With DivvyHub, you can embrace a new era of seamless coordination and financial harmony in all your shared endeavors.</p>
                    
                    
                    
                    
                </div>
            </div>
        </div>
    </div>
   
    <div id="services">
        <div className="container">
            <h1 className="sub-title">My Features</h1>
            <div className="services-list">
                <div>
                    <i className="fa-brands fa-android"></i>
                    <h2>Effortless Expense Management</h2>
                    <p>Simplify bill splitting among friends with ease. Add groups, track individual payments, and settle balances seamlessly for various activities or events.
                        </p>
                    <a href="#">Learn more</a>
                </div>
                <div>
                    <i className="fa-solid fa-code"></i>
                    <h2>Flexible Payment Options</h2>
                    <p>Easily input individual payments for accurate tracking. Enjoy the freedom to split bills according to your preferences and financial arrangements.</p>
                    <a href="#">Learn more</a>

                </div>
                <div>

                    <i className="fa-solid fa-crop-simple"></i>
                    <h2>Smart Calculation Tools</h2>
                    <p>Instantly calculate each member's share with precision. Our platform automates calculations, providing clear insights into shared expenses for hassle-free financial management.</p>
                    <a href="#">Learn more</a>
                </div>
            </div>
        </div>
    </div>
    <div id="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h1 className="sub-title">Contact Me</h1>
                        <p><i className="fas fa-paper-plane"></i> example@gmail.com</p>
                        <p><i className="fas fa-phone-square-alt"></i> 1234567890</p>
                        <div className="social-icons">
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-twitter-square"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin"></i></a>
                        </div>
                        <a href="#" download className="btn btn2">Let's Split</a>
                    </div>
                    <div className="contact-right">
                        <form>
                            <input type="text" name="Name" placeholder="Your Name" required />
                            <input type="email" name="Email" placeholder="Your Email" required />
                            <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                            <button type="submit" className="btn btn3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>Where every penny finds its perfect place in friendship's ledger.</p>
            </div>
        </div>
   
    
    </>
  )
}

export default Landing
