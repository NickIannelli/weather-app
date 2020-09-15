import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
	return (
		<main>
			<h1>404 - Page Not Found</h1>
			<p>
				The page you are looking for doesn't seem to exist!
				<br />
				Try heading to the <Link to="/">homepage</Link> and trying again.
			</p>
		</main>
	);
}
