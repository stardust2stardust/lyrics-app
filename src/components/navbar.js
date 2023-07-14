import Image from "next/image";
import noteIcon from "../../public/note.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-n950 flex justify-between items-center p-2 px-5 text-primary font-bold border-b-2 border-primary">
      <Link href="/">
        <Image
          src={noteIcon}
          alt=""
        />
      </Link>
      <Link href="/">New Search</Link>
    </nav>
  );
};

export default Navbar;
