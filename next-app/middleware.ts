
export { default } from 'next-auth/middleware';



export const config = {
  // * zero sau mai multe
  // + una sau mai multe
  //? zero sau una
  matcher: ['/dashboard/:path*']
}