import Head from 'next/head';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Tech Resource Site</title>
                <meta
                    name="description"
                    content="A great site for tech information."
                />
                <link rel="icon" href="/globe.ico" />
            </Head>
            <h1>Tech Resource Site</h1>
            <p>Welcome to this site.</p>
            <p className="highlight">More changes coming soon...</p>
        </div>
    );
}
