import { NavLink,Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { useSelector } from 'react-redux';

export function Header() {
  const cartproductcount = useSelector(selector=>selector.cartState.cartList);
  const activeClass = 'p-1 px-5 text-blue-600 bg-gray-100 rounded';
  const inactiveClass = 'p-1 px-3 hover:bg-gray-200 hover:text-gray-800 rounded';
  
  return (
    <div className='border-b-2 shadow-sm font-[Bebas]'>
       <header className='ml-2 mr-14 my-3 text-sm sm:ml-5 sm:mr-28 sm:text-base'>
        <div className='flex justify-between'>

        <Link to='/'>
            <div className='flex items-center sm:mt-0 mt-2' >
             
             <img className='w-5 h-5 sm:w-8 sm:h-8' src={Logo} alt="" />
             <span className='ml-1 font-semibold'>ShopMate-Redux</span>
            
           </div>
           </Link>
            
            <nav className='flex mt-1'>

                <NavLink to='/' className={({isActive})=>isActive ? activeClass : inactiveClass}>
                <span >Home</span>
                </NavLink>

                <NavLink to='cartlist' className={({isActive})=>isActive ? activeClass : inactiveClass}>
                <span >Cart</span>
                </NavLink>
                
                
            </nav>
            
            <Link to='cartlist'>
            <div className='mt-2 flex'>
              
              <svg xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" >
             <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"  />
             </svg>
             <span className='text-[12px] font-semibold ml-0.5'>{cartproductcount.length}</span>
            </div>
            </Link>
           

        </div>
       </header>
    </div>
  )
}
