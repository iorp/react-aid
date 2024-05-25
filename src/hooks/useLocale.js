import React, {  useContext } from 'react';

import LocaleContext from '../contexts/LocaleContext';
import oget from '@iorp/node-aid/lib/object/oget'
 
const useLocale= ()=>{
  const {locale,setLocale}= useContext(LocaleContext);  
    const setLanguage=(language)=>{
      setLocale(p => {return {...p,current:language};  });  
    } 
  
/**
 * Updates the locale strings with the provided new string object.
 * @param {object} newStrObj - The new string object to update the locale strings.
 * @example
 * // Example usage:
 * // setStrings({
 * //   en: {
 * //     greeting: 'Hello',
 * //     farewell: 'Goodbye'
 * //   },
 * //   fr: {
 * //     greeting: 'Bonjour',
 * //     farewell: 'Au revoir'
 * //   }
 * // });
 * // -> Updates the locale strings with new strings for English and French languages.
 */
const setStrings = (newStrObj) => {
  const strings = locale.strings || {};

  // Iterate over the new string object
  for (const language in newStrObj) {
    if (strings.hasOwnProperty(language)) {
      // Merge new strings with existing strings for the language
      strings[language] = { ...strings[language], ...newStrObj[language] };
    } else {
      // Add new strings if language doesn't exist
      strings[language] = newStrObj[language];
    }

    // Update locale strings
    setLocale((prevState) => {
      return { ...prevState, strings: strings };
    });
  }
};

  /**
 * Retrieves a string value or React component corresponding to the provided key from the locale.
 * @param {string} key - The key to retrieve the string value or component.
 * @param {object} [params={}] - Additional props to pass to the string component.
 * @returns {string|ReactElement} The string value or React component corresponding to the key.
 * @example
 * // Example usage:
 * // getString('ALocalizedComponent',{test: 11})
 * // -> Renders a localized component with additional props { test: 11 }
 * //
 * // getString('ALocalizedString')
 * // -> Retrieves and returns a localized string
 */
const getString = (key, params = {}) => {
  let res;

  if (locale && locale.strings) {
    try {
      // Retrieve key
      res = oget(locale.strings[locale.current], key);
    } catch (e) {
      return `${locale.current}.${key}`; // If not set, return warning
    }
    if (res) {
      if (typeof res === 'string') {
        return res; // Return language data string
      } else if (typeof res === 'function') {
        let tres = res(params);
        if (React.isValidElement(tres)) {
          return tres;
        } else if (typeof tres === 'string') {
          return tres; // Return language data string
        }
      } else if (React.isValidElement(res)) {
        return res;
      }
    } else {
      return `${locale.current}.${key}`; // If not set, return warning
    }
  }

  return ''; // Return empty if not loaded yet
};

/**
 * Renders a string or React component based on the provided string or function.
 * @param {object} props - The props passed to the string component.
 * @returns {ReactElement} The rendered string component.
 * @example
 * // Example usage:
 * // <StringComponent p={'Experience'} test="22" />
 * // -> Renders a localized component 'Experience' with additional props { test: "22" }
 */
const StringComponent = ({ p, ...props }) => {
  const Lp = getString(p, props);

  // Render based on the type of Lp
  return (
    <>
      {React.isValidElement(Lp) && React.cloneElement(Lp, { ...Lp.props })}
      {typeof Lp === 'function' && <>{Lp(props)}</>}
      {typeof Lp === 'string' && <>{Lp}</>}
    </>
  );
};
 

    return {
      locale,
      setLocale,
      setLanguage,
      setStrings,
      getString,
      L : getString,
      S : StringComponent,
    };
  }
  export default useLocale;