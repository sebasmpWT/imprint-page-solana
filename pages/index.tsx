import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import ImprintListing from '../components/ImprintListing'
import Navbar from '../components/Navbar'
import nationBlack from '../images/dotted-asset.png'

const Home: NextPage = () => {
  return (
    <div className="mx-auto">
      <Navbar />

      <div className="fixed invert mix-blend-screen hidden">
        <Image src={nationBlack} width={466} height={863}/>
      </div>

      <div className="flex flex-wrap">
        <div className="basis-1/2 mx-auto max-w-xs relative">
            <div className="sticky top-72">
              <p className="text-left text-xs font-medium tracking-wide font-arkitek uppercase text-black pb-2">Great things are not done alone..</p>
              <p className="text-left text-xs font-medium tracking-wide font-arkitek uppercase text-black pb-2">To the right is a list of every single person who has directly helped in the making of Nation.</p>
              <p className="text-left text-xs font-medium tracking-wide font-arkitek uppercase text-black pb-2">Our appreciation for every person on this list is immense.</p>
              <p className="text-left text-xs font-medium tracking-wide font-arkitek uppercase text-black pb-2">These people represent taste, intellect, initiative — and all share a passion for creating remarkable things.</p>
              <p className="text-left text-xs font-medium tracking-wide font-arkitek uppercase text-black pb-8">Thank you to everyone who has ever been involved in this project.</p>
              <p className="text-left text-xs font-medium tracking-wide font-arkitek uppercase text-black pb-8">-rs/ds/km</p>
              <p className="text-left text-xs font-medium tracking-wide font-arkitek uppercase text-black opacity-30">last updated may 14, 2022</p>
            </div>
        </div>
        <div className="basis-1/2 mx-auto sm:mx-0">
          <ImprintListing />
        </div>
      </div>
      <div className="relative"> 
          <Footer />
        </div>
    </div>
    
    
  )
}

export default Home
