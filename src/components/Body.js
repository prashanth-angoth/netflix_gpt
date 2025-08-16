import React, { useEffect } from 'react'
import Login from './Login'
import Browser from './Browser';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { clearUserDetails, setUserDetails } from '../utils/userSlice';
import { useDispatch } from 'react-redux';

const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browser",
            element:<Browser/>
        }
    ])

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {uid,email,displayName} = user;
    dispatch(setUserDetails({uid, email, displayName}));

    // ...
  } else {
    dispatch(clearUserDetails());
    // User is signed out
    // ...
  }
});}, [])
  return (
    <div>
       <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
