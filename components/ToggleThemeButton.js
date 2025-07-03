import { useState, useEffect } from 'react';
import Button from './Button';

export default function ToggleThemeButton() {
  // Check initial theme from localStorage or default to light
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    const theme = dark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }, [dark]);

  return (
    <Button
      style={{
        background: 'var(--gradient-neon)',
        color: 'var(--color-text)',
        border: 'none',
        boxShadow: dark
          ? '0 0 8px 2px var(--color-primary)'
          : '0 0 8px 2px var(--color-secondary)',
        transition: 'background 0.3s'
      }}
      onClick={() => setDark((d) => !d)}
    >
      {dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </Button>
  );
}