import React from 'react'

const Layout = ({children}) => {
  return (
    <html lang='en'>
        <body>
          <header>BU KISIM HEADER</header>
            {children}
          <footer>BU KISIM FOOTER</footer>
        </body>
    </html>
  )
}

export default Layout

//bu kısım tamamiyle sarmalama işlemlerini yapabilmesi için kullanılan bir sayfa
/*

Next.js'te layout sayfaları, web uygulamanızdaki tüm sayfalar için ortak bir görünüm ve his sağlamak için kullanılır. Layout sayfaları, sayfa başlıkları, altbilgileri, kenar çubukları ve diğer ortak öğeleri içerebilir. Layout sayfaları, sayfalarınızın daha tutarlı ve profesyonel görünmesini sağlar.

 Bizim react da headerı footerı roouter üzerine kodyuğumuz düzen burada daha kolay. Direk sayfayı çağırak body içerisine yazmamız yeterli.

*/