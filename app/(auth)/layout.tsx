import React, { ReactNode } from 'react'
import Image from 'next/image'
const layout = ({children} : {children : ReactNode}) => {
  return (
<main className='auth-container'>
    <section className='auth-form'> 
      <div className="auth-box">
        <div className="flex flex-row gap-3">
        <Image src="/icons/logo.svg" alt="logo" width={37} height={37} />
        <h1 className='text-2xl font-semibold '>Bookwise</h1>
    
        </div>
        <div className="">

        {children}
        </div>
   
      </div>
    </section>

<section className='auth-illustration'>
  <Image src = "/images/auth-illustration.png" alt="illustration" width={1000} height={1000} 
  className='size-full object-cover'/>
</section>



</main>
    

  )
}

export default layout