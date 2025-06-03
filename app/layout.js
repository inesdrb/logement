import Footer from "./components/footer";
import Header from "./components/header";
import NavBar from "./components/navbar";
import "./globals.css";
import { Itim, Montserrat, Open_Sans } from 'next/font/google';

const itim = Itim({ subsets: ['latin'], weight: '400', variable: '--font-itim' });
const montserrat = Montserrat({ subsets: ['latin'], weight: '400', variable: '--font-montserrat' });
const openSans = Open_Sans({ subsets: ['latin'], weight: '400', variable: '--font-opensans' });

export const metadata = {
  title: "LocaTunisie",
  description: "Louez facilement des logements partout en Tunisie, à petits prix et en toute confiance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${itim.variable} ${montserrat.variable} ${openSans.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
