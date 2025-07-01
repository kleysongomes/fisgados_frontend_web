import { useTranslation } from 'react-i18next';
import Mascote from '../assets/capa01.png';

export default function SectionOne() {
  const { t } = useTranslation();

  return (
    <section className="pt-32 pb-20 px-4 flex flex-col lg:flex-row items-center justify-center gap-10 bg-white dark:bg-zinc-950 text-black dark:text-white">
      {/* Texto à esquerda */}
      <div className="max-w-md text-center lg:text-left space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-violet-700 dark:text-violet-400">
          {t('section1.title')}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          {t('section1.description')}
        </p>
      </div>
      {/* Imagem à direita */}
      <div className="flex-shrink-0">
        <img
          src={Mascote}
          alt="Mascote Fisgados"
          className="w-64 h-auto mx-auto"
        />
      </div>
    </section>
  );
}
