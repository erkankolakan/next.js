import React from 'react'


    const fetchPost = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        return res.json();
    }


const Page = async({params}) => {

    const data = await fetchPost();

    console.log(data)

  return (
    <div>
      bu sayfa id sayfası
    </div>
  )
}

export default Page
    //biz aslında burda sayfa yüklendiği zaman fetchpost içerisindeki tüm veriler çektim.
    //bu yapının sürekli kullanılması tabiki önerilmiyor blog sayfamız varsa veya sürekli detaylarına inilicek bir sayfamız varsa bu şekilde kullanıyoruz.
export async function generateStaticParams(){
    const posts = await fetchPost();
    return posts.map(post => ({id : post.id.toSitring}))
    //bu kısımda mecbur bir şekilde post altından gelen id leri dizi halinde id ye çevirirken gelen yapıları string yapıya çevirmemiz lazımm, yoksa sayfa hata veriri
}
