import React from 'react'
import footerlunar from '../../assets/images/footerlunar.png';
import footercloud from '../../assets/images/footer_cloud.png';
import footerlunar2 from '../../assets/images/footerlunar2.png';
import { WrapperEvent } from './Event';

export default function EventComponent() {

    const renderLunarEvent = () => {
        return (
            <WrapperEvent>
                <div className='w-100dvh' style={{ backgroundSize: "100%", height: "50px", backgroundRepeat: "no-repeat", backgroundImage: `url(${footercloud})` }}>
                    <div style={{ position: 'absolute', left: 20, top: -50 }} >
                        <img src={footerlunar2} alt='' />
                    </div>
                    <div style={{ position: 'absolute', right: 50, top: -150, transform: 'rotateY(180deg)' }} >
                        <img width={200} src={footerlunar} alt='' />
                    </div>
                </div>
            </WrapperEvent>
        )
    }
    return (
        <>
            {renderLunarEvent()}
        </>
    )
}
