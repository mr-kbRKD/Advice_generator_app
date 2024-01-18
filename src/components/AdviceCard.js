import React from 'react'
import dividerDesktop from '../images/pattern-divider-desktop.svg';
import dividerMobile from '../images/pattern-divider-mobile.svg';
import dice from '../images/icon-dice.svg'
const AdviceCard = () => {
    return (
        <div className="card">
            <p>ADVICE #1</p>
            <h2>This is an advice</h2>
            <img src={dividerDesktop} className="divider-desktop" alt="divider" />
            <img src={dividerMobile} className="divider-mobile" alt="divider" />
            <div className="dice">
                <img src={dice} alt="dice" />
            </div>
                
        </div>
    )
}

export default AdviceCard;