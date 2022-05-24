import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import ImprintListing from '../components/ImprintListing'
import Navbar from '../components/Navbar'
import dottedAsset1 from '../images/dotted-asset.png'
import dottedAsset2 from '../images/dotted-asset2.png'

const Home: NextPage = () => {
  return (
    <div className="mx-auto bg-white dark:bg-black">
      <Navbar />

      <div className="fixed invert dark:invert-0 w-1/2">
        <Image src={dottedAsset1} width={466} height={863}/>
      </div>

      <div className="flex flex-wrap">
        <div className="basis-1/2 mx-auto max-w-xs relative z-10 my-8 sm:my-0">
            <div className="sticky top-72">
              <p className="text-left text-xs font-medium tracking-wide font-arkitek uppercase text-black pb-2 dark:text-white">Great things are not done alone..</p>
              <p className="text-left text-xs font-medium tracking-wide font-arkitek uppercase text-black pb-2 dark:text-white">To the right is a list of every single person who has directly helped in the making of Nation.</p>
              <p className="text-left text-xs font-medium tracking-wide font-arkitek uppercase text-black pb-2 dark:text-white">Our appreciation for every person on this list is immense.</p>
              <p className="text-left text-xs font-medium tracking-wide font-arkitek uppercase text-black pb-2 dark:text-white">These people represent taste, intellect, initiative — and all share a passion for creating remarkable things.</p>
              <p className="text-left text-xs font-medium tracking-wide font-arkitek uppercase text-black pb-8 dark:text-white">Thank you to everyone who has ever been involved in this project.</p>
              <p className="text-left text-xs font-medium tracking-wide font-arkitek uppercase text-black pb-8 dark:text-white">-rs/ds/km</p>
              <p className="text-left text-xs font-medium tracking-wide font-arkitek uppercase text-black opacity-30 dark:text-white">last updated may 14, 2022</p>
            </div>
        </div>
        <div className="basis-1/2 mx-auto sm:mx-0 z-10">
          <ImprintListing />
        </div>
      </div>
      <div className="fixed bottom-8 right-0 dark:invert-0 invert w-1/2">
        <Image src={dottedAsset2} width={633} height={338}/>
      </div>
      <div className="relative"> 
          <Footer />
        </div>
    </div>
    
    
  )
}

export default Home
