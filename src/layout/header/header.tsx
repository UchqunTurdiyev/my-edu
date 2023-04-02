import React from 'react';
import { HeaderProps } from './header.props';

export default function Header({ ...props }: HeaderProps) {
	return <div {...props}>Header</div>;
}
