// "use client"  (bunu kapatıığım gibi artık ve console sında artık consola yazdırdıklarım gözükmüyor.)
"use client"
import React from 'react'
import { useRouter } from 'next/navigation'


const Trial = () => {

  const routerRed = useRouter();

    console.log("trial")
  return (
   <>
    {/* push özelliği  */}
    <div onClick={() => routerRed.push("/erkan")}> PUSH </div> 

    {/* back özelliği */}
    <div onClick={() => routerRed.push()}> BACK </div> 



   </>
  )
}

export default Trial
//arık burda yazdırığın parametreler web sayfasında console ekranında gözükücek.
//Ama bizim en üste bu sayfanın "use client" olduğunu söylememiz gerekiyor.
//Hangi sayfada gözükmesini istiyorsan o sayfaya bu sayfayı şmport etmen gerekir.



/*
useRounter
  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  Eğer ben bir sayfada useRouter kullanacaksam o sayfada clinetside işlemlerini yapılması gerekiyor. Bu oldukça önemlidir.
  Bir sayfası clientside yapmak da oldukça kolay zaten, sadece sayfanın en üstüne "use client" yazmamız yeterli.
  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    push beni farklı bir sayfaya yönlendirir.
    back aslında geri butonu yönlendirildiğin sayfanan geri geliyorsun.
    forward bir ileri sayfaya gidiyorsun
    refresh sayfayı yeniler. Klavyedeki F5 görevini görür.

*/


