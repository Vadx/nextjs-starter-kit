import Link from "next/link";

interface HeaderProps {
  
}
 
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header--inner">
          <Link href='/'  className="logo">Logo</Link>
          <div>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Home
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              About
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Components
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
 
export default Header;