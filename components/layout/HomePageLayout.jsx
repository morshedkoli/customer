import Footer from "../Footer";
import Navbar from "../Navbar";

export default function HomePageLayout({ children }) {
  return (
    <>
      <Navbar />

      <div className="p-5">{children}</div>
      <Footer />
    </>
  );
}
