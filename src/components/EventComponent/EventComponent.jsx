import React from 'react';
import footerlunar from '../../assets/images/footerlunar.png';
import footercloud from '../../assets/images/footer_cloud.png';
import footerlunar2 from '../../assets/images/footerlunar2.png';
import { WrapperEvent, Flower, WrapperFlower } from './style';
import flower1 from '../../assets/images/lunarFlower (1).png';
import flower2 from '../../assets/images/lunarFlower (2).png';
import flower3 from '../../assets/images/lunarFlower (3).png';
import flower4 from '../../assets/images/lunarFlower (4).png';

export default function EventComponent() {
  const renderLunarEvent = () => {
    return (
      <WrapperEvent>
        <div className='w-100dvh' style={{ backgroundSize: '100%', height: '50px', backgroundRepeat: 'no-repeat', backgroundImage: `url(${footercloud})` }}>
          <div style={{ position: 'absolute', left: 20, top: -50 }}>
            <img src={footerlunar2} alt='' />
          </div>
          <div style={{ position: 'absolute', right: 50, top: -150, transform: 'rotateY(180deg)' }}>
            <img width={200} src={footerlunar} alt='' />
          </div>
        </div>
      </WrapperEvent>
    );
  };

  return <>
    <WrapperFlower>
      <div>
        <Flower src={flower2} style={{ left: '-30%', animationDelay: `${Math.random()}s` }} />
        <Flower src={flower2} style={{ left: '30%', animationDelay: `${Math.random()}s` }} />
        <Flower src={flower4} style={{ left: '30%', animationDelay: `${Math.random()}s` }} />
        <Flower src={flower1} style={{ left: '-10%', animationDelay: `${Math.random()}s` }} />
        <Flower src={flower4} style={{ left: '0%', animationDelay: `${Math.random()}s` }} />
        <Flower src={flower1} style={{ left: '10%', animationDelay: `${Math.random()}s` }} />
        <Flower src={flower3} style={{ left: '50%', animationDelay: `${Math.random()}s` }} />
        <Flower src={flower2} style={{ left: '80%', animationDelay: `${Math.random()}s` }} />
        <Flower src={flower3} style={{ left: '90%', animationDelay: `${Math.random()}s` }} />
      </div>
    </WrapperFlower>
    {renderLunarEvent()}</>;
}
