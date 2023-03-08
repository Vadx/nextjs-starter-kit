import Link from "next/link";

interface FooterProps {}

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer--inner">
          <p>Copyright © 2023</p>
          <nav>
            <Link href="/">Theme Policy</Link>
            <Link href="/about">About</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
