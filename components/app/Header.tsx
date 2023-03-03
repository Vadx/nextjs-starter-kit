interface HeaderProps {
  
}
 
const Header = () => {
  return (
    <header
      className="header"
    >
      <div className="max-w-8xl max-w-8xl mx-auto">
        <span className="logo">Logo</span>
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
    </header>
  );
}
 
export default Header;