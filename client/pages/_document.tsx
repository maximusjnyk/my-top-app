import { Html, Head, Main, NextScript } from 'next/document';

export default function MyDocument() {
	return (
		<Html lang="ru">
			<Head>
				<link rel="icon" href="/favicon.ico"/>
				<link rel="preconnect" href="https://fonts.gstatic.com"/>
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&family=Noto+Sans:wght@300;400;500;600;700&display=swap"
					rel="stylesheet"/>
			</Head>
			<body>
			<Main/>
			<NextScript/>
			</body>
		</Html>
	);
}