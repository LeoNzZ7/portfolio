import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { useThemeContext } from '../contexts/theme.context'

export const Toggle = () => {
  const { theme, setTheme } = useThemeContext();

  const [darkMode, setDarkMode] = useState(true)

  return (
    <Switch
      checked={darkMode}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      onChange={() => setDarkMode(!darkMode)}
      className={`${darkMode ? 'bg-purple-800' : 'bg-neutral-400'
        } relative inline-flex h-6 w-12 items-center rounded-full transition-colors`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${darkMode ? 'translate-x-7' : 'translate-x-1'
          } inline-block h-4 w-4 transform rounded-full bg-white  transition-transform`}
      />
    </Switch>
  )
}