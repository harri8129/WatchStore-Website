import React,{useState} from 'react'
import Layout from './../../Components/Layout/Layout'
import toast from 'react-hot-toast';
import axios  from 'axios'
import {useNavigate} from 'react-router-dom'
import "../../Style/register.css"

const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  // form function 

  const handlesubmit= async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("api/v1/auth/register",
      {name,email,phone,address,password,answer});
      if(res && res.data.success){
        toast.success(res.data.message);
        navigate("/login");
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
        <h1>Register </h1>
        <form onSubmit={handlesubmit}>
           <div className="mb-3">
               <input type="name" 
               value={name}
               onChange={(e)=> setName(e.target.value) }
               className="form-control" 
               id="exampleInputName1" 
               placeholder='enter your name '
               required />
           </div>
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
               <input type="text" 
               value={phone}
               onChange={(e)=> setPhone(e.target.value) }
               className="form-control" 
               id="exampleInputPhone1" 
               placeholder='enter your phone number  '
               required  />
           </div>
           <div className="mb-3">
               <input type="text" 
               value={address}
               onChange={(e)=> setAddress(e.target.value) }
               className="form-control" 
               id="exampleInputAddress" 
               placeholder='enter your address ' 
               required />
           </div>
           <div className="mb-3">
               <input type="text" 
               value={answer}
               onChange={(e)=> setAnswer(e.target.value) }
               className="form-control" 
               id="exampleInputAnswer" 
               placeholder='What is your favorite sports' 
               required />
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
          
           <button type="submit" className="btn btn-primary">Register</button>
        </form>
       </div>
    </Layout>
  )
}

export default Register