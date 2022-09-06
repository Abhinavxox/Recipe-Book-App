import React from 'react';
import '../index.css'
import { GiCook } from "react-icons/gi";
import a from '../images/a.jpg'

const Navbar = () => {

    return (
        <div className='ui  menu ' style={{ background: 'white', marginBottom: '2px' }}>
            <GiCook size={35} />
            <div className='right menu'>
                <a rel="noreferrer" className="ui image blue label right-label" href='https://github.com/Abhinavxox' target='_blank'>
                    <img src={a} alt="img" />
                    GITHUB
                </a>
            </div>
        </div>
    )
}


export default Navbar