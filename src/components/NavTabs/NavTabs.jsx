import React from 'react';
import TabsButton from '../TabsButton/TabsButton';
import AllNewsIcon from '../icons/AllNewsIcon';
import GlobusIcon from '../icons/GlobusIcon';
import FireIcon from '../icons/FireIcon';
import RefreshIcon from '../icons/RefreshIcon';

const NavTabs = ({state, setState}) => {
    const tabButtons = [
        {
            title: "All news",
            icon: <AllNewsIcon color={state === 0 ? "white" : "black"} />,
            index: 0
        },
        {
            title: "Lost & found",
            icon: <GlobusIcon color={state === 1 ? "white" : "black"} />,
            index: 1
        },
        {
            title: "Top news",
            icon: <FireIcon color={state === 2 ? "white" : "black"} />,
            index: 2
        },
        {
            title: "Updates",
            icon: <RefreshIcon color={state === 3 ? "white" : "black"} />,
            index: 3
        }
    ]
    return (
        <div className='border rounded-[10px] p-[5px] grid grid-cols-4'>
            {tabButtons.map(item => (<TabsButton 
                title={item.title} icon={item.icon} state={state} setState={setState} index={item.index} 
                />
            ))}
            {/* <TabsButton title="" icon={<AllNewsIcon />} state={state} setState={setState} index={0} />
            <TabsButton title="" icon={<GlobusIcon />} state={state} setState={setState} index={1} />
            <TabsButton title="" icon={<FireIcon />} state={state} setState={setState} index={2} />
            <TabsButton title="" icon={<RefreshIcon />} state={state} setState={setState} index={3} /> */}
        </div>
    );
};

export default NavTabs;