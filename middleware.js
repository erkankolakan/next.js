import { NextResponse } from 'next/server'
 
export function middleware(request) {
    console.log(NextResponse,"NextResponse" )
  return NextResponse.redirect(new URL('/erkan', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/about/:path*' , '/dahs']

//sen bir tane middleware oluşturdun bunları hangi sayfada kullanmak istiyorsun ? 
// mesela about sayfasında ve dash sayfalarında çalışacak. Eğer :path* yazmazsak sadece about sayfasında çalışacak ama biz :path* yazarsak about sayfasında ve altında ki tüm sayfalarda çalışacak.
}

/*
redirect() - NextResponse yönlendirme kümesiyle a döndürü.

rewrite() - NextResponse yeniden yazma kümesiyle a döndürü.

next() - NextResponse ara yazılımı zinvirini devam etttirecek bir a döndürür
*/ 