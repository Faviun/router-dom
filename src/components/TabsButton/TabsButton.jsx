import React from 'react';

const TabsButton = ({title, icon, state, setState, index}) => {
    return (
        <div onClick={() => setState(index)} className={`${state ===  index ? 'bg-[#FF855F] text-white' : "border"} rouded-[10px] py-[8px] m-[5px] flex items-center justify-center gap-[5px] rounded-[5px]`}>
            {icon}
            {title}
        </div>
    );
};

export default TabsButton;