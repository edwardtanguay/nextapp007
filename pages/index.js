import Head from 'next/head';
import { Nav } from '../components/Nav';
import { SiteHeader} from '../components/SiteHeader';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Tech Resource Site</title>
                <meta
                    name="description"
                    content="A very great site for tech information."
                />
                <link rel="icon" href="/globe.ico" />
            </Head>
            <SiteHeader/>
            <Nav/>
            <p>Welcome to this site.</p>
            <p className="highlight">More changes coming soon...</p>
        </div>
    );
}
