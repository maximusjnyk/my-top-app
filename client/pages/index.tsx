import { useState } from "react";
import { Htag, Rating, Tag, Typography } from "../components";
import { Button } from "../components";
import { withLayout } from "../Layout/Layout";


function Home(): JSX.Element {

	const [rating, setRating] = useState<number>(4);

	return <>
		<Htag tag='h1'>Text</Htag>
		<Button appearance="primary" arrow="right">Button</Button>
		<Button appearance="ghost" arrow="right">Button</Button>
		<Typography size='s'>S - size</Typography>
		<Typography size='m'>M - size</Typography>
		<Typography size='l'>L - size</Typography>
		<Tag color="ghost" size='m'>Tag ghost Small</Tag>
		<Tag color="red" size='m'>Tag red Small</Tag>
		<Tag color="gray" size='l'>Tag gray Big</Tag>
		<Tag color="green" size='m'>Tag green Small</Tag>
		<Tag color="primary" size='l'>Tag primary Big</Tag>
		<Rating rating={rating} isEdit={true} setRating={setRating} />
	</>;
}

export default withLayout(Home);
