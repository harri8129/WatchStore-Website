import React,{useState} from 'react'
import Layout from './../../Components/Layout/Layout'
import toast from 'react-hot-toast';
import axios  from 'axios'
import {useNavigate,useLocation} from 'react-router-dom'
import {useAuth} from "../../context/auth"
import '../../Style/login.css';

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [auth,setAuth] =useAuth()
    const navigate = useNavigate()
    const location = useLocation()

     // form function 

  const handlesubmit= async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("api/v1/auth/login",
      {email,password,});
      if(res && res.data.success){
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user ,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate( location.state || "/");
      }
      else{ 
        toast.error(res.data.message);   
      }
    } catch (error) {
      console.log(error)
      toast.error('SomeThing Went Wrong')
    }
  };

  return (
    <Layout title={"Register "}>
        <div className="register">
        <h1>Login </h1>
        <form onSubmit={handlesubmit}>
          
           <div className="mb-3">
               <input type="email" 
               value={email}
               onChange={(e)=> setEmail(e.target.value) }
               className="form-control" 
               id="exampleInputEmail1" 
               placeholder='enter your email '
               required  />
           </div>
           
           <div className="mb-3">
               <input type="password" 
               value={password}
               onChange={(e)=> setPassword(e.target.value) }
               className="form-control" 
               id="exampleInputPassword1" 
               placeholder='enter your password ' 
               required   />
           </div>
           <div className="mb-3">
           <button type="submit" className="btn btn-primary">
            Login
            </button>
          </div>
            <div className="mb-3">
            <button type="button" className="btn btn-primary" onClick={()=>{navigate('/forgotpassword')}}>
            Forgot Password
            </button>
            </div>
           
        </form>
       </div>
    </Layout>
  )
}

export default Login