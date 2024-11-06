import React, { useState } from 'react'; // Importation de React et des hooks nécessaires
import { useNavigate } from 'react-router-dom'; // Importation de useNavigate
import CustomButton from './CustomButton'; // Importation de CustomButton

const PricingPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const navigate = useNavigate();  // Utilisation de useNavigate

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    // Rediriger vers la page de détails du plan
    navigate(`/pricing/${plan}`);
  };

  const handleIconClick = (event) => {
    setShowPopup(!showPopup);
    const iconRect = event.target.getBoundingClientRect();
    setPopupPosition({
      top: iconRect.top + window.scrollY,
      left: iconRect.right + 10
    });
  };

  return (
    <div className="dashboard">
      <div className="momo">
        <div className="container mt-5">
          <div className="trini mb-5 mx-auto">
            <CustomButton />
          </div>

          <div className="row">
            {['basic', 'pro', 'enterprise'].map((plan) => (
              <div
                key={plan}
                className={`col-lg-4 claudia ${selectedPlan === plan ? 'active' : ''}`}
                onClick={() => handleSelectPlan(plan)}  // Lors du clic, sélection et redirection
                style={{
                  background: selectedPlan === plan ? '#1A5D1A' : 'linear-gradient(135deg, #e3e9e6, #fcfdfd)',
                  cursor: 'pointer'
                }}
              >
                <div>
                  <h6 className="trit mb-3" style={{ color: selectedPlan === plan ? '#ffffff' : 'inherit' }}>
                    {plan === 'basic' ? 'Basic Plan' : plan === 'pro' ? 'Pro Plan' : 'Enterprise Plan'}
                  </h6>
                  <p className="kut mb-3" style={{ color: selectedPlan === plan ? '#ffffff' : 'inherit' }}>
                    {plan === 'basic' ? 'for smaller businesses' :
                     plan === 'pro' ? 'For growing businesses' :
                     'for larger companies with high volume usage'}
                  </p>
                  <h3 className="clin" style={{ color: selectedPlan === plan ? '#ffffff' : '#4880FF' }}>
                    45 000XOF
                  </h3>
                  <hr style={{ borderColor: selectedPlan === plan ? '#ffffff' : 'inherit' }} />
                  <p className="kurt mb-3" style={{ color: selectedPlan === plan ? '#ffffff' : 'inherit' }}>
                    Number of AI interactions <br /> per month
                  </p>
                  <p className="kurt mb-3" style={{ color: selectedPlan === plan ? '#ffffff' : 'inherit' }}>
                    Supported languages : 2
                  </p>
                  <p className="kurt mb-3" style={{ color: selectedPlan === plan ? '#ffffff' : 'inherit' }}>
                    API access
                    <span 
                      className="vict" 
                      style={{ color: selectedPlan === plan ? '#ffffff' : '#1A5D1A' }}
                      onClick={handleIconClick}
                    >
                      <i className="fa fa-question-circle" aria-hidden="true"></i>
                    </span>

                    {showPopup && (
                      <div className="popup" style={{ ...popupStyles, top: popupPosition.top, left: popupPosition.left }}>
                        <p className='train' style={{ fontSize: '11px', fontWeight: '800' }}>
                          . What is API Access ?
                        </p>
                        <p className='train' style={{ fontSize: '11px', fontWeight: '400' }}>
                          API access means that users can directly access the platform's features...
                        </p>
                      </div>
                    )}
                  </p>
                  <p className="kurtl mb-3" style={{ color: selectedPlan === plan ? '#ffffff' : '#2121214D' }}>
                    Custom voice persona support
                  </p>
                  <p className="kurtl mb-3" style={{ color: selectedPlan === plan ? '#ffffff' : '#2121214D' }}>
                    Team collaboration features
                  </p>
                  <hr style={{ borderColor: selectedPlan === plan ? '#ffffff' : 'inherit' }} />
                  <div className="mb-3">
                    <button 
                      className="kind"
                      style={{
                        color: selectedPlan === plan ? '#ffffff' : '#1A5D1A',
                        borderColor: selectedPlan === plan ? '#ffffff' : '#1A5D1A'
                      }}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const popupStyles = {
  position: 'absolute',
  backgroundColor: '#fff',
  padding: '10px 20px',
  borderRadius: '5px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  zIndex: 10,
  borderColor: '#1A5D1A'
};

export default PricingPlans;
