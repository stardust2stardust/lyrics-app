import Image from "next/image";
import noteIcon from "../../public/note.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-n950 flex justify-between items-center p-3 text-primary font-bold border-b-2 border-primary">
      <div>
        <Image
          src={noteIcon}
          alt=""
        />
      </div>
      <Link href="/">New Search</Link>
    </nav>
  );
};

export default Navbar;
