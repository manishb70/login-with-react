import React, { useContext, useState } from 'react';
import NoteContext from '../context/NoteContext';

const Profile = ({  userimg, useremail }) => {

    const state = useContext(NoteContext)
    const [username,setUsername] =useState()
    const [password,setPassword] = useState()

               const  toUpdate = () => {

                            state.setglobaluser(username)
                            state.setGlobalpassword(password)
              }

    return (

        <div className='flex justify-around'>
            <div >


                <div class="max-w-xs my-2 mx-2">
                    <div class="bg-white shadow-xl rounded-lg py-3">
                        <div class="photo-wrapper p-2">
                            <img class="w-32 h-32 rounded-full mx-auto" src={userimg} alt="John Doe" />
                        </div>
                        <div class="p-2">
                            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
                       {state.globaluser}  </h3>
                            <div class="text-center text-gray-400 text-xs font-semibold">
                                <p>Web Developer==</p>
                            </div>
                            <table class="text-xs my-3">
                                <tbody><tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                                    <td class="px-2 py-2">Delhi India</td>
                                </tr>
                                    <tr>
                                        <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                                        <td class="px-2 py-2">+977 9955221114</td>
                                    </tr>
                                    <tr>
                                        <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                        <td class="px-2 py-2">{useremail}</td>
                                    </tr>
                                </tbody></table>

                            <div class="text-center my-3">
                                <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
                            </div>

                        </div>
                    </div>
                </div>







            </div>



            <div className="w-[25rem] h-400px border-black border-2 " >

                <h1 className="font-bold text-3xl text-center mb-[10%]">Update details</h1>
                <hr />
                


                    <div className='w-[90%]   m-auto h-[50%]    '>
                            
                <div  className='flex justify-between mt-5'>
                    <label htmlFor="">Name</label>
                    <input type="text"  className='bg-gray-200  w-[60%] py-1  '  placeholder=" name"/>
                </div>
                
                <div className='flex justify-between mt-5'>
                    <label htmlFor=""> email</label>
                <input type="text"   className='bg-gray-200  w-[60%] py-1 ' placeholder=" email" 
                
                onChange={(e)=>setUsername(e.target.value)}
                />
                </div>
                <div className='flex justify-between  mt-5'>
                    <label htmlFor=""> password</label> 
                <input type="text" className="bg-gray-200 w-[60%] py-1" placeholder=' password' 
                
                onChange={(e)=>setPassword(e.target.value)}
                
                />
                </div>

                </div>
                    <button
                    onClick={toUpdate}
                    className='ml-[40%] mt-2 rounded-[8px] text-white bg-red-600 px-2 py-1'
                    >Submit</button>
                    </div>
<hr /> 











        </div>



    );
}








export default Profile;
