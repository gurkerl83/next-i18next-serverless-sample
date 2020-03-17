import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { useTranslation } from '../i18n';

const Homepage = () => {
  const { t } = useTranslation(['common', 'footer']);

  return (
    <React.Fragment>
      <nav>
        <Navigation />
      </nav>
      <main>
        <Header title={t('h1')} />
      </main>
      <Footer />
    </React.Fragment>
  );
};

// Replace higher-order component in favor of hook

// Homepage.getInitialProps = async () => ({
//   namespacesRequired: ['common', 'footer']
// });

// Homepage.propTypes = {
//   t: PropTypes.func.isRequired
// };

// export default withTranslation('common')(Homepage);

export default Homepage;
