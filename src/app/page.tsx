import Image from 'next/image'
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input";
import { buttonVariants } from '../../components/ui/button';

export default function Home() {
  return (
    <div className="h-screen flex-col items-center justify-center flex">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl  text-center">
        Greet Dapp
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6 text-center">
        Using Our Mini Greet Dapp, You Can Write and View Your Messages and Greets On The Blockchain.
      </p>
      <div className="flex w-full max-w-sm items-center space-x-2 m-8">
      <Input type="text" placeholder="Enter Your Message" />
      <Button className="bg-slate-950 text-white hover:bg-black transition-all duration-300 rounded-xl w-3/12" type="submit">Greet</Button>
    </div>
      <Button className='bg-slate-300 hover:bg-slate-400 transition-all duration-300 rounded-lg'>View Message</Button>
    </div>
  )
}
