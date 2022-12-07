import '../styles/globals.css';
import { AppProps } from "next/dist/shared/lib/router/router";
import Head from "next/head";


function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return <>
		<Head>
			<title>My-Top Мой топ!</title>
		</Head>
		<Component {...pageProps} />
	</>;
}

export default MyApp
