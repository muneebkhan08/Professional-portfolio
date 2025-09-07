// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import StarsCanvas from "@/components/sub/StartBackground";
// import Navbar from "@/components/sub/Navbar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Portfolio",
//   description: "This is my portfolio",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030014] overflow-y-scroll overflow-x-hidden`}
//       >
//         <StarsCanvas />
//         <Navbar />
//         {children}
//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/sub/StartBackground";
import Navbar from "@/components/sub/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased 
          bg-[#030014] 
          overflow-y-scroll 
          overflow-x-hidden
          relative
        `}
      >
        {/* Place StarsCanvas behind everything with a negative z-index and disable pointer events */}
        <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
          <StarsCanvas />
        </div>

        <Navbar />
        {children}
      </body>
    </html>
  );
}
