import { MoonIcon, SunMediumIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem('theme') === 'dark',
  )

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  console.log('darkMode', darkMode)

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="button cursor-pointer relative"
    >
      {darkMode ? (
        <SunMediumIcon className="text-white" />
      ) : (
        <MoonIcon className="text-black" />
      )}
    </button>
  )
}
