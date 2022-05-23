import React from 'react'
import Image from 'next/image'
import myImage from '../images/phantom-logo.png'
import union from '../images/union.png'
import nationBlack from '../images/nation-black.png'

export default function Navbar() {
    return (
        <nav className="flex justify-between mx-auto border-b border-solid border-black sticky top-0 bg-white h-[37px] z-10">
            <div className="flex items-center">
                <h3 className="uppercase p-3 border-r border-solid border-black text-xs font-medium font-arkitek leading-3">About</h3>
                <h3 className="uppercase p-3 border-r border-solid border-black text-xs font-medium font-arkitek leading-3">Careers</h3>
                <h3 className="uppercase p-3 border-r border-solid border-black text-xs font-medium font-arkitek leading-3">Partnerships</h3>
                <h3 className="uppercase p-3 border-r border-solid border-black text-xs font-medium font-arkitek leading-3">Contact</h3>
                <h3 className="uppercase p-3 border-r border-solid border-black text-xs font-medium font-arkitek leading-3">Learn</h3>
            </div> 
            <div className="pt-2 px-2 bg-white border-b-[30px] border-white">
                <Image src={nationBlack} width={112} height={45}/>
            </div>
            <div className="flex items-center">
                <h3 className="uppercase p-3 border-r border-l border-solid border-black text-xs font-medium font-arkitek leading-3">Explore</h3>
                <h3 className="uppercase p-3 border-r border-solid border-black text-xs font-medium font-arkitek leading-3">Create a movement</h3>
                <div className="flex items-center p-2 border-r border-solid border-black space-x-1.5">
                    <Image src={myImage} width={20} height={20}/>
                    <h3 className="uppercase text-xs font-medium font-arkitek leading-3">Connect phantom</h3>
                </div>
                
                <h3 className="uppercase p-3 border-r border-solid border-black text-xl font-extralight font-arkitek leading-3">+</h3>
                
            </div>
        </nav>
    )
}
