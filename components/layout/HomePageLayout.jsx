import Footer from "../Footer";
import Navbar from "../Navbar";

export default function HomePageLayout({ children }) {
  return (
    <div className="w-full h-screen relative">
      <Navbar />

      {children}
      <div className="flex justify-center absolute bottom-1 w-full ">
        <div className="container">
          <Footer />
        </div>
      </div>
    </div>
  );
}
