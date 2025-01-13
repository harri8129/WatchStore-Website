import Layout from '../../Components/Layout/Layout'
import React,{useState} from 'react'
import toast from 'react-hot-toast';
import axios  from 'axios'
import {useNavigate} from 'react-router-dom'


const ForgotPassword = () => {

  const [email, setEmail] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [answer, setAnswer] = useState("")
  const navigate = useNavigate()

// form function 
const handlesubmit= async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("api/v1/auth/forgot-password",{
      email,
      newPassword,
      answer
    });
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
    <>
     <Layout title={"Forgot password  "}>
        <div className="register">
        <h1>Reset Password  </h1>
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
               <input type="text" 
               value={answer}
               onChange={(e)=> setAnswer(e.target.value) }
               className="form-control" 
               id="exampleInputEmail1" 
               placeholder='enter your favourite sport  '
               required  />
           </div>
           
           <div className="mb-3">
               <input type="password" 
               value={newPassword}
               onChange={(e)=> setNewPassword(e.target.value) }
               className="form-control" 
               id="exampleInputPassword1" 
               placeholder='enter your password ' 
               required   />
           </div>
           
           <button type="submit" className="btn btn-primary">
            Reset
            </button>
      
        </form>
       </div>
    </Layout>
    </>
  )
}

export default ForgotPassword