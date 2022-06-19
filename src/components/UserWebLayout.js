import Head from 'next/head';
const UserWebLayout = ({ webtitle, children }) => {
    return (
        <>
            <Head>
                <title>{webtitle} | Dotman</title>
            </Head>   
            {children}
        </>
    );
};

export default UserWebLayout;