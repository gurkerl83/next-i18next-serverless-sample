import React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import { useTranslation } from '../../i18n';

const Subjects = () => {
  const { t } = useTranslation(['subjects', 'common']);
  return (
    <React.Fragment>
      <nav>
        <Navigation />
      </nav>
      <main>
        <Header title={t('title.plural')} />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Subjects;
