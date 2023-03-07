import Link from "next/link";
import Logo from "./Logo";

interface HeaderProps {
  
}
 
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header--inner">
          <Link href='/'  className="logo">
            <Logo logoSize={22} logoColor='#2e2e2e'>Logo</Logo>
          </Link>
          <nav>
            <Link href="/" className="text-sm font-semibold leading-6 text-gray-900">
              Home
            </Link>
            <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900">
              About
            </Link>
            <Link href="/components" className="text-sm font-semibold leading-6 text-gray-900">
              Components
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
 
export default Header;