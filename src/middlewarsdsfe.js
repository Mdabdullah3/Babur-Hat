// import { NextResponse } from 'next/server';
// import axios from 'axios';
// import { API_URL } from "./config"
// export async function middleware(request) {
//     const sessionCookie = request.cookies.get('session');
//     let user = null;

//     if (sessionCookie) {
//         try {
//             const response = await axios.get(`${API_URL}/users/me`, {
//                 headers: {
//                     Cookie: `session=${sessionCookie}`,
//                 },
//             });
//             user = response.data.data;
//         } catch (error) {
//         }
//     }

//     const protectedPaths = ['/shipping', '/profile', '/orders'];

//     if (protectedPaths.some(path => request.nextUrl.pathname.startsWith(path)) && !user) {
//         return NextResponse.redirect(new URL('/auth/login', request.url));
//     }

//     if (user) {
//         request.headers.set('x-user', JSON.stringify(user)); // You can use a custom header or other means
//     }

//     return NextResponse.next();
// }

// export const config = {
//     matcher: ['/shipping/:path*', '/profile/:path*', '/orders/:path*'], // Define protected routes
// };
