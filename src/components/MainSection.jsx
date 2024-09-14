import React from 'react';
import MainHome from './MainHome';
import MainTools from './MainTools'
import MainEditor from './MainEditor'
import MainInterior from './MainInterior'
import MainSpawner from './MainSpawner'


export default function MainSection({ activeIcon }) {


  const renderContent = () => {
    switch (activeIcon) {
      case 'icon1':
        return (
          <MainHome />
        );
      case 'icon2':
        return <MainTools />
      case 'icon3':
        return <MainEditor />;
      case 'icon4':
        return <MainInterior />;
      case 'icon5':
        return <MainSpawner />;
      default:
        return null;
    }
  };

  return <div className='options-container'>{renderContent()}</div>;
}
