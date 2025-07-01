
import { useTranslation } from 'react-i18next';

export default function Login() {
  const { t } = useTranslation();

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-semibold">{t('login.title')}</h1>
    </div>
  );
}
