import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Inter , Roboto } from 'next/font/google'
import {cookies} from 'next/headers'
import { resolve } from 'styled-jsx/css'
import Trial from './trial'
import { redirect } from 'next/navigation'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  //fontun çeşitli özelliklerini vermek durumundayız.
})

const roboto = Roboto({
  weight: '900',
  subsets: ['latin'],
  display: 'swap',
  //her yazı tipi için ayrı bir class oluşturmak gerekiyor. 
})

 // loading sayfasını denemek için bazı kodlar yazıyoruz
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const Page = async() => {
  await sleep(3000)    

  const newCookies = cookies();

  console.log(newCookies.getAll())

  // newCookies.set('kolakan' , 21) şuan nextjs de bu işlemleri yapamıyoruz ama yakında gelecek.
 
  console.log("erkan") //webdeki  consolede gözükmezken vscodeki console de gözükür.


  //redirect işlemleri, burdaki amaç belirli birşey olduğu zaman otomatik bir şekilde sayfa yönlendirmesi olması. Mesela bu örnekte nav1 ture olduğu zaman otomatik olarka erkan sayfasına gidecek. Redirectto bir buttona tıklandığı zaman sayfa yönlendirmesi yapmaya kalkarsak hata ile karşılaşırız. Bir buttona tıklandığı zamana yönlendirme işlemleri useRouter altında inceleyeceğiz. 

  let nav1 = false; //burayı true yaparsam sayfa yüklendiği zaman otomatik bir şekilde erkan sayfasına gider. 

  if(nav1){
    redirect("/erkan") 
  }



  // fetch data işlemleri
  const fetchData = async () => {
    const res = await fetch('https://restcountries.com/v3.1/name/eesti')
    return res.json(); //mutlaka gelen veriyi return etmek zorundayız.
  }

  const fetchData2 = async () => {
    const res2 = await fetch("https://restcountries.com/v3.1/name/deutschland")
    return res2.json();
  }


  // const data = await fetchData();
  // const data2 = await fetchData2();
  // /*
  //   Çoklu veri çekme işlemlerinde sıkıntı olan şey biz await yazdığımız için data verisi çekilmeden data2 verisi alınmıyor.
  // */

  const data = fetchData();
  const data2 = fetchData2();



  const resultData = await Promise.all([
    data,
    data2
  //çoklu veri çeklme işlemlerinde promise kullanmak aşırı derecede avantaj içermekte.
  ])

  // console.log(data, "data")
  console.log(resultData, "resultData")
  



  return (
    <>
      <Link href="/about" className={inter.className} >Yöndendirme Link denemesi</Link> <br/>
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

----------------------------------------------------------------------------------------------------------
      <Image
      src="https://images.pexels.com/photos/12825186/pexels-photo-12825186.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      width={400} height={400} />

{/* <Image
      src="https://images.pexels.com/photos/12825186/pexels-photo-12825186.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      fill /> */}

----------------------------------------------------------------------------------------------------------
    <div className={inter.className}>Inter yazı tipi</div>
  
    <div className={roboto.className}>Roboto yazı tipi</div>

----------------------------------------------------------------------------------------------------------

<Trial/>


    </>
  )
}

export default Page

//page.js ve layout.js dosyaları nextjs e özgü dosyalandırma ismidir değiştirilemez.

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

//Font ve cookies kullanımı
/*
FONT kullanımı

  import { Inter , Roboto } from 'next/font/google' 
  
  const roboto = Roboto({
  weight: '900',
  subsets: ['latin'],
  display: 'swap',
  //her yazı tipi için ayrı bir class oluşturmak gerekiyor. 
})
üsteki gibi import etmeli ve class oluşturmalı ve daha sonra aşağıdaki gibi kullanmalıyız.

  <div className={inter.className} >Falan Filan</div>

COOKİES kullanımı
  cookie localstorageden daha kullanışlı olduğu için kullanmak istiyoruz.
  bizim cookiesleri kullanmak için ilk önce impoprt etmeli daha sonra başka bir değişkene atamalı, daha sonra da değişken değeri üzerinden değer çekmeli veya göndermeliyiz.

  import {cookies} from 'next/headers'

   const newCookies = cookies();
  
  console.log(newCookies.getAll())

getAll() dersek tüm cookiesileri getirir. Sadece cookieslerden birini seçmek istersek. 
  console.log(newCookies.get(xxxxx)) yazmamız yeterli olacaktır.
  console.log(newCookies.get(xxxxx).value) yazmamız da bize value değerini verecektir.

  set işlemleri de aşağıdaki gibi yapılıyor.

  newCookies.set("xxx", 20) yazarsak biz cookies kısmına 20 değerine sahip xxx değerini göndericektim.

*/

/*
 layout.js LAYOUT.JS LOADİN.JS  NOT-FOUND.JS HEAD.JS

bunlarda yine page.js ve layout.js gibi nextjs e özgü dosya isimleri değiştirelemez yapıdalar.

Biz reactta header ve footer ı herzaman sayfanın en üstünde görünsün diye roouter kısmında en süte koyuyorduk fln filan burda bu düzeni layout sayfasında sağlıyoruz.

const Layout = ({children}) => {
  return (
    <html lang='en'>
        <body>
          <header>BU KISIM HEADER</header> !!!
            {children}
          <footer>BU KISIM FOOTER</footer> !!!
        </body>
    </html>
  )
}

! koyduğum yerlere componenet çağırsakda olur.

  loading.jsx
  loading sayfasını açmak ve sadece içerisine sayfa yüklendiği zaman gösterilecek olan şeyleri yazacak olman yeterli.


  not-found.jsx
  sadece sayfayı açamak ve açılmayan sayfalarda gössterilecek olan şeyi yazman yeterli

  head.jsx
  sayfasını açman ve div yerine title taglarını kullanarak sayfanın başlığını belirlemen gerek.
*/

/*
  SSR&CSR 

benmim web sayfam serverde çalıştığı için ordaki console ekranında console.log yaptığım değerleri okutamam ama burdaki console ekranında console.log dediğim şeyleri okutabilirim.

!! ben app altında hangi dosyayı oluşturursam oluşturayım bu dosya server tabanlı olmakta. Yani server side readingi desteklemekte.
server side reading kullanmak istemediğim durumlarda. useClide() parametresini kullanıyoruz.

*/

/*
   Redirect, useRouter, useSearchParams, usePathname

   REDİRECT
  Bunun amacı sayfa üzerinde yönlendirmeler yapmak. Redirect kulanabilemk için sitenin server side de çalışması lazım. Nextjs de zaten bize bunu sağlıyordu. O yüzden bizim işimize yaran bir durum.
  redirectin  import etmesi aşağıdaki gibi.
    import { redirect } from 'next/navigation'

*/

/*

  USEROUNTER (bu kısım trial sayfasında anlatıcak)
Redirect gibi otomatik yönlendirmenin aksine bazi tıklamalar tetiklenmeler sonucu yönlendirme işlemleri için kullanılır.
Özetle eğer bir butonumuz varsa ve tıklandıktan sonra başka sayfaya yönlendirme yapılamsını istiyorsak useRounter kullanıyoruz.
İmport etme işlemi redirect gibi " import { useRouter } from 'next/navigation' " şeklinde import edilir. 

  useRouter in 4 tane parametresi vardır.
  push, refresh, back, forvırt

  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  Eğer ben bir sayfada useRouter kullanacaksam o sayfada clinetside işlemlerini yapılması gerekiyor. Bu oldukça önemlidir.
  Bir sayfası clientside yapmak da oldukça kolay zaten, sadece sayfanın en üstüne "use client" yazmamız yeterli.
  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    push beni farklı bir sayfaya yönlendirir.
    back aslında geri butonu yönlendirildiğin sayfanan geri geliyorsun.
    forward bir ileri sayfaya gidiyorsun
    refresh sayfayı yeniler. Klavyedeki F5 görevini görür.

*/

/*
  USESEARCHPARAMS (about/page sayfasında anlatımını yaptım)
  url üzerinden gelen bilgileri teker teker parçalayarak kullanmamızı sağlar. Oldukça öenmli yapıdır aslında.
  bununda importu diğerlerininki gibi " import { useRouter } from 'next/navigation' "

  import { useRouter } from 'next/navigation'

  const searchParams = useSearchParams();
  const name = searchParams.get("name") 
  // ben aslında şuan linkteki name keyine sahip olanın value değerini alıyorum.
  
  console.log("url deki name nin value değeri",name)

  temel iskelet yapıları bu şekilde.
*/



/*

  USEPATHNAME (about/page sayfasında anlatımını yaptım)
usePathName yönlendirildiğimiz sayfanın pathname sini almamızı sağlar mesela.
localhosr:3000/about?asdaadasd/22a545 yazabilir ama pathname sadece about kısmını alır. Onu da diğerleri gibi 
import { usePathname } from 'next/navigation' şeklinde çağırıyoruz.

  temel açıdan kullanımı aşağıdaki gibi 


  import { usePathname } from 'next/navigation'

  const pathname = usePathname()
  
  console.log(pathname)

*/

/*
    Data Fetching işlmeleri
    React da normalde data çekerken useEffect useState fln kullanırken Nextjs kullanırken bunları kullanamayız ya da kullanmak istersek kullanacağımız şeyler use ile başladığı için sayfanın en başına " use client " yazmamız gerekir.

    const fetchData = async () => {: Bu satır, "fetchData" adında bir isim verilmiş bir asenkron fonksiyon (async function) tanımlar. Asenkron fonksiyonlar, içlerinde "await" anahtar kelimesi kullanılarak beklenen bir işlemin tamamlanmasını beklemek için kullanılır. "async" anahtar kelimesi ise fonksiyonun asenkron olduğunu belirtir.



    nextjs de veri çekmek.

    ++tek bir tane linkden veri çekerken bu şekilde ver çekiyoruz

    const fetchData = async () => {
    const res = await fetch('https://restcountries.com/v3.1/name/eesti')
    return res.json(); //mutlaka gelen veriyi return etmek zorundayız.


    const data = fetchData();


    ++birden fazla linkden veri çekerken üstekine artı olarak Promise kullanarak çekiyoruz ki await yapıları bir birini beklemesin.

    const data = fetchData();
    const data2 = fetchData2();



  const resultData = await Promise.all([
    data,
    data2
  //çoklu veri çeklme işlemlerinde promise kullanmak aşırı derecede avantaj içermekte.
  ])

  }

*/

/*
  
    generateStaticParams()
  Bu yapının amacı web sitenin sağlıklı çalışması amacıyla yapılmıştır. Daha hızlı çalışması sağlar. Çekilen verinin tekrar tekrar çekilmeisini engeller.
  Yani biz bir ürünün detaylar sayfasına gittik ve veri çektik bu çektiğimiz veri generateStaticParams() sayesinde çekilen veri html olarak static bir şekilde kaydedildi. Biz daha sonra aynı ürünün detaylar sayfasına gidersek bu kaydedilen html verisi üzerinden verileri kullacak yani biz aynı sayfa için tekrar tekrar veri çekmek zorunda kalmayacağız. 

  ! Bu yapının kullanımı app/id/page sayfasında anlatıldı.
*/

/*
    API Routes
  api routes oluşturmak istiyorsam app altında api adında bir klasör oluşturmam gerekir. Daha sonra ben postlarla alakalı routes yapmak istiyorsam post adında bir klasör oluşturup render olmasını sağlayan yapılarıda index.jsx olarak belirtmeliyim.

  bu konu anlaşılmadı, next.js inşa aşamasında olduğu için eski yöntemle yapılıyordu. Yeni yöntem geldiği zaman bu kısım güüncellenecek.

*/


/*
    Middleware
  middleware aslında örnekle açıklayacak olursak bir sayfa girdiğimiz zaman login yapmadan ürünleri gezebiliyoruz ama iş ödeme kısmına geldiği zaman login yapmamızı isteyen bir olay.

  middleware yi kullanmak için nextjs bize klasör altında middleware.js adında bir sayfa açmamızı ister. Busayfa bir tane request ister.
  Aslında backend kısmından bir token alırız middleware ara katman olarak gelir biz ödeme yaparken bir tokene sahipsek ödeme işleminin devam etmesinei eğer tokene sahip değilsek otomatik olarka yönlendirme işleminin yapılmasını sağlar. 

*/


/*
    Environment + ModuleCSS

    Next.js de modue css kullanıldığı için css sayfalarını
    -> page.module.css
    olarak açıyoruz.
    bir sayfaya import edeceğimiz zaman da
    -> import styles from './page.modules.css'
    şeklindecağırıyoruz. Next.js de artık class ların içerisine isim vermektense importda yazdığımız styles leri yazıyoruz. className={styles.container} şeklinde kullanıyoruz.
    !! biz css isimlerinide - kullanamyız. örneğin className={styles.container-one} şeklinde kullanırsak hata alırız. Eğer illa bu şekilde kullanmak istersek şağakıdaki şekilde kullanabiliriz.
    className={styles["container-one"]} eğer biz birden fazla class name kullanmak istersek.
    <div className={`${styles["container-one"]} ${styles["lg-size"]}`}> asdasdasd </div> bu şekilde kullanmamız gerekir.
  
*/