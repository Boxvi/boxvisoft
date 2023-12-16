import App, {AppProps} from 'next/app';
import type {NextPage} from 'next';
import type {ReactElement, ReactNode} from 'react';
import '../styles/index.css';
import '../styles/tailwind.css';


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};
const MyApp = ({Component, pageProps}: AppPropsWithLayout): JSX.Element => {

    const getLayout = Component.getLayout ?? ((page) => page);

    return (
        <>
            {getLayout(<Component {...pageProps} />)}
        </>
    )
}

// @ts-ignore
MyApp.getInitialProps = async (appContext) => {

    const appProps = await App.getInitialProps(appContext);


}

export default MyApp;
