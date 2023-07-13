import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="bg-n950">{children}</main>
      <Footer />
    </div>
  );
}
