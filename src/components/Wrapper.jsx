
import React, {useState} from 'react';
import {IntlProvider} from 'react-intl';
import French from '../lang/fr.json';
import English from '../lang/en.json';

export const Context = React.createContext();
const local = 'en' // navigator.language;

let lang;
switch (local) {
    case "en":
        lang = "English"
        break;
    case "fr":
        lang = "French"
        break;

    default:
        lang = "English"
        break;
}

const Wrapper = (props) => {
    const [locale, setLocale] = useState(local);
    const [messages, setMessages] = useState(lang);
    function selectLanguage(e) {
        console.log('here')
        console.log(e)
        
        // const newLocale = e.target.value;
        const newLocale = e
        setLocale(newLocale);
        switch (newLocale) {
            case "en":
                setMessages(English);
                break;
            case "fr":
                setMessages(French);
                break;
        
            default:
                setMessages(English);
                break;
        }
    }
    return (
        <Context.Provider value = {{locale, selectLanguage}}>
            <IntlProvider messages={messages} locale={local}>
                {props.children}
            </IntlProvider>
        </Context.Provider>
    );
 }
 export default Wrapper;