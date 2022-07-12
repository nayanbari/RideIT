import React from 'react'
import '../styles/style.css'

const Login = () => {

    const handelInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value)
    }
  return (
    <div className="login-container">
        <div className="left">
            <div className="form-container">
                <h1 className="title">Login</h1>
                <h3 className="subtitle">Discover a better way of traveling with RideIT</h3>
                <div className="input-containers">
                    <label class="input" htmlFor="email">
                        <input class="input__field" name="email" type="text" placeholder=" " onChange={handelInput} />
                        <span class="input__label">
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 3V21H24V3H0ZM21.518 5L12 12.713L2.482 5H21.518ZM2 19V7.183L12 15.287L22 7.183V19H2Z" fill="#333E3E" fill-opacity="0.6"/>
                            </svg>
                            </span>
                            Enter your email
                        </span>
                    </label>
                    <label class="input" htmlFor="password">
                        <input class="input__field" name="password" type="text" placeholder=" " onChange={handelInput} />
                        <span class="input__label">
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 10V6C18 2.687 15.313 0 12 0C8.687 0 6 2.687 6 6V10H3V24H21V10H18ZM13 17.723V20H11V17.723C10.405 17.376 10 16.739 10 16C10 14.896 10.896 14 12 14C13.104 14 14 14.896 14 16C14 16.738 13.596 17.376 13 17.723ZM8 10V6C8 3.794 9.794 2 12 2C14.205 2 16 3.794 16 6V10H8Z" fill="#333E3E" fill-opacity="0.6"/>
                            </svg>
                            </span>
                            Enter your password
                        </span>
                    </label>
                </div>
                <div className="btn-container">
                    <button>Login</button>
                </div>
            </div>
        </div>
        <div className="right">
            <div className="text">
                <h2>“Choosing it was a no-brainer. It’s easy to set up and the support experience is unparalledled.”</h2>
                <p>Sanskruti Rajput
                    <br />
                    <span>Website Developer</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Login