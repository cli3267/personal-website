import Navigation from './Nav';
import Footer from './Footer';

const Layout = props => (
  <div>
    <Navigation />
    <div>{props.children}</div>
    <Footer />
  </div>
);

export default Layout;
