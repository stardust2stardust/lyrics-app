import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="bg-n950">{children}</main>
      <Footer />
    </div>
  );
}
