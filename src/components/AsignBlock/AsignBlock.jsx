import React from 'react';
import HeaderAside from '../HeaderAside/HeaderAside';
import BodyAside from '../BodyAside/BodyAside';
import GearModal from '../GearModal/GearModal';

const AsignBlock = ({user}) => {
    return (
        <div className='border p-[10px] m-[20px]'>
            <HeaderAside userInfo={user} />
            <BodyAside />
            <GearModal />
        </div>
    );
};

export default AsignBlock;