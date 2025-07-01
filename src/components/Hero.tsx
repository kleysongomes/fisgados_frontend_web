import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import mascote from '../assets/mascote.png'

export default function Hero() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <section
      id="hero"
      className="min-h-screen pt-32 pb-20 px-4 flex flex-col lg:flex-row items-center justify-center gap-10 bg-white dark:bg-zinc-950 text-black dark:text-white"
    >
      <div className="max-w-md text-center lg:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-violet-700 dark:text-violet-400">
          {t('title')}
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">{t('description')}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button
            onClick={() => navigate('/cadastro')}
            className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-md font-semibold transition"
          >
            {t('start')}
          </button>
          <button
            onClick={() => navigate('/login')}
            className="border border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white px-6 py-3 rounded-md font-semibold transition"
          >
            {t('acess_login')}
          </button>
        </div>
      </div>
      <div className="flex-shrink-0">
        <img src={mascote} alt="Mascote Fisgados" className="w-64 h-auto mx-auto" />
      </div>
    </section>
  )
}
