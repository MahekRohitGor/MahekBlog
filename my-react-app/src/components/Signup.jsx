import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Label, TextInput, Button} from 'flowbite-react';

function Signup() {
    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState({ text: '', color: '' });
    const handleChange = (e) =>{
        setFormData({...formData, [e.target.id]: e.target.value});
    };
    const handleSubmit = async (e) =>{
         e.preventDefault();    
         try{
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData),
            })
            const data = await res.json();
            if (res.ok) {
                setMessage({ text: 'Signup successful!', color: 'green' });
            } else {
                setMessage({ text: data.message || 'Signup failed', color: 'red' });
            }
         }catch(error){
            setMessage({ text: 'An error occurred during signup', color: 'red' });

         }
    }
    // console.log(formData);
    return(
            <div className='min-h-screen mt-20'>
                <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
                    {/* left */}
                    <div className="flex-1">
                    <Link to="/" className="text-4xl font-bold dark:text-white">
                    <span className="px-2 py-1 rounded text-white bg-slate-800">
                    Mahek
                    </span> Gor
                    </Link>
                    <p className="text-sm mt-5">
                        Please signup with your email id and password.
                    </p>
                    {/* <p className="text-sm mt-5 text-justify">
                    Welcome to Culinary Canvas, the ultimate destination for food lovers and culinary enthusiasts! 🍽️✨
                    </p> */}
                    {/* <p className="text-sm mt-5 text-justify">
                    Are you passionate about cooking? Do you have a signature dish that you're proud of? We invite you to share your culinary creations with our vibrant community! Whether it's a traditional family recipe passed down through generations or a modern twist on a classic dish, we want to hear about it.
                    </p> */}
                    </div>
                    
                    {/* right */}
                    <div className="flex-1">
                        <form className="flex flex-col gap-4"  onSubmit={handleSubmit}>
                            <div className="">
                                <Label value="Your Username"/>
                                <TextInput type='text' placeholder="John Doe" id="username" onChange={handleChange}/>
                            </div>
                            <div className="">
                                <Label value="Your Email"/>
                                <TextInput type='email' placeholder="example@email.com" id="email" onChange={handleChange}/>
                            </div>
                            <div className="">
                                <Label value="Your Password"/>
                                <TextInput type='password' placeholder="********" id="password" onChange={handleChange}/>
                            </div>
                            <Button color='dark' type="submit">
                                Sign Up
                            </Button>
                        </form>
                        <div className=" flex gap-2 text-sm mt-5">
                            <span>Already have an account? </span>
                            <Link to="sign-in" className="text-blue-500">
                                Sign In
                            </Link>
                        </div>
                        {message.text && (
                        <div className={`mt-4 p-4 rounded text-white ${message.color === 'green' ? 'bg-green-500' : 'bg-red-500'}`}>
                            {message.text}
                        </div>
                    )}
                    </div>

                </div>
            </div>
    )
};

export default Signup;