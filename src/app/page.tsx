"use client"
import Image from 'next/image'
import { ButtonComponent } from '@/components/Button';
import { ethers } from 'ethers';
import { useEffect } from 'react';
import { ConnectWallet } from '@/components/connect-wallet';

export default function Home() {
  return (
    <div>
      <ConnectWallet/>
    <div className=" flex-col items-center justify-center flex">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-wide lg:text-5xl text-center text-gray-300">
        Greet Dapp
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6 text-center text-slate-300">
        Using Our Mini Greet Dapp, You Can Write and View Your Messages and Greets On The Blockchain.
      </p>
      <ButtonComponent/>
    </div>
    </div>
  )
}
