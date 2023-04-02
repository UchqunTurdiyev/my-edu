import React from 'react';
import { FooterProps } from './footer.props';

export default function Footer({ ...props }: FooterProps) {
	return <div {...props}>Footer</div>;
}
