import Link from 'next/link';

export const Nav = () => {
    return (
        <nav>
            <span><Link href="/">Welcome</Link></span>
            <span className="separator">|</span>
            <span><Link href="/code">Code</Link></span>
        </nav>
    );
};
