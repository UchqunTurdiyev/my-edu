import React from 'react';
import { LayoutProps } from './layout.props';
import Sidebar from './sidebar/sidebar';
import Header from './header/header';
import Footer from './footer/footer';

function Layout({ children }: LayoutProps): JSX.Element {
	return (
		<>
			<Header />
			<div>
				<Sidebar />
				<div>{children}</div>
			</div>
			<Footer />
		</>
	);
}

export default Layout;
