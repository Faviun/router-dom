import React from 'react';
import { navItemsMain } from '../../config/navigationMainConfig';
import { Link } from 'react-router-dom';

const MainNavigation = () => {
    return (
        <div>
            <ul className='flex  flex-col fap-[5px]'>
                {navItemsMain.map(item => 
                    <Link className='text-[14px] font-[400] text-[#161616] hover:text-[#ff6565]' 
                    to={item.href}
                >
                    {item.title}
                </Link>)}
            </ul>
        </div>
    );
};

export default MainNavigation;