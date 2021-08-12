import React,{createContext,useContext,useState} from 'react';

export const ProfileContext =  createContext({});


const initialProfile = {
  nome:"",
  email:"",
  senha:"",
}

export const ProfileProvider = ({children}) =>{
  const [profile, setProfile] = useState(initialProfile);

  const dispatchChangeProfile = (data) => {
      setProfile(data);
  }

  return(
    <ProfileContext.Provider value={{profile,dispatchChangeProfile}}>
      {children}
    </ProfileContext.Provider>
  )
}


export const UseProfileContext = () => useContext(ProfileContext);