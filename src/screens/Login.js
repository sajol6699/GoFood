import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'


function Login() {
let navigate=useNavigate()

  const [credentials, setcredentials] = useState({email:"",password:""})
  // generation a request while pressing submitt
  const handleSubmit=async(e)=>{
    e.preventDefault()
    const response = await fetch("http://localhost:5000/api/loginuser",{
      method: "POST", 
  
      headers: {
        "Content-Type": "application/json",
       
      },
      body: JSON.stringify({email:credentials.email,password:credentials.password}), 
    

    })
    // it will give the backend valaditation result
    const json = await response.json()
    // error 4000 request error
    console.log(json)
// success we have taken from backend catch and it will show frontend alert
if(!json.success){
  alert ("enter valid credentials")
 }
 if(json.success){
  localStorage.setItem("authToken",json.authToken)
  console.log(localStorage.getItem("authToken"))
navigate("/")
}


  }
  const onChange=(e)=>{
    setcredentials({...credentials,[e.target.name]:e.target.value})

  }

  return (
    <div>
    <div className="container m-4">
    <form onSubmit={handleSubmit}>
  
  <div className="mb-3">
  <label  htmlFor="email" className="form-label">Email</label>
  <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange}/>
</div>
  <div className="mb-3">
    <label  htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange}/>
  </div>
  
 
  <button type="submit" className="btn btn-success m-2">Submit</button>
  <Link  className="btn btn-danger" to="/signUp">New User</Link>
</form>
    </div>
    
    </div>
  )
}

export default Login