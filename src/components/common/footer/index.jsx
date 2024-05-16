import React from 'react';
import { useTranslation } from 'react-i18next';

import '../../../custom-bootstrap-coloring.scss';
import css from './footer.module.css';


export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={css.footer}>
      <div>
        <p className={css.footerTitle}>{t('footer.title')}</p>
        <p className={css.footerText}>&copy; 2024 {t('footer.text')}</p>
      </div>
    </footer>
  );
}