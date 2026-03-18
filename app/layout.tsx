import "./globals.css";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "QuickStep Computer Center | All Courses One Institute",
  description:
    "Best training institute in R.T Nagar Bangaluru We are into Training & Placements. Civil-Architectural CAD, Mechanical CAD, Electrical CAD, Interior Design, SAP,HANA,SuccessFactors,NLP, Python, R-Programming , Machine Learning, Artificial Intelligence, Web Development, Data Science, Data Analytics, DEV-OPS,C,C++,Java-J2EE,.NET,MVC,Software Testing,Selenium,RPA,H.R Training,IT Professionals , Tally Erp 9 GST, Advance Excel, Mis, Spoken English, Foreign Languages, IELTS, Etc Many more.",
};

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
        <Footer />
      </body>
    </html>
  );
}