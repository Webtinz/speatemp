import React from 'react';
import { useNavigate } from 'react-router-dom';

import logo1 from '../assets/images/logo1.png';
import logo2 from '../assets/images/logo2.png';
import logo3 from '../assets/images/logo3.png';

function Plan1() {
    return (
        <div>
          <div className='container mt-5'>
            <div className='mb-4'></div>
            <div className='regular mt-5'>
              <p className='text-start titu'>Pay With:</p>
              <div className='text-start christ'>
                {/* Radio Group */}
                <div>
                  <label className="me-2">
                    <input type="radio" name="optionGroup" defaultChecked />
                    Card
                  </label>
                  <img src={logo1} alt="Card icon" className="crem" />
                </div>
    
                <div>
                  <label className="me-2">
                    <input type="radio" name="optionGroup" />
                    MTN Momo
                  </label>
                  <img src={logo2} alt="MTN Momo icon" className="creme" />
                </div>
                <div>
                  <label className="me-2">
                    <input type="radio" name="optionGroup" />
                    Orange Money
                  </label>
                  <img src={logo3} alt="Orange Money icon" className="creme" />
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12'>
                <form>
                  <div className="row mt-5">
                    <div className="col">
                      <label className="bien" htmlFor="cardNumber">Name</label>
                      <input
                        type="text"
                        className="form-control tres"
                        id="cardNumber"
                        placeholder="Eric "
                        aria-label="Card Number"
                      />
                    </div>
                    <div className="col">
                      <label className="text-start" htmlFor="cardName">Contact Number</label>
                      <input
                        type="text"
                        className="form-control tres"
                        id="cardName"
                        placeholder="+229"
                        aria-label="Card Name"
                      />
                    </div>
                  </div>
                  
                  <div className="form-check mt-5">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      Save card details
                    </label>
                  </div>
                </form>
                <div className='trio text-center'>
                  <button className='franck' >Continue</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  };

  


export default Plan1;

