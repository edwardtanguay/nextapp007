import Head from 'next/head';
import { Nav } from '../components/Nav';
import { SiteHeader } from '../components/SiteHeader';
import { DynamicHead } from '../components/DynamicHead';

export default function Home() {
    return (
        <div>
            <DynamicHead />
            <SiteHeader />
            <Nav />
            <p>Welcome to this site.</p>
            <p className="highlight">More changes coming soon...</p>
        </div>
    );
}
