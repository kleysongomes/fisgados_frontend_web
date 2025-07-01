import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Register() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-text px-4">
      <div className="w-full max-w-md bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-center text-violet-600 dark:text-violet-400">
          {t('register.title')}
        </h2>
        
        <form className="space-y-4">
          <input
            type="text"
            placeholder={t('register.name')}
            className="w-full px-4 py-2 rounded border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white"
          />
          <input
            type="email"
            placeholder={t('register.email')}
            className="w-full px-4 py-2 rounded border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white"
          />
          <input
            type="password"
            placeholder={t('register.password')}
            className="w-full px-4 py-2 rounded border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white"
          />

          <button
            type="submit"
            className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 rounded transition"
          >
            {t('register.createAccount')}
          </button>
        </form>

        <div className="text-center text-sm text-muted-foreground">
          {t('register.haveAccount')}{' '}
          <Link to="/login" className="text-violet-600 hover:underline">
            {t('register.login')}
          </Link>
        </div>

        <div className="flex items-center justify-center">
          <button className="mt-4 bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 px-4 py-2 rounded flex items-center gap-2 text-sm hover:bg-gray-100 dark:hover:bg-zinc-700 transition">
            {/* <img src="/google-icon.svg" alt="Google" className="w-5 h-5" /> */}
            {t('register.google')}
          </button>
        </div>
      </div>
    </div>
  )
}
