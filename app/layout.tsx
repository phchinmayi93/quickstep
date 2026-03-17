import "./globals.css";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactInfoSection from "@/components/ContactInfoSection";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#fefefe]">
        <Topbar />
        <Navbar />
        {children}
      
       <Footer/>
      </body>
    </html>
  );
}
