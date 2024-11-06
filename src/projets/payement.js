import React, { useState } from 'react';
import './payement.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'font-awesome/css/font-awesome.min.css';
import first from '../assets/images/first.png';



function Payement() {
    

    return (
        <div className="payement">
            <div className="harelle">
                <h3 className="fige mt-5 mb-5">SPEAKTINZ</h3>
                <div className="visual mb-4">
                    <button className="com"><i className="fa fa-microchip me-3" aria-hidden="true"></i> Subscription Plan</button>
                </div>
                <div className="visual">
                    <button className="glo"><i class="fa fa-user me-3" aria-hidden="true"></i>
                    Your Profile </button>
                </div>
            </div>
            <div className="momo">
                <div className="text-end glin">
                    <p className="cloche me-3"><i className="fa fa-bell" aria-hidden="true"></i></p>
                    <img src={first} alt="Google icon" className="contrat me-3" />
                    <div className='me-3'>
                        <h6>Moni Roy</h6>
                        <p className=''>Admin</p>
                    </div>
                    <p className='toni'><i className="fa fa-check-circle-o" aria-hidden="true"></i></p>
                </div>
                <div className='text-start'>
                    <h4 className='glory mb-3'>Set up your profile</h4>
                   <div className='container microbe text-start'>
                            <p className='text-start mb-5' >Company/ Government  Details</p>
                            <div className='row mt-5'>
                                <div className='col-lg-12'>
                                    <form>
                                    <div class="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />

                                        <label for="floatingInput">Email address</label>
                                </div>
                                    </form>
                               
                                </div>

                            </div>
                           
                   </div>
                </div>
            </div>
        </div>
    );
}

export default Payement;