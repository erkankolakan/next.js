"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'
import { usePathname } from 'next/navigation'

const Page = () => {

  const searchParams = useSearchParams();
  const name = searchParams.get("name") 
  // ben aslında şuan linkteki name keyine sahip olanın value değerini alıyorum.
  
  console.log("url deki name nin value değeri",name)


  const pathname = usePathname()

  console.log(pathname)
  
  return (
    <div>
      Selam Dunya Ben ERKAN
    </div>
  )
}

export default Page


/*
  useSearchParamas ı kullanamk için yine sayfanın client olması gerekir. 
  !!! nextjs de use ile başlayan işlemlerde %99 değerinde client side (kullanıcı taraflı yani) olması gerekir. React da böyle birşey yoktu çünkü react projeleri server üzerinde çalışmıyordu. 
  

*/