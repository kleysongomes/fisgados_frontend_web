import { useTranslation } from 'react-i18next';
import Mascote from '../assets/capa02.png';

export default function SectionTwo() {
  const { t } = useTranslation();

  return (
    <section className="pt-32 pb-20 px-4 flex flex-col lg:flex-row items-center justify-center gap-10 bg-white dark:bg-zinc-950 text-black dark:text-white">
      {/* Imagem à esquerda */}
      <div className="flex-shrink-0 order-last lg:order-first">
        <img
          src={Mascote}
          alt="Mascote Fisgados"
          className="w-64 h-auto mx-auto"
        />
      </div>

      {/* Texto à direita */}
      <div className="max-w-md text-center lg:text-right space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-lime-500 dark:text-violet-400">
          {t('section2.title')}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          {t('section2.description')}
        </p>
      </div>
    </section>
  );
}