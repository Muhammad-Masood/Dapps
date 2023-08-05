"use client"
import { ethers } from "ethers"
import { Button } from "../../components/ui/button"
import { useEffect, useState } from "react";

export const ConnectWallet = () => {
  
  const [address,setAddress] = useState("Connect Wallet"); 

  const connect = async () => {
    if ((window as any).ethereum != null) {
      console.log("Metamask is installed!");
      const provider = new ethers.BrowserProvider((window as any).ethereum);
      const signer = await provider.getSigner();
      setAddress(signer.address);
    }
    else {
      console.log("Metamask is not installed!");
    }
  }

  useEffect(()=>{
    connect();
  },[connect]);

  return (
    <div>
      <div className='flex justify-end m-6'>
        <Button onClick={connect}>{address}</Button>
      </div>
    </div>
  )
}
