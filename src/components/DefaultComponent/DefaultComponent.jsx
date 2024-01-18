import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import MainComponent from '../MainComponent/MainComponent'
import FooterComponent from '../FooterComponent/FooterComponent'

export default function DefaultComponent() {
    return (
        <div>
            <HeaderComponent />
            <div className=''>
                <MainComponent />
            </div>

            <FooterComponent />
        </div>
    )
}
