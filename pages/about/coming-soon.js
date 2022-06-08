import { DynamicHead } from '../../components/DynamicHead';
import { SiteHeader } from '../../components/SiteHeader';
import { Nav } from '../../components/Nav';
import { NavLink } from '../../components/NavLink';

const PageComingSoon = () => {
	return (
		<>
            <DynamicHead />
            <SiteHeader />
            <Nav />
			<h3>Coming Soon</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam libero maxime quod, saepe voluptatem ipsa veritatis accusamus dolores debitis ipsam minus sequi dignissimos blanditiis est reiciendis ipsum animi dolorum fugit!</p>
			<p><NavLink href="/about">back</NavLink></p>
		</>
	);
};

export default PageComingSoon;