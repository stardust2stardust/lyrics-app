import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-n950">
      <Navbar />
      <main className="bg-n950 min-h-[80vh]">{children}</main>
      <Footer />
    </div>
  );
}
