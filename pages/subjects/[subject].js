import React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import { useTranslation } from '../../i18n';

const Subject = () => {
  const { t } = useTranslation(['subjects', 'common', 'footer']);
  return (
    <React.Fragment>
      <nav>
        <Navigation />
      </nav>
      <main>
        <Header title={t('title.singular')} />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Subject;
