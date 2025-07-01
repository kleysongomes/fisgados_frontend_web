import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-100 dark:bg-zinc-900 w-full mt-20 py-6 px-4 text-center text-sm text-zinc-500 dark:text-zinc-400">
      <p>{t('footer.text')}</p>
    </footer>
  );
}
