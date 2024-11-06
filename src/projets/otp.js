import React from 'react';
import './otp.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'font-awesome/css/font-awesome.min.css';
import image1 from '../assets/images/image1.png';


function Otp() {
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
                                               <p className="text-center colombe mb-3">We have sent the OTP to your <br/>
                                                e-mail</p>
                                                <p className="text-center">bado@s*********net</p>

                                            <div className="visual mb-4">
                                                <button className='you col-lg-12'>Send </button>
                                            </div>
                                           
                                    </form>
                                </div>
                            </div>
                </div>
            </div>
        </div>
     
    );
  }
  export default Otp;