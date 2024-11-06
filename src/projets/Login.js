import React from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'font-awesome/css/font-awesome.min.css';
import GoogleIcon from '../assets/images/Google icon.png';
import image1 from '../assets/images/image1.png';

function Login() {
    return (
        <div className='login'>
             <div className="container-fluid mt-5">              
                <div className="container mt-5">
                    <h1 className='police'> <i class="fa fa-long-arrow-left " ></i></h1>
                            <div className='row'>
                                <div className='col-lg-4 nina'>
                                    <div className='text-center mt-5'>
                                        <h1 className='mb-4'>Welcome to <br />
                                        <b> SpeakTinz</b></h1>
                                        <p >where voice technology meets seamless customer engagement</p>
                                    </div>
                                    <div className="mb-4">
                                    <img 
                                    src={image1} 
                                    alt="Description de l'image"
                                    className="congrat"/>
                                    </div>
                                </div>
                                
                                <div className='col-lg-8 mb-4'>
                                    <form className="formulaire text-start">
                                                <h3> <b>Get started</b></h3>
                                            <div className="form-group mb-4">
                                            
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="fullName"
                                                placeholder=" full name"
                                            />
                                            </div>

                                            <div className="form-group mb-4">
                                            
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder=" Email  address"
                                            />
                                            </div>

                                            <div className="form-group mb-4 killian">
                                        
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="password"
                                                placeholder="Password"
                                            />
                                            <span className='point'><i class="fa fa-eye-slash" aria-hidden="true"></i></span>
                                            </div>

                                            <div className="form-group mb-4">
                                        
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="companyName"
                                                placeholder="Company Name"
                                            />
                                            </div>

                                            <div className="form-group mb-4">
                                        
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="agencyWebsite"
                                                placeholder=" Agency website address"
                                            />
                                            </div>

                                            <div className="form-group mb-4">
                                        
                                            <div className="input-group">
                                                <select className="form-control" id="phoneNumber">
                                                    <option value="">Phone Number</option>
                                                    <option value="+1">🇺🇸 United States (+1)</option>
                                                    <option value="+33">🇫🇷 France (+33)</option>
                                                    <option value="+44">🇬🇧 United Kingdom (+44)</option>
                                                    <option value="+49">🇩🇪 Germany (+49)</option>
                                                    <option value="+34">🇪🇸 Spain (+34)</option>
                                                    <option value="+39">🇮🇹 Italy (+39)</option>
                                                    <option value="+81">🇯🇵 Japan (+81)</option>
                                                    <option value="+86">🇨🇳 China (+86)</option>
                                                    <option value="+91">🇮🇳 India (+91)</option>
                                                    <option value="+55">🇧🇷 Brazil (+55)</option>
                                                    <option value="+7">🇷🇺 Russia (+7)</option>
                                                    <option value="+61">🇦🇺 Australia (+61)</option>
                                                    <option value="+1">🇨🇦 Canada (+1)</option>
                                                </select>
                                            </div>
                                            </div>

                                            <div className="form-group form-check mb-4">
                                            <input type="checkbox" className="form-check-input" id="termsAgreement" />
                                            <label className="form-check-label font-weight-bold" htmlFor="termsAgreement">
                                                I agree to the Terms of Service and Privacy Policy
                                            </label>
                                            </div>

                                            <div className="visual mb-4">
                                                <button className='you col-lg-12'>Sign Up</button>
                                            </div>
                                            <div className="microbe">
                                                <button className="micro col-lg-12">
                                                    <img src={GoogleIcon} alt="Google icon" className="contrat" />
                                                    Sign up with Google
                                                </button>
                                            </div>

                                    </form>
                                </div>
                            </div>
                </div>
            </div>
        </div>
     
    );
  }
  
  export default Login;