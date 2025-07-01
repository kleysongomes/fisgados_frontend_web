
import { useTranslation } from 'react-i18next';

export default function Estudo() {
  const { t } = useTranslation();

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-semibold">{t('estudo.title')}</h1>
    </div>
  );
}
