interface HeaderProps {
  
}
 
const Header = () => {
  return (
    <header
      className="sticky top-0 z-50 flex flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8 dark:bg-transparent"
    >
      <div className="max-w-8xl max-w-8xl mx-auto">
        Header
      </div>
    </header>
  );
}
 
export default Header;