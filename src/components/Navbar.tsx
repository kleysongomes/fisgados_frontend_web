import { useEffect, useState } from 'react'
import { SunIcon, MoonIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [darkMode])

  const toggleTheme = () => setDarkMode(!darkMode)
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 shadow-sm">
      <div className="flex items-center gap-2 text-violet-700 dark:text-violet-400 font-bold text-lg">
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round"
                d="M12 5c-7 0-9 7-9 7s2 7 9 7 9-7 9-7-2-7-9-7z" />
          <path strokeLinecap="round" strokeLinejoin="round"
                d="M12 12a2 2 0 100-4 2 2 0 000 4z" />
        </svg> */}
        <span>FISGADOS</span>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-1 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-violet-300 transition"
        >
          <GlobeAltIcon className="w-5 h-5" />
          {i18n.language.toUpperCase()}
        </button>

        <button
          onClick={toggleTheme}
          className="text-zinc-700 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-violet-300 transition"
        >
          {darkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
        </button>
      </div>
    </nav>
  )
}
