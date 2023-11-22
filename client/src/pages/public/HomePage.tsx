import React from 'react';
import Layout from '../../layouts/PagesLayout';
import styled from 'styled-components';

import HomeCover from '../../components/sections/HomeCover';
import HomeBanner from '../../components/sections/HomeBanner';
import HomeDetails from '../../components/sections/HomeDetails';
import HomePlot from '../../components/sections/HomePlot';
import HomeAboutSchool from '../../components/sections/HomeAboutSchool';
import HomeSponsors from '../../components/sections/HomeSponsors';
import HomeContact from '../../components/sections/HomeContact';
import HomeNavInfo from '../../components/sections/HomeNavInfo';

const HomePage: React.FunctionComponent = () => (
	<Layout title='Home Page'>
		<StyledHomePage>
			<HomeCover></HomeCover>
			<HomeNavInfo></HomeNavInfo>
			<HomeBanner></HomeBanner>
			<HomePlot></HomePlot>
			<HomeSponsors></HomeSponsors>
			<HomeDetails></HomeDetails>
			<HomeAboutSchool></HomeAboutSchool>
			<HomeContact></HomeContact>
		</StyledHomePage>
	</Layout>
);

const StyledHomePage = styled.main`
	width: 100%;
`;

export default HomePage;
