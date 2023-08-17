import React from 'react';
import {Route, Routes} from 'react-router-dom';
import { DashboardScreen } from '../screens/dashboard';
import {Navigator} from '../components/navigator';

const RoutesSystem: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
           <Navigator/>
            <DashboardScreen />
          </>
        } />
    </Routes>
  );
};

export default RoutesSystem;
