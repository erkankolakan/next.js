import React from 'react'
import Link from 'next/link'
import Image from 'next/image'



const Page = () => {
 
  return (
    <>
    
      <Link href="/about" >Yöndendirme Link denemesi</Link> <br/>
      <Link href={{pathname:"about"}} >Yöndendirme Link denemesi 1</Link> <br/>

      <Link href="/about?name=berkant" >Yöndendirme Link denemesi 2</Link> <br/>
      <Link href="/about?name=berkant&surname=kaya" >Yöndendirme Link denemesi 2</Link><br/> 

      <Link href={{
        pathname:"about",
        query:{
          name:"berkant"
        }
      }} >Yöndendirme Link denemesi 3</Link> <br/>

<Link href={{
        pathname:"about",
        query:{
          name:"berkant",
          surname:"kaya"
        }
      }} >Yöndendirme Link denemesi 4</Link> <br/>

-----------------------------------------------------------------------------------------------------------------------
      <Image
      src="https://images.pexels.com/photos/12825186/pexels-photo-12825186.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      width={400} height={400} />
    </>
  )
}

export default Page


//page bizim için ana sayfayı temsil eder.

//Biz next.js de route kulanmak istediğimiz zamana gideceğimiz uzantıyla aynı adda klasörün mutlaka app altında olmadır. Klasörün içinde de de page.jsx olmalıdır ki render edilebilsin. localhost:3000/products.

//Peki biz localhost:3000/products/2 gibi sayfanın içinden bir ürünün uzantısına gitmek isteseydik nasıl yapardık ?
//Bizim bu numaralarımız idlerimiz sürekli değişeceği için dinamik bir yapıda olması gerekir. Biz sayfalarımıza bu id li sayfalarımıza products altından erişeceğimiz için dizim products üzerinde devam etmemiz lazım ve [] kullanarak bir klasör oluştyracağız bu da bizim dinamik idlerimizi taşıyacak bir bir klasör olmuş olacak. Tabiki bizim yine içindekileri render etmemiz için page.js koymamız gerekir.
//Sayfanın uzantısını ne yazarsan yaz aynı sonucu sonucu render edersin. Eğer uzantıdaki id değeri sayfana gelsin ilstiyorsan dışarıdan bir params değer almalısın onuda {params.id} şeklinde yazdırmalısın. neden id yazdık çünkü [id] biz dosyamızı bu şekilde yazdık. [x] olsaydı {params.x} şeklinde uzantının değerini alabilirdik.

//Biz localhos:300/products/2 şeklinde bir statik birde dinamik bir şekilde root oluşturduk. peki biz localhos:300/products/2/1/2/3/1/3 şeklinde birden fazla dinamik rooute oluşturmak isteseydik. spreade operatörünü kullanarak devam edebiliridk. Bunu da [...id] şeklinde kullanacaktık.

//Ben products altındaki page.jsx sayfasını silersem ve utantılara gidersem hata alamam. Ama özellikle products sayfasına gidersem hatala alırım. O yüzden biz [[...id]] yapmalıyım ki id nin altındaki page.jsx sayfasını kullanabileyim. Bu sayede ortak page kullanarak fazla dosya kullanımından ve karmaşadan uzaklaşmış oluyoruz.

//Bizim app altında oluşturduğumuz her uzantı bir url. biz yorumsatırı diye bir klasör oluştursak ve içerisine products dosyamızı atarsak bizim tarayıcı üzerinden artık localhost:3000/yorumsatiri/product şeklinde gitmemiz gerekir. Biz url de yorumsatiri yazının görünmemesini istiyorsak klasörü (yorumsatiri) şeklinde normal paranteze almamız yeterli olacaktır. artık biz url mize localhost:3000/erkan şeklinde erişebilirim yorumsatiri klasörüde sadece saklama klasörü işlevi görecektir.

// Link ve img karvarmları (3. ders)
//Bu iki yapı seo çalışmalarında web sayfanın en üst sıralarda gözükmesini sağlamak.

//LİNK
//link i import Link from 'next/link' şeklinde çağırmaktayız.
//<Link href="/about" >Yöndendirme Link denemesi</Link> normal html deki gibi href kullanıyoruz aynı şekilde " " larla değil obje olarak da sayfaları çağırabiliriz.
//<Link href={{pathname:"about"}} >Yöndendirme Link denemesi 1</Link> <br/> şeklinde de yönlendirme yapabiliriz.
//query olaylarını da <Link href="/about?name=berkant"> Yöndendirme Link denemesi </Link> şeklinde yazarak name alanları berkant olarak gözükecektir. Bu şekilde de sayfalarımızı yönlendirebiliriz. Bunu sağlayan yapı ? işareti ve arkaasından gelen şeylerdir.
//<Link href="/about?name=berkant&surname=kaya" >Yöndendirme Link denemesi 2</Link><br/> //çoklu query yönlendirmelerinide bu şeklide yapabliriz
// queriy olayını obje şeklinde <Link href={{pathname:"about", query:{name:"berkant"}} >Yöndendirme Link denemesi 3</Link> şeklinde kullanarak da yapabiliriz.
//çoklu queriy olayını obje şeklinde kullanmak istersem <Link href={{pathname:"about", query:{name:"berkant" ,surname:kaya}} >Yöndendirme Link denemesi 3</Link> şeklinde kullanabilirim. 

//Image
//Normal html deki gibi <img src="" /> kullanabiliriz ama next.js in bize tavsiyesi Image kullanmak. Image kullanırsak sayfamız daha üst sıralarda çıkar ve senkrinazsyonu da artar.

//!! Biz eğer dosyalarmızı arasına yüklediğimiz bir dosyayı çağırıyorsak bizim herhangi bir parametre kullanmamız gerekmez ama biz internet üzerinden bir fotoğraf çekiyorsak width ve height değerlerini kullanmamız gerekir. Ayrıca internet üzerinden çektiğimiz fotoğrafların protokolü olduğu için onları bizim next.config.js dosyasında belirtmen lazım. Onu da aşağıdaki gibi kullanıyoruz.
/*
   images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.pexels.com',
      port: '',
      pathname: '/photos/12825186/pexels-photo-12825186.png',
    },
  ],
}
*/
// Eğer biz width ve height değerlerini kullanmak istemiyorsak en azından fill değerini kullanmamız gerekir. Fill kullanırsak sayfanın tamamını kaplar. Biz Image yi bir divle sarmalayarak revize etmemiz işimize yarayabilir.

