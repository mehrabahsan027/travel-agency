import {  Volkhov,Poppins} from "next/font/google";
import "./globals.css";


export const volkhov = Volkhov({
  variable: "--font-volkhov",
  subsets: ["latin"],
  weight: ['400',  '700'],
});

export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
});




export const metadata = {
  title: "Travel Agency --Jadoo",
  description: "Travel Agency Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased  
         

          
          
          `}
      >
        <main>
        {children}
        </main>
       
      </body>
    </html>
  );
}
