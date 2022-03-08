
import { async } from '@firebase/util';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import  React, {createContext, useState} from 'react'
import {auth} from '../firebase'

export const GlobalContext = React.createContext({});

const GlobalProvider =({children})=>{

  const [isLoading, setIsLoading] = useState(false)
  const [token, setToken]= useState(localStorage.getItem("token")||"")

  const signUp= async ({email, password})=>{
    setIsLoading (true)
    const res=await createUserWithEmailAndPassword(auth, email, password)
    setIsLoading (false)
    console.log(res)
  }
  return(
    <GlobalContext.Provider value={{token,setToken, signUp, isLoading}}>
      {children}
    </GlobalContext.Provider>
  )
}


export default GlobalProvider;

// export function useAuth() {
//   return useContext(AuthContext)
// }

// export function AuthPrivider({ children }) {

//   const [currentUser, setCurrentUser] = useState()

//   function signup(email, password) {
//     return auth.createUserWithEmailAndPassword(email, password)
//   }

//   useEffect(()=>{
//     const unsubscribe = auth.onAuthStateChanged(user => {
//       setCurrentUser(user)
//     })
//     return unsubscribe
//   },[])



//   const value = {
//     currentUser,
//     signup
//   }
//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>

//   )
// }

// export default AuthPrivider