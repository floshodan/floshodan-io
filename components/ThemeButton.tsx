"use client";
import { useEffect, useState } from "react";
import useColorMode from "hooks/useColorMode";

const Button = () => {
  const [mounted, setMounted] = useState(true);
  const [colorMode, setColorMode] = useColorMode();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
     <button
      className="text-sky-500 dark:text-sky-400 font-semibold cursor-pointer p-3 rounded-md text-sm"
      onClick={() => {
        setColorMode(colorMode === "dark" ? "light" : "dark");
      }}
    >
      {colorMode === "dark" ? (
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" color='currentColor' viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
      ) : (
      <svg
        width="1.5em"
        height="1.5em"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="currentColor"
      >
        <path
          d="M3 11.507a9.493 9.493 0 0018 4.219c-8.507 0-12.726-4.22-12.726-12.726A9.494 9.494 0 003 11.507z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
        ></path>
      </svg>

      )}
    </button>
  );
};

export default Button;
