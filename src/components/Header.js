import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { clearUserDetails } from '../utils/userSlice';
import { setSignedIn } from '../utils/userSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignout = () => {
    // Sign out logic here
    signOut(auth).then(() => {
      dispatch(clearUserDetails());
      dispatch(setSignedIn(false));
      navigate("/");
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

  }
  const signOutHide = useSelector((state)=>state.user.signedIn);
  return (
    <div className='w-full absolute flex z-10 justify-between bg-gradient-to-b from-black'>
        <img className='w-40' src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt='Netflix Logo'/>
         <div className='flex items-center gap-4'>
        {signOutHide && <img className='w-10 h-10 rounded-s' src="https://occ-0-2186-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt='profile'/>}
        {signOutHide && <button onClick={handleSignout} className='text-white bg-red-700 rounded-lg text-xl m-4 p-2 hover:bg-red-500 font-bold'>Sign Out</button>}
        </div>
    </div>
  )
}

export default Header
