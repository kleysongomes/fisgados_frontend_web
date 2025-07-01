
import { useTranslation } from 'react-i18next';

export default function Cadastro() {
  const { t } = useTranslation();

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-semibold">{t('cadastro.title')}</h1>
    </div>
  );
}
