// import React, {useEffect} from "react";
// import {login} from "../services/auth/login";
// import {register} from "../services/auth/register";
// import {verifyNumber} from "../services/auth/verifyNumber";
//
// export default function test() {
//
//     //--------------------------
//     const [numberLogin, setNumberLogin] = React.useState("");
//     const [passwordLogin, setPasswordLogin] = React.useState("");
//     const handleLoginInput = () =>{
//         let data = {number:numberLogin,
//                     password:passwordLogin}
//         console.log(data)
//     }
//     const [loginPost, setLoginPost] = React.useState([]);
//     useEffect(() => {
//         let mounted = true;
//         login()
//             .then(items => {
//                 if(mounted) {
//                     setLoginPost(items.data)
//                 }
//             })
//         return () => mounted = false;
//     }, [])
//     //--------------------------
//     const [number, setNumber] = React.useState("");
//     const [password, setPassword] = React.useState("");
//     const [password2, setPassword2] = React.useState("");
//     const [isVendor, setIsVendor] = React.useState(false);
//     const [isStore, setIsStore] = React.useState(false);
//     const handleRegisterInput = () =>{
//
//         let data = {number:number,
//                     password:password,
//                     password2:password2,
//                     is_vendor:isVendor,
//                     is_store:isStore,
//         }
//         console.log(data)
//     }
//     const [registerPost, setRegisterPost] = React.useState([]);
//     useEffect(() => {
//         let mounted = true;
//         register()
//             .then(items => {
//                 if(mounted) {
//                     setRegisterPost(items.data)
//                 }
//             })
//         return () => mounted = false;
//     }, [])
//     //---------------------------------------------------
//     const [verifyNumberPost, setVerifyNumberPost] = React.useState([]);
//     const handleVerifyNumberInput = () =>{
//         console.log(verifyNumberPost)
//     }
//     useEffect(() => {
//         let mounted = true;
//         verifyNumber()
//             .then(items => {
//                 if(mounted) {
//                     setVerifyNumberPost(items.data)
//                 }
//             })
//         return () => mounted = false;
//     }, [])
//
//
//
//     return (
//         <div>
//             <h1>REGISTER</h1>
//             <input onChange={e=>setNumber(e.target.value)}/>
//             <input onChange={e=>setPassword(e.target.value)}/>
//             <input onChange={e=>setPassword2(e.target.value)}/>
//             <input type="checkbox" onChange={e=>setIsVendor(e.target.checked)}/>
//             <input type="checkbox" onChange={e=>setIsStore(e.target.checked)}/>
//             <button onClick={()=> handleRegisterInput()}>REGISTER</button>
//
//             <h1>LOGIN</h1>
//             <input onChange={e=>setNumberLogin(e.target.value)}/>
//             <input onChange={e=>setPasswordLogin(e.target.value)}/>
//             <button onClick={()=> handleLoginInput()}>LOGIN</button>
//
//             <h1>VERIFYNUMBER</h1>
//             <input onChange={e=>setVerifyNumberPost(e.target.value)}/>
//             <button onClick={()=> handleVerifyNumberInput()}>VERIFYNUMBER</button>
//
//         </div>
//     )
// }