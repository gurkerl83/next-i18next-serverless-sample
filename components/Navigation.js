import React from 'react';

import getNextI18NextInstance from '../i18n';

const { i18n, Link, useTranslation } = getNextI18NextInstance;

const Navigation = () => {
  const { t } = useTranslation(['common']);

  const subjectIds = ['id1', 'id2', 'id3'];

  return (
    <div>
      <Link href='/'>
        <button type='button'>"/"</button>
      </Link>
      <button
        type='button'
        onClick={() =>
          i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')
        }
      >
        {t('change-locale')}
      </button>
      <Link href='/secondPage'>
        <button type='button'>{t('to-secondPage')}</button>
      </Link>
      <Link href='/subjects'>
        <button type='button'>{t('to-subjects')}</button>
      </Link>
      <Link href='/subjects/[subject]' as={`/subjects/${1}`}>
        <button type='button'>{t('to-subject')}</button>
      </Link>
      {subjectIds.map(id => (
        <Link href='/subjects/[subject]' as={`/subjects/${id}`}>
          <button type='button'>{`${t('to-subject')} ${id}`}</button>
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
