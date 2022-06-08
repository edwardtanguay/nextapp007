import { Nav } from '../components/Nav';
import { SiteHeader } from '../components/SiteHeader';
import { DynamicHead } from '../components/DynamicHead';

const PageCode = () => {
    return (
        <>
			<DynamicHead
				title="Great Code Examples"	
				description="Small and large code examples for your developing needs."
				icon="code.ico"
			/>
            <SiteHeader />
            <Nav />
            <p>Interesting code.</p>
        </>
    );
};

export default PageCode;
