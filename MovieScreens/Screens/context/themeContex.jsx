import React,{createContext,useState} from 'react'


const [light,setLight] = useState(false)
export const ThemeProviderIntoDarkMode =({children}) => {
   
    const IntoLightMode = () => {
        setLight((prevMode)=>!prevMode)
    }
    return (
        <IntoLightMode>
            {children}
        </IntoLightMode>
    );

}