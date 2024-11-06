import React, { useState } from 'react';
import './dashboard2.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'font-awesome/css/font-awesome.min.css';
import first from '../assets/images/first.png';
import Pricing from './pricing';
import PlanDetail from './PlanDetail';
import Plan1 from './Plan1';


function Dashboard2() {
    const [activePage, setActivePage] = useState("subscriptions");

    const renderContent = () => {
        switch (activePage) {
            case "home":
                return (
                    <div className='content'>
                        <h4 className='glory mb-3'>Choose a pricing plan to continue..</h4>
                        <p>Where voice technology meets seamless customer engagement ..</p>
                        {/* Add content here */}
                    </div>
                );
            case "subscriptions":
                return (
                    <div className='content'>
                        <h4 className='glory mb-3'>Choose a pricing plan to continue..</h4>
                        <p>Where voice technology meets seamless customer engagement ..</p>
                        <Pricing/> 
                      
                    </div>
                );
                case "Payement":
                    return (
                        <div className='content'>
                            <h4 className='glory mb-3'>Choose a pricing plan to continue..</h4>
                            <p>Where voice technology meets seamless customer engagement ..</p>
                            <PlanDetail/>
                          
                        </div>
                    );
                    case "Payement1":
                        return (
                            <div className='content'>
                                <h4 className='glory mb-3'>Choose a pricing plan to continue..</h4>
                                <p>Where voice technology meets seamless customer engagement ..</p>
                                <Plan1/>
                              
                            </div>
                        );
            case "profile":
                return (
                    <div className='content'>
                        <h4 className='glory mb-3'>Profile</h4>
                        <p>Manage your profile information and settings.</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="dashboard-container">
            <div className="sidebar">
                <h3 className="fige mt-5 mb-5">SPEAKTINZ</h3>
                <button className="sidebar-btn" onClick={() => setActivePage("home")}>Home</button>
                <button className="sidebar-btn" onClick={() => setActivePage("subscriptions")}>Subscription Plans</button>
                <button className="sidebar-btn" onClick={() => setActivePage("Payement")}>Payement</button>
                <button className="sidebar-btn" onClick={() => setActivePage("Payement1")}>next</button>
                <button className="sidebar-btn" onClick={() => setActivePage("profile")}>Profile</button>
            </div>
            <div className="main-content">
                <div className="header d-flex justify-content-end align-items-center">
                    <p className="cloche me-3"><i className="fa fa-bell" aria-hidden="true"></i></p>
                    <img src={first} alt="User icon" className="user-icon me-3" />
                    <div className='me-3'>
                        <h6>Moni Roy</h6>
                        <p className=''>Admin</p>
                    </div>
                    <p className='toni'><i className="fa fa-check-circle-o" aria-hidden="true"></i></p>
                </div>
                <div className="main-body mt-5">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}

export default Dashboard2;
