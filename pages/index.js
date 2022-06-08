/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
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
            <img src="images/screenWithCode.jpg" />
        </div>
    );
}
