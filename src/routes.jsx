import { Routes, Route } from 'react-router-dom';

import Signin from './app/signin/Main';
import Homepage from './app/homepage/Main';
import Tech from './app/technologies/Main';
import Purchase from './app/purchase/Main';
import AboutUs from './app/about-us/Main';
import Signup from './app/signup/Main';
import UserDashboard from './app/user-dashboard/Main'
import AdminDashboard from './app/admin-dashboard/Main'
import AdminDashboardGetUser from './app/admin-dashboard-getuser/Main'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/technologies" element={<Tech />} />
      <Route path="/purchase" element={<Purchase />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/admin-dashboard-getuser" element={<AdminDashboardGetUser />} />
    </Routes>
  );
}

export default AppRoutes;
