import React from 'react';

const dataList = [
  { id: 1, title: 'The TDL', text: 'Does the Domain extension match the language of the domain name?', logo: 'globe.png' },
  { id: 2, title: 'Domain Length', text: 'Is the domain short enough to remember?', logo: 'domain.png' },
  { id: 3, title: 'Language', text: 'How complex is the actual domain name?', logo: 'globe.png' },
  { id: 4, title: 'International recognition', text: 'Can the domain name be used on an international scale?', logo: 'www.png' },
  { id: 5, title: 'Search engine', text: 'Does the domain follow search engine guidelines?', logo: 'network.png' },
  { id: 6, title: 'Advertising Potential', text: 'Could the domain be used for advertising campaigns?', logo: 'web-domain.png' },
  { id: 7, title: 'Sales Opportunities', text: 'Can the domain name be used on an international scale?', logo: 'search.png' },
  { id: 8, title: 'Typo susceptibility', text: 'How high is the risk of mistyping the domain name?', logo: 'http.png' },
  { id: 9, title: 'Business potential', text: 'Can the domain be used as your company address?', logo: 'domain.png' },
];



const MyComponent = () => {
  return (
    <div style={containerStyle}>
      {dataList.map(item => (
        <div key={item.id} style={cardStyle}>
          <div style={logoTextContainer}>
            <img src={item.logo} alt={item.title} style={logoStyle} />
            <div style={textContainer}>
              <p style={{ ...titleStyle, fontSize: '16px' }}>{item.title}</p>
              <p style={{ ...textStyle, fontSize: '14px' }}>{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  maxWidth: '1000px',
  margin: 'auto',
};

const cardStyle = {
  flex: '0 0 calc(33.33% - 20px)',  
  boxSizing: 'border-box',
  margin: '10px',
  padding: '10px',
  display: 'grid',
  flexDirection: 'column',
  '@media (max-width: 600px)': {
    flexDirection: 'column',  
  },
};


const logoTextContainer = {
  display: 'flex',
  flexDirection: 'row', 
  alignItems: 'center', 
  justifyContent: 'center',
};

const logoStyle = {
  width: '50px', 
  height: '50px', 
  marginRight: '10px',
  borderRadius: '50%',
  border: '2px solid lightblue',
  alignSelf: 'center',
};

const textContainer = {
  display: 'grid',
  gridTemplateColumns: '1fr',  
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px',  
  marginBottom: '20px',
  '@media (max-width: 600px)': {
    gridTemplateRows: 'auto',  
  },
};



const titleStyle = {
  fontWeight: 'bold',
  marginBottom: '5px',
  fontSize: '1.5em',
  '@media (max-width: 600px)': {
    fontSize: '1.2em',
  },
};

const textStyle = {
  marginBottom: '1px',
  fontSize: '1em',
  '@media (max-width: 600px)': {
    fontSize: '0.8em',
  },
};


export default MyComponent;
