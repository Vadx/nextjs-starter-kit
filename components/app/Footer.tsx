interface FooterProps {
  
}
 
const Footer = () => {
  return (
    <footer>
      <div className="max-w-8xl max-w-8xl mx-auto">
        <div className="mb-6 sm:mb-0 sm:flex">
          <p>Copyright © 2023</p>
          <p className="pt-10 pb-28 border-t border-slate-200 sm:flex justify-between text-slate-500 dark:border-slate-200/5">
            Theme Policy
          </p>
        </div>
        <div className="">Right</div>
      </div>
    </footer>
  );
}
 
export default Footer;