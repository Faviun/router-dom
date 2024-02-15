import React from 'react';
import AllNewsBlock from '../AllNewsBlock/AllNewsBlock';
import LostFoundBlock from '../LostFoundBlock/LostFoundBlock';
import TopsNewsBlock from '../TopsNewsBlock/TopsNewsBlock';
import UpdatesBlock from '../UpdatesBlock/UpdatesBlock';

const NewsDisplay = () => {
    return (
        <div>
            <AllNewsBlock />
            <LostFoundBlock />
            <TopsNewsBlock />
            <UpdatesBlock />
        </div>
    );
};

export default NewsDisplay;