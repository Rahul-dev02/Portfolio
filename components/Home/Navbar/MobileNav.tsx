// import { NavLinks } from '@/constant/constant'
// import React from 'react'
// import Link from 'next/link'
// import { CgClose } from 'react-icons/cg'

// type Props ={
//    showNav:boolean;
//    closeNav: ()=>void
// }

// const MobileNav = ({showNav,closeNav}:Props) => {
// const navOpen=showNav ?"translate-x-0" : "translate-x-[100%]"

//   return (
//     <div >
//          {/* overlay  */}
//     <div className={`fixed inset-0 ${navOpen} transform transition-all right-0 duration-500 z-[100002] bg-black
//     opacity-70 w-full h-screen`}> </div>
   
//    {/* navLInks  */}
//    <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all 
//     duration-500 delay-300 w-[80%] sm-:w-[60%] bg-cyan-800 space-y-6 z-[100050] right-0`}>
//         {NavLinks.map((link)=>{
//             return(
//                 <Link key={link.id} href={link.url} >
//                     <p className=' w-fit text-xl ml-12 border-b-[1.5px] pb-1
//                      border-white sm:text-[30px]'>{link.Label}</p>
//                 </Link>
//             )
//         })}

//           {/* cross icon  */}

//      <CgClose
//      onClick={closeNav}
//      className='absolute top-[0.7rem] right-[1.4rem] sm-w-8 sm-h-8 w-6 h-6' />
//     </div>
     
//     </div>
//   )
// }

// export default MobileNav





// 1st change 
"use client"
import { NavLinks } from '@/constant/constant'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'

type Props = {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]"

  // Smooth scroll function
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault()
    closeNav() // pehle menu band karo
    setTimeout(() => {
      const sectionId = url.replace("#", "") // "#home" → "home"
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    }, 300) // thoda wait karo taaki menu close ho sake
  }

  return (
    <div>
      {/* overlay */}
      <div
        className={`fixed inset-0 ${navOpen} transform transition-all right-0 duration-500 z-[100002] bg-black
        opacity-70 w-full h-screen`}
      />

      {/* navLinks */}
      <div
        className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all 
        duration-500 delay-300 w-[80%] sm:w-[60%] bg-cyan-800 space-y-6 z-[100050] right-0`}
      >
        {NavLinks.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            onClick={(e) => handleNavClick(e as React.MouseEvent<HTMLAnchorElement>, link.url)}
          >
            <p className="w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
              {link.Label}
            </p>
          </Link>
        ))}

        {/* cross icon */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer"
        />
      </div>
    </div>
  )
}

export default MobileNav