const Header = ({coin}) => {
    
    return (
        <div className="w-11/12 mx-auto">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a href="">Home</a></li>
                            <li><a href="">Fixture</a></li>
                            <li><a href="">Teams</a></li>
                            <li><a href="">Schedules</a></li>
                        </ul>
                    </div>
                    <a className="">
                        <img className='w-12' src="/src/assets/logo.png" alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-5">
                        <li><a href="">Home</a></li>
                        <li><a href="">Fixture</a></li>
                        <li><a href="">Teams</a></li>
                        <li><a href="">Schedules</a></li>
                    </ul>
                </div>
                <div className="navbar-end">



                    <a className="btn">
                         {coin} Coin
                        <img className="w-5" src="https://img.icons8.com/fluency/48/cheap-2--v1.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;