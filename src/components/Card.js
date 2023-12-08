
import React from 'react';
import './Card.css';

const Card = (props) => {
  const { date, newButton, logo, name, paragraph, downloadUrl, buttonBackgroundColor } = props;

 
  const buttonStyle = {
    backgroundColor: buttonBackgroundColor,
  };

  return (
    <div className="grid-container">
      <div className="card">
        <div className="header">
          <div className="date">{date}</div>
        </div>
        <div className='main'>
          <button className="new-button" style={buttonStyle}>
            {newButton}
          </button>
          <img className="logo" src={logo} alt={`${name} logo`} />
          <div className="name">{name}</div>
        </div>
        <div className="card-content">
          <p className="paragraph">{paragraph}</p>
        </div>
        <button className="download-button" onClick={() => window.open(downloadUrl)}>
          Download
        </button>
      </div>
    </div>
  );
};

export default Card;
