import Link from "next/link";

interface FooterProps {
  
}
 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="mt-6 sm:mb-0 sm:flex">
          <p>Copyright © 2023</p>
          <Link href='/'>Theme Policy</Link>
          <Link href='/about'>About</Link>
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;