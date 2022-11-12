import React,{useState,useContext} from 'react';

import Logo from '../../olx-logo.png';
import {FirebaseContext} from '../../store/Context'
import {useHistory} from 'react-router-dom'
import './Signup.css';

export default function Signup() {

  const history = useHistory()
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState(false)

  const {firebase} = useContext(FirebaseContext)

  // const initialValues = {name:"",email:"",phone:"",password:""}
  // const [formValues,setFormValues] = useState()

  const handleSubmit = (e)=>{
    e.preventDefault() 
    if(username.length==0||email.length==0||phone.length==0||password.length==0){
      setError(true)
    }else{
      firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
        result.user.updateProfile({displayName:username}).then(()=>{
          firebase.firestore().collection('users').add({
            id:result.user.uid,
            username:username,
            phone:phone
          }).then(()=>{
            history.push("/login")
          })
        })
      })
    }
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          
          <br />
          <input
            className="input"
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          {error && username.length==0 ? <label className='errormsg' >Username is required</label>: ""}
          
          <br />
          <input
            className="input"
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
         {error && email.length==0 ? <label className='errormsg'>Email is required</label> : ""}
          
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            placeholder="Phone No:"
            onChange={(e)=>setPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          {error && phone.length==0 ? <label className='errormsg'>Phone no: is required</label> : ""}
          
          <br />
          <input
            className="input"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          {error && password.length==0 ? <label className='errormsg'>Password is required</label> : ""}
          <br />
          <button>Signup</button>
        </form>
        <a onClick={()=>{
          history.push('/login')
        }}>Login</a>
      </div>
    </div>
  );
}
