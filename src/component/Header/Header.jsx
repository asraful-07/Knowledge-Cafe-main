import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex items-center justify-between gap-4 p-5 max-w-7xl mx-auto'>
             <h1 className='text-4xl font-bold text-rose-400'>knowledge cafe</h1> 
             <img src={profile} alt="" />
        </div>
    );
};

export default Header;