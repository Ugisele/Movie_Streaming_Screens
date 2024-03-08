import React,{createContext,useState} from 'react'



export const changeintoLightMode =createContext();


export const ThemeProviderIntoLightMode =({children}) => {

    const [light,setLight] = useState(false)
    const IntoLightMode = () => {
        setLight((prevMode)=>!prevMode)
    }
    return (
        <changeintoLightMode.Provider value={{IntoLightMode,light}}>
            {children}
        </changeintoLightMode.Provider>
    );

}