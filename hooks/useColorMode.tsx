/*import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage("color-theme", "light");

  useEffect(() => {
    const className = "dark";
    const bodyClass = window.document.body.classList;

    colorMode === "dark"
      ? bodyClass.add(className)
      : bodyClass.remove(className);
  }, [colorMode]);

  return [colorMode, setColorMode];
};

export default useColorMode;
*/

import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage("color-theme", "light");
/*
  useEffect(() => {
    const className = "dark";
    const bodyClass = window.document.body.classList;

    if (colorMode === "dark") {
      bodyClass.add(className);
    } else {
      bodyClass.remove(className);
    }
  }, [colorMode]);
  */
  useEffect(() => {
  const className = "dark";
  const htmlClass = window.document.documentElement.classList;

  if (colorMode === "dark") {
    htmlClass.add(className);
  } else {
    htmlClass.remove(className);
  }
}, [colorMode]);

  useEffect(() => {
    // In case the color mode was changed outside of this hook
    // (e.g. by the user changing their OS color scheme)
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (mediaQuery.matches) {
        setColorMode("dark");
      } else {
        setColorMode("light");
      }
    };
    mediaQuery.addListener(handleChange);
    return () => {
      mediaQuery.removeListener(handleChange);
    };
  }, [setColorMode]);

  return [colorMode, setColorMode];
};

export default useColorMode;
