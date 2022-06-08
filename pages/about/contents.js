import { DynamicHead } from '../../components/DynamicHead';
import { SiteHeader } from '../../components/SiteHeader';
import { Nav } from '../../components/Nav';
import { NavLink } from '../../components/NavLink';

const PageContents = () => {
	return (
		<>
            <DynamicHead />
            <SiteHeader />
            <Nav />
			<h3>Contents</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore animi officiis id voluptatibus reiciendis, quisquam necessitatibus dolor, nemo harum, deserunt natus maxime eum rem minus reprehenderit consectetur vero cupiditate doloremque.</p>
			<p><NavLink href="/about">back</NavLink></p>
		</>
	);
};

export default PageContents;