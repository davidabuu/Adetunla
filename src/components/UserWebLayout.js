import Head from 'next/head';
const UserWebLayout = ({ webtitle}) => {
    return (
        <>
            <Head>
                <title>{webtitle} | Dotman</title>
            </Head>   
        </>
    );
};

export default UserWebLayout;