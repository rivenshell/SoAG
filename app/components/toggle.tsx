"use client"
import React, { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  // On mount, read the user's theme preference from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("theme")
    if (stored) {
      setIsDark(stored === "dark")
      document.documentElement.classList.toggle("dark", stored === "dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    document.documentElement.classList.toggle("dark", newTheme)
    localStorage.setItem("theme", newTheme ? "dark" : "light")
  }

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 border rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  )
}
