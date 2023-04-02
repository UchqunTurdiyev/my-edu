'use client';
import styles from './page.module.css';
import Heading from './../component/heading/heading';
import Text from './../component/text/text';
import { Button, Input, Tag, TextArea, Raiting, Card } from '@/component';
import { useState } from 'react';
import Layout from './../layout/layout';

export default function Home(): JSX.Element {
	const [isClick, setIsClick] = useState(false);
	const [raiting, setRaiting] = useState<number>(4);
	return (
		<Layout>
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
			<Raiting raiting={raiting} isEditabled={true} setRaiting={setRaiting} />

			<Card color='white'>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt aliquam amet labore ducimus doloribus dolores iusto magni.
				Assumenda, nisi doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quam recusandae mollitia nisi,
				atque sunt.
			</Card>
		</Layout>
	);
}
