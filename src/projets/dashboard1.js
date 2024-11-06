import React from 'react';
// import React, { useState } from 'react';
import './dashboard1.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'font-awesome/css/font-awesome.min.css';
import first from '../assets/images/first.png';
import logo1 from '../assets/images/logo1.png';
import logo2 from '../assets/images/logo2.png';
import logo3 from '../assets/images/logo3.png';

function Dashboard1() {
    

    return (
        <div className="dashboard1">
            <div className="harelle">
                <h3 className="fige mt-5 mb-5">SPEAKTINZ</h3>
                <div className="visual">
                    <button className="glo"><i className="fa fa-microchip" aria-hidden="true"></i> Subscription Plan</button>
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
                    <h4 className='glory mb-3'>Choose a pricing plan to continue..</h4>
                    <p>Where voice technology meets seamless customer engagement ..</p>
                </div>
                <div className='container mt-5'>
                        <div className='mb-4'>

                        </div>
                    <div className='regular mt-5'>
                            <p className='text-start titu'>Pay With:</p>
                            <div className='text-start christ'>
                                            {/* Radio Group */}
                                            <div>
                                                <label className="me-2">
                                                    <input type="radio" name="optionGroup" defaultChecked />
                                                    Card
                                                </label>
                                                <img src={logo1} alt="Google icon" className="crem" />
                                            </div>

                                            <div>
                                                <label className="me-2">
                                                    <input type="radio" name="optionGroup" />
                                                    MTN Momo
                                                </label>
                                                <img src={logo2} alt="Google icon" className="creme" />
                                            </div>
                                            <div>
                                                <label className="me-2">
                                                    <input type="radio" name="optionGroup" />
                                                    Orange Money
                                                </label>
                                                <img src={logo3} alt="Google icon" className="creme" />
                                            </div>
                            </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12'>
                                <form>
                                <div className="row mt-5">
                                        <div className="col">
                                            <label className="bien" htmlFor="cardNumber">Card Number</label>
                                            <input
                                                type="text"
                                                className="form-control tres"
                                                id="cardNumber"
                                                placeholder="1234  5678  9101  1121"
                                                aria-label="Card Number"
                                            />
                                        </div>
                                        <div className="col">
                                            <label className="text-start" htmlFor="cardNumber">Card Name</label>
                                            <input
                                                type="text"
                                                className="form-control tres"
                                                id="cardNumber"
                                                placeholder="Last Name e.g John, Mary"
                                                aria-label="Card Number"
                                            />
                                        </div>
                                </div>
                                <div className="row mt-5">
                                        <div className="col">
                                            <label className="bien" htmlFor="cardNumber">Expiration Date</label>
                                            <input
                                                type="Date"
                                                className="form-control tres"
                                                id="cardNumber"
                                                placeholder="1234  5678  9101  1121"
                                                aria-label="Card Number"
                                            />
                                        </div>
                                        <div className="col">
                                            <label className="text-start" htmlFor="cardNumber">CVV</label>
                                            <input
                                                type="Number"
                                                className="form-control tres"
                                                id="cardNumber"
                                                placeholder="123"
                                                aria-label="Card Number"
                                            />
                                        </div>
                                </div>
                                <div className="form-check mt-5">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                    />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Save card details
                                    </label>
                                </div>
                                </form>
                                <div className='trio text-center'>
                                    <button className='franck'>Continue</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard1;