import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './signup.scss';
import {auth,createUserProfileDoc} from '../../firebase/firebase.utils';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
    handleSubmit=async event=>{
        event.preventDefault();
        if(this.state.password!==this.state.confirmPassword){
            alert('Password does not match');
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(this.state.email,this.state.password);
            
            await createUserProfileDoc(user,this.state);
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        } catch (error) {
            console.error(error);
        }
    }
    handleChange= event=>{
        const {name,value}=event.target;
        this.setState({[name]:value});
    }
    render(){
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit} >
                    <FormInput type='text' name='displayName' value={this.state.displayName} onChange={this.handleChange} label='Display Name' required></FormInput>
                    <FormInput type='email' name='email' value={this.state.email} onChange={this.handleChange} label='Email' required></FormInput>
                    <FormInput type='password' name='password' value={this.state.password} onChange={this.handleChange} label='Password' required></FormInput>
                    <FormInput type='password' name='confirmPassword' value={this.state.confirmPassword} onChange={this.handleChange} label='Confirm Password' required></FormInput>
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignUp;