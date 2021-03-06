import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit=async (e)=>{
        e.preventDefault();
        const {email,password}=this.state;
        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'', password: ''});
        } catch (error) {
            console.log(error);
        }
    }
    handleChange=(e)=>{
       const {value,name} = e.target;
       this.setState({[name]:value});
    }
    render(){
        return <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput name='email' label='Email' type='email' value={this.state.email} handleChange={this.handleChange} required />
                <FormInput name='password' type='password' label='Password' value={this.state.password} handleChange={this.handleChange} required />
                
                <CustomButton type="submit">Sign In</CustomButton>
            </form>
            <h2>OR</h2>
                <CustomButton id='google' onClick={signInWithGoogle}>Sign in with Google</CustomButton>
        </div>
    }
}
export default SignIn;