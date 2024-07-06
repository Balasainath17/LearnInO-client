import { useUpdatePasswordMutation } from '@/redux/features/user/userApi';
import {styles} from '../../../app/styles/style';
import React, {FC, useEffect, useState } from 'react'
import toast from 'react-hot-toast';

type Props = {}

const ChangePassword:FC<Props> = (props) => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [updatePassword,{isSuccess,error}] = useUpdatePasswordMutation();

    const passwordChangeHandler = async (e: any) => {
        e.preventDefault();
        if(newPassword !== confirmPassword) {
            toast.error("Passwords do not match");
        }
        else{
            await updatePassword({oldPassword,newPassword});
        }
    };

    useEffect(() => {
        if(isSuccess) {
            toast.success("Password updated successfully");
        }
        if(error){
            if("data" in error) {
                const errorData = error as any;
                toast.error(errorData.data.message);
            }
        }
    },[isSuccess,error]);


  return (
    <div className="w-full pl-7 px-2 800px:px-5 800px:pl-0 ">
        <h1 className="block text-[25px] 800px:text-[30px] font-Poppins text-center font-[500] dark:text-[#fff] text-black pb-2 ">
            Change Password
        </h1> 
        <div className="w-full">
            <form 
                aria-required
                onSubmit={passwordChangeHandler}
                className="flex flex-col items-center"
            >
                <div className="w-[100%] 800px:w-[50%] mt-5">
                    <label className="block  dark:text-[#fff] text-black">Enter your Old Password</label>
                    <input 
                        type="password"
                        className={`${styles.input} dark:border-white border-black !w-[100%] mb-4 800px:mb-0`}
                        required
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value) }
                        />
                </div>
                <div className="w-[100%] 800px:w-[50%] mt-6">
                    <label className="block  dark:text-[#fff] text-black">Enter your New Password</label>
                    <input 
                        type="password"
                        className={`${styles.input} dark:border-white border-black !w-[100%] mb-4 800px:mb-0`}
                        required
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value) }
                        />
                </div>
                <div className="w-[100%] 800px:w-[50%] mt-6">
                    <label className="block  dark:text-[#fff] text-black">Confirm your New Password</label>
                    <input 
                        type="password"
                        className={`${styles.input} dark:border-white border-black !w-[100%] mb-4 800px:mb-0`}
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value) }
                        />
                        <input
                            className={`w-full 800px:w-[250px] h-[40px] border dark:border-[#37a39a] border-[#ed562c]  text-center dark:text-[#fff] text-black rounded-[3px] mt-8 cursor-pointer`}
                            required
                            value="Update"
                            type="submit"
                         />
                </div>
            </form>
        </div>
    </div>
  )
}

export default ChangePassword