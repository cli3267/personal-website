import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-vertical-timeline-component/style.min.css';
import '../public/styles.css';

import Footer from '../src/components/Layout/Footer/Footer';
import Navigiation from '../src/components/Layout/Navigation/Navigation';

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Navigiation />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default MyApp;
