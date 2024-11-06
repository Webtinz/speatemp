// import React from 'react';
import React, { useState } from 'react';
import './dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'font-awesome/css/font-awesome.min.css';
import first from '../assets/images/first.png';




function Dashboard() {
    // État pour le plan sélectionné
    const [selectedPlan, setSelectedPlan] = useState(null);

    // Fonction pour gérer la sélection du plan
    const handleSelectPlan = (plan) => {
        setSelectedPlan(plan);
    };

    return (
        <div className="dashboard">
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
                    <div className='row'>
                        <div
                            className={`col-lg-4 claudia ${selectedPlan === 'basic' ? 'active' : ''}`}
                            onClick={() => handleSelectPlan('basic')}
                        >
                            <div>
                                <h6 className='trit mb-3'>Basic Plan</h6>
                                <p className='kut mb-3'>for smaller businesses</p>
                                <h3 className='clin'>45 000XOF</h3>
                                <hr />
                                <p className='kurt mb-3'>Number of AI interactions <br /> per month</p>
                                <p className='kurt mb-3'>Supported languages : 2</p>
                                <p className='kurt mb-3'>API access <span className='vict'><i className="fa fa-question-circle" aria-hidden="true"></i></span></p>
                                <p className='kurtl mb-3'>Custom voice persona support</p>
                                <p className='kurtl mb-3'>Team collaboration features</p>
                                <hr />
                                <div className='mb-3'>
                                    <button className='kind'>Get Started</button>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`col-lg-4 claudia ${selectedPlan === 'pro' ? 'active' : ''}`}
                            onClick={() => handleSelectPlan('pro')}
                        >
                            <div>
                                <h6 className='trit mb-3'>Pro Plan</h6>
                                <p className='kut mb-3'>For growing businesses</p>
                                <h3 className='clin'>45 000XOF</h3>
                                <hr />
                                <p className='kurt mb-3'>Number of AI interactions <br /> per month</p>
                                <p className='kurt mb-3'>Supported languages : 2</p>
                                <p className='kurt mb-3'>API access <span className='vict'><i className="fa fa-question-circle" aria-hidden="true"></i></span></p>
                                <p className='kurtl mb-3'>Custom voice persona support</p>
                                <p className='kurtl mb-3'>Team collaboration features</p>
                                <hr />
                                <div className='mb-3'>
                                    <button className='kind'>Get Started</button>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`col-lg-4 claudia ${selectedPlan === 'enterprise' ? 'active' : ''}`}
                            onClick={() => handleSelectPlan('enterprise')}
                        >
                            <div>
                                <h6 className='trit mb-3'>Entreprise Plan</h6>
                                <p className='kut mb-3'>for larger companies with high volume usage</p>
                                <h3 className='clin'>45 000XOF</h3>
                                <hr />
                                <p className='kurt mb-3'>Number of AI interactions <br /> per month</p>
                                <p className='kurt mb-3'>Supported languages : 2</p>
                                <p className='kurt mb-3'>API access <span className='vict'><i className="fa fa-question-circle" aria-hidden="true"></i></span></p>
                                <p className='kurtl mb-3'>Custom voice persona support</p>
                                <p className='kurtl mb-3'>Team collaboration features</p>
                                <hr />
                                <div className='mb-3'>
                                    <button className='kind'>Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;