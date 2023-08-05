"use client"
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button"
import { Contract, JsonRpcSigner, ethers } from "ethers";
import { contractAbi, contractAddress } from "@/lib/utils";
import { useEffect, useState } from "react";

export const ButtonComponent = () => {
    const provider = new ethers.BrowserProvider((window as any).ethereum);
    const contract = new Contract(contractAddress,contractAbi,provider);
    const [message,setMessage] = useState("View Message");
    const [greetValue,setGreetValue] = useState('');

    const handleMessage = async () => {
        const signer = await provider.getSigner();
        const userMessage:string = await contract.viewGreet({from: signer.address});
        setMessage(userMessage);
    }

    const greetSubmit = async () => {
        if(greetValue===''){
            alert("Empty greet!");
        } else{
        const signer = await provider.getSigner();
        const txContract = new Contract(contractAddress,contractAbi,signer); 
        const txSetGreet = await txContract.greet(greetValue);
        await txSetGreet.wait();
        }
    }

    const handleGreet = async (event:any) => {
        setGreetValue(event.target.value);
        console.log(greetValue);
    }
    
    return (
        <div className="flex flex-col justify-center items-center space-y-6">
            <div className="flex space-x-3 mt-5">
                <Input required type="text" placeholder="Enter Your Message" className='text-white border-black w-[200px]' value={greetValue} onChange={handleGreet}/>
                <Button className="bg-slate-950 text-white hover:bg-black transition-all duration-300 rounded-xl w-3/12 " type="submit"
                onClick={greetSubmit}>Greet</Button>
                </div>
            <Button className='bg-slate-300 hover:bg-slate-400 transition-all duration-300 rounded-lg text-black'
            onClick={handleMessage}>{message}</Button>
        </div>
    )
}