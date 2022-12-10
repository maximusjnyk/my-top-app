import React, { useContext } from 'react';
import { AppContext } from "../../context/app.context";

export const Menu = (): JSX.Element => {

	const { menu, setMenu, firstCategory } = useContext(AppContext);

	return <div>
		<ul>
			{menu.map(m => (
				<li >{m._id.secondCategory}</li>
			))}
		</ul>
	</div>;
};

