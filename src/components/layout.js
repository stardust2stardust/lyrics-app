import Header from "./Header";
import SearchForm from "./SearchForm";

export default function Layout({ children }) {
  return (
    <div className="text-primary flex flex-col gap-8 md:px-12 px-0 relative bg-background font-poppins items-center min-h-screen">
      <Header />
      <SearchForm />
      <main>{children}</main>
    </div>
  );
}
