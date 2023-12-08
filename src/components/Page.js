import React from 'react';

const dataList = [
  { id: 1, title: 'The TDL', text: 'Does the Domain extension match the language of the domain name?', logo: 'globe.png' },
  { id: 2, title: 'Domain Length', text: 'Is the domain short enough to remember?', logo: 'domain.png' },
  { id: 3, title: 'Language', text: 'How complex is the actual domain name?', logo: 'globe.png' },
  { id: 4, title: 'International recognition', text: 'Can the domain name be used on an international scale?', logo: 'www.png' },
  { id: 5, title: 'Search engine', text: 'Does the domain follow search engine guidelines?', logo: 'network.png' },
  { id: 6, title: 'Advertising Potential', text: 'Could the domain be used for advertising campaigns?', logo: 'web-domain.png' },
  { id: 7, title: 'Sales Opportunties', text: 'Can the domain name be used on an international scale?', logo: 'search.png' },
  { id: 8, title: 'Typo susceptibility', text: 'How high is the risk of mistyping the domain name?', logo: 'http.png' },
  { id: 9, title: 'Business potential', text: 'Can the domain be used as your company address?', logo: 'domain.png' },
  
];

const MyComponent = () => {
  return (
    <div style={containerStyle}>
      {dataList.map(item => (
        <div key={item.id} style={itemStyle}>
          <div style={contentStyle}>
            <h3 style={titleStyle}>{item.title}</h3>
            <p style={textStyle}>{item.text}</p>
          </div>
          <div style={logoContainerStyle}>
            <img src={item.logo} alt={` ${item.name}`} style={logoStyle} />
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
  flexDirection:'row',
  
  
  
};
const contentStyle = {
  display:'flex',
  flexDirection:'column',
   
};
const logoContainerStyle = {
  display: 'flex',
  justifyContent: 'flex-start', 
};



const itemStyle = {
  flex: '1 1 25%', 
  padding: '3px',
  border: 'none',
  margin: '4px',
  display: 'flex',
  flexDirection: 'column', 
  

   
};

const titleStyle = {
  textAlign: 'center', 
  marginBottom: '5px',
  
};

const logoStyle = {
    width: '60px',
    height: '60px',
    marginBottom: 'px',
    
    border: '2px solid blue', 
    borderRadius: '40px', 
  };
  

const textStyle = {
  textAlign: 'right', 
  
  
};

export default MyComponent;
