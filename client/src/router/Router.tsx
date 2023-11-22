import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import HomePage from '../pages/public/HomePage';
import FormFanMember from '../pages/public/FormFanMember';
import FormRegister from '../pages/public/FormRegister';
import FormLogin from '../pages/public/FormLogin';
import Application from '../pages/private/Application';
import PrivateRoutes from '../layouts/PrivateRoutes';

const Router: React.FunctionComponent = () => (
	<Routes>
		<Route path='/home' element={<HomePage />} />
		<Route path='/form'>
			<Route path='fan-member' element={<FormFanMember />} />
			<Route path='login' element={<FormLogin />} />
			<Route path='register' element={<FormRegister />} />
		</Route>
		<Route path='/private' element={<PrivateRoutes />}>
			<Route path='application' element={<Application />} />
		</Route>
		<Route index element={<Navigate to='/home' />} />
	</Routes>
);

export default Router;
