import React from 'react'

const Page = () => {
  return (
    <div>
      page
    </div>
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

//Artık biz 