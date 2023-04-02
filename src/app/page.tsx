'use client';
import styles from './page.module.css';
import Heading from './../component/heading/heading';
import Text from './../component/text/text';
import { Button, Input, Tag, TextArea, Raiting } from '@/component';
import { useState } from 'react';

export default function Home(): JSX.Element {
	const [isClick, setIsClick] = useState(false);
	return (
		<>
			<Heading tag='h1'>Heading</Heading>
			<Text size='l'>Text</Text>
			<Tag size='s' color='red'>
				Tag S
			</Tag>
			<Tag size='m' color='green'>
				Tag M
			</Tag>
			<Button appearace='primary'>Primary</Button>
			<Button appearace='ghost' arrow='right'>
				Arrow
			</Button>
			<Button appearace='primary' arrow={isClick ? 'down' : 'right'} onClick={() => setIsClick(prev => !prev)}>
				Arrow
			</Button>

			<br />

			<Input placeholder='Enter Name' />
			<br />
			<hr />
			<div>
				<TextArea placeholder='Message' />
			</div>
			<br />
			<Raiting raiting={3} />
		</>
	);
}
