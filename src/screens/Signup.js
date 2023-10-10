import React ,{useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom'



function Signup() {
const Navigate=useNavigate()
  const [credentials, setcredentials] = useState({name:"",email:"",password:"",location:""})
  // generation a request while pressing submitt
  const handleSubmit=async(e)=>{
    e.preventDefault()
    const response = await fetch("http://localhost:5000/api/CreateUser",{
      method: "POST", 
  
      headers: {
        "Content-Type": "application/json",
       
      },
      body: JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.location}), 
    

    })
    // it will give the backend valaditation result
    const json = await response.json()
    console.log(json)
    Navigate("/login")
// success we have taken from backend catch
if(!json.success){
  alert ("enter valid credentials")
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
    <label  htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" name="name" value={credentials.name} onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
  <label  htmlFor="email" className="form-label">Email</label>
  <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange}/>
</div>
  <div className="mb-3">
    <label  htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange}/>
  </div>
  <div className="mb-3">
  <label  htmlFor="location" className="form-label">Location</label>
  <input type="text" className="form-control" id="location" name="location" value={credentials.location} onChange={onChange}/>
</div>
 
  <button type="submit" className="btn btn-success m-2">Submit</button>
  <Link  className="btn btn-danger" to="/Login">Already a User</Link>
</form>
    </div>
    </div>
  )
}

export default Signup