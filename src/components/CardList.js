
import React from 'react';
import Card from './Card';

const CardList = () => {
  const cardData = [
    {
      date: '3.3.0(14/05/2018)',
      newButton: 'New',
      logo: 'kevin.png',
      name: 'Kevin Joe',
      paragraph: 'File system from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and satibility improvements Share permision re-desing and optimization',
      downloadUrl: 'https://example.com/download1.pdf',
      buttonBackgroundColor:"rgb(33, 220, 33)",
    },
    {
      date: '3.1.0(20/05/2015)',
      newButton: 'Fix',
      logo: 'kevin.png',
      name: 'Kevin Joe',
      paragraph: 'Introducing Host Cloud Drive-virtual drive functionality New Share options and management New, more user friendly design Sync optimizations Varios performnce imporvment and bug fixes',
      downloadUrl: 'https://example.com/download2.pdf',
      buttonBackgroundColor:"rgb(33, 105, 220)",
    },
    {
      date: '3.1.0(20/05/2015)',
      newButton: 'Improvment',
      logo: 'kevin.png',
      name: 'Kevin Joe',
      paragraph: 'Added Settings for Auto Start Added Update Notification Speed Optimization Bug Fixes',
      downloadUrl: 'https://example.com/download2.pdf',
      buttonBackgroundColor:"rgb(153, 53, 158)",
    },
    {
      date: '3.3.0(14/05/2018)',
      newButton: 'New',
      logo: 'kevin.png',
      name: 'Kevin Joe',
      paragraph: 'File system from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and satibility improvements Share permision re-desing and optimization',
      downloadUrl: 'https://example.com/download1.pdf',
      buttonBackgroundColor:"rgb(33, 220, 33)",
    },
    {
      date: '3.1.0(20/05/2015)',
      newButton: 'Fix',
      logo: 'kevin.png',
      name: 'Kevin Joe',
      paragraph: 'Introducing Host Cloud Drive-virtual drive functionality New Share options and management New, more user friendly design Sync optimizations Varios performnce imporvment and bug fixes',
      downloadUrl: 'https://example.com/download2.pdf',
      buttonBackgroundColor:"rgb(33, 105, 220)",
    },
    {
      date: '3.1.0(20/05/2015)',
      newButton: 'Improvment',
      logo: 'kevin.png',
      name: 'Kevin Joe',
      paragraph: 'Added Settings for Auto Start Added Update Notification Speed Optimization Bug Fixes',
      downloadUrl: 'https://example.com/download2.pdf',
      buttonBackgroundColor:"rgb(153, 53, 158)",
    },
    {
      date: '3.3.0(14/05/2018)',
      newButton: 'New',
      logo: 'kevin.png',
      name: 'Kevin Joe',
      paragraph: 'File system from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and satibility improvements Share permision re-desing and optimization',
      downloadUrl: 'https://example.com/download1.pdf',
      buttonBackgroundColor:"rgb(33, 220, 33)",
    },
    {
      date: '3.1.0(20/05/2015)',
      newButton: 'Fix',
      logo: 'kevin.png',
      name: 'Kevin Joe',
      paragraph: 'Introducing Host Cloud Drive-virtual drive functionality New Share options and management New, more user friendly design Sync optimizations Varios performnce imporvment and bug fixes',
      downloadUrl: 'https://example.com/download2.pdf',
      buttonBackgroundColor:"rgb(33, 105, 220)",
    },
    {
      date: '3.1.0(20/05/2015)',
      newButton: 'Improvment',
      logo: 'kevin.png',
      name: 'Kevin Joe',
      paragraph: 'Added Settings for Auto Start Added Update Notification Speed Optimization Bug Fixes',
      downloadUrl: 'https://example.com/download2.pdf',
      buttonBackgroundColor:"rgb(153, 53, 158)",
    },
    
    
    

  
  ];

  return (
    <div className="main-container">
      {cardData.map((data, index) => (
        <Card key={index} {...data} />
      ))}
    </div>
  );
};

export default CardList;
