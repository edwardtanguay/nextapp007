import { DynamicHead } from '../../components/DynamicHead';
import { SiteHeader } from '../../components/SiteHeader';
import { Nav } from '../../components/Nav';

const PageBackground = () => {
	return (
		<>
            <DynamicHead />
            <SiteHeader />
            <Nav />
			<p>This is the background of the site.</p>
		</>
	);
};

export default PageBackground;