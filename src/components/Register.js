import React from 'react'
import '../styles/style.css'
import { useState, useEffect } from 'react'

const Register = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    })

    const handelInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({...user, [name]: value})
        console.log(user)
    }
  return (
    <div className="login-container">
        <div className="left">
            <div className="form-container">
                <h1 className="title">Register</h1>
                <h3 className="subtitle">Discover a better way of traveling with RideIT</h3>
                <div className="input-containers">
                    <label class="input" htmlFor="name">
                        <input class="input__field" name="name" type="text" placeholder=" " onChange={handelInput} />
                        <span class="input__label">
                            <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_80_63)">
                                <path d="M20.822 18.096C17.383 17.302 14.182 16.606 15.732 13.678C20.452 4.766 16.983 0 12 0C6.918 0 3.536 4.949 8.268 13.678C9.865 16.623 6.543 17.319 3.178 18.096C0.104998 18.806 -0.0100023 20.332 -2.26349e-06 23L0.00399774 24H23.994L23.998 23.031C24.01 20.343 23.906 18.809 20.822 18.096Z" fill="#333E3E" fill-opacity="0.6"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_80_63">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                            </span>
                                Enter your name
                            </span>
                    </label>
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
                    <label class="input" htmlFor="phone">
                        <input class="input__field" name="phone" type="number" placeholder=" " onChange={handelInput} />
                        <span class="input__label">
                            <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 22.621L16.479 15.826C16.471 15.83 14.505 16.796 14.415 16.837C12.175 17.923 7.61604 9.017 9.80604 7.843L11.889 6.817L8.39604 0L6.29004 1.039C-0.911963 4.794 10.523 27.021 17.89 23.654C18.011 23.599 19.992 22.625 20 22.621Z" fill="#333E3E" fill-opacity="0.6"/>
                            </svg>
                            </span>
                            Enter your phone
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
                    <button>Register</button>
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

export default Register