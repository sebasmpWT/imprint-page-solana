import React from 'react'
import Image from 'next/image'
import nationIconWhite from '../images/nation-white.png'
import instagramLogo from '../images/instagram-negative.png'
import twitterNegative from '../images/twitter-negative.png'

export default function Footer() {
    return (
        <footer className="p-4 bg-black flex flex-wrap">
            <div className="basis-1/2 mx-auto">
                <div className="w-60 mx-auto pt-28">
                    <Image src={nationIconWhite} width={106} height={43}/>
                    <h4 className="pt-5 text-white font-arkitek text-xl font-normal leading-6">Home to the decentralized movements of the future.</h4>
                    <div className="flex space-x-5 items-center pt-5">
                        <div>
                            <Image  src={twitterNegative} width={20} height={20}/>
                        </div>
                        <div>
                            <Image src={instagramLogo} width={20} height={20}/>
                        </div>
                    </div>
                    <h4 className="pt-[30px] text-white font-arkitek text-sm font-normal leading-4 opacity-60">Powered by Solana</h4>
                </div>
            </div>

            <div className="basis-1/2 flex mx-auto">
                <div className="w-4/5 pt-28 mx-auto">

                    <div className="flex flex-wrap border-t-[1px] border-opacity-30 border-white pb-8">
                        <div className="basis-1/3 pt-[7px]">
                            <h4 className="text-white font-arkitek text-xl font-normal leading-7 opacity-50">Movements</h4>
                        </div>
                        <div className="basis-2/3 pt-[7px]">
                            <h4 className="text-white font-arkitek text-xl font-normal leading-7">Start a movement</h4>
                            <h4 className="text-white font-arkitek text-xl font-normal leading-7">Explore</h4>
                            <h4 className="text-white font-arkitek text-xl font-normal leading-7">Saved</h4>
                            <h4 className="text-white font-arkitek text-xl font-normal leading-7">Impacts</h4>
                            <h4 className="text-white font-arkitek text-xl font-normal leading-7">Upcoming</h4>
                        </div>
                    </div>

                    <div className="flex flex-wrap border-t-[1px] border-opacity-30 border-white pb-8">
                        <div className="basis-1/3 pt-[7px]">
                            <h4 className="text-white font-arkitek text-xl font-normal leading-7 opacity-50">Resources</h4>
                        </div>
                        <div className="basis-2/3 pt-[7px]">
                            <h4 className="text-white font-arkitek text-xl font-normal leading-7">What's a DAO?</h4>
                            <h4 className="text-white font-arkitek text-xl font-normal leading-7">Getting started</h4>
                            <h4 className="text-white font-arkitek text-xl font-normal leading-7">FAQ</h4>
                            <h4 className="text-white font-arkitek text-xl font-normal leading-7">Intro to Governance</h4>
                            <h4 className="text-white font-arkitek text-xl font-normal leading-7">Understanding Wallets</h4>
                        </div>
                    </div>

                    <div className="flex flex-wrap border-t-[1px] border-opacity-30 border-white pb-8">
                        <div className="basis-1/3 pt-[7px]">
                            <h4 className="text-white font-arkitek text-xl font-normal leading-7 opacity-50">Info</h4>
                        </div>
                        <div className="basis-2/3 pt-[7px]">
                            <h4 className="text-white font-arkitek text-xl font-normal leading-7">Contact</h4>
                            <h4 className="text-white font-arkitek text-xl font-normal leading-7">Careers</h4>
                            <h4 className="text-white font-arkitek text-xl font-normal leading-7">Privacy Policy</h4>
                            <h4 className="text-white font-arkitek text-xl font-normal leading-7">Terms & Conditions</h4>
                            <h4 className="text-white font-arkitek text-xl font-normal leading-7">Understanding Wallets</h4>
                        </div>
                    </div>

                    <div className="flex flex-wrap border-t-[1px] border-opacity-30 border-white pb-8">
                        <div className="basis-1/3 pt-[7px]">
                            <h4 className="text-white font-arkitek text-xl font-normal leading-7 opacity-50">Partnerships</h4>
                        </div>
                        <div className="basis-2/3 pt-[7px]">
                            <h4 className="text-white font-arkitek text-xl font-normal leading-7">Branded Movements</h4>
                            <h4 className="text-white font-arkitek text-xl font-normal leading-7">Charity Movements</h4>
                            <h4 className="text-white font-arkitek text-xl font-normal leading-7">Bespoke Movements</h4>
                        </div>
                    </div>


                </div>
            </div>
        </footer>
    )
}
