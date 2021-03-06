import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
   const { user, loading } = useAuth();

   // console.log(loading);

   if (loading) {
      return (
         <div className='mx-auto'>
            <h1>Loading........</h1>
         </div>)
   }
   return (
      <Route
         {...rest}
         render={({ location }) =>
            user.email ?
               children
               :
               <Redirect
                  to={{
                     pathname: '/logIn',
                     state: { from: location }
                  }}
               ></Redirect>}>
      </Route>
   );
};

export default PrivateRoute;