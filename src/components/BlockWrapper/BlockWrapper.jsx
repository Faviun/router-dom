import HeaderPost from '../HeaderPost/HeaderPost';

const BlockWrapper = ({children}) => {

    return (
        <div className='flex flex-col rounded-[15px] p-[10px] bg-white gap-[15px]'>
            <HeaderPost />
            {children}
        </div>
    );
};

export default BlockWrapper;