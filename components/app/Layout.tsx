
import { WithChildren } from "@/types/common";
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps extends WithChildren {
  siteId?: string;
}
 
const Layout = ({ siteId, children }: LayoutProps) => {
  const title = "Nextjs Starter Kit";
  const description = "A template for site builders with NextJS, TypeScript, TailwindCSS";
  const logo = "/favicon.ico";

  return (
    <>
      <Head>
          <title>{title}</title>
          <link rel="icon" href={logo} />
          <link rel="shortcut icon" type="image/x-icon" href={logo} />
          <link rel="apple-touch-icon" sizes="180x180" href={logo} />
          <meta name="theme-color" content="#000000" />

          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta itemProp="name" content={title} />
          <meta itemProp="description" content={description} />
          <meta itemProp="image" content={logo} />
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={logo} />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@Vadx" />
          <meta name="twitter:creator" content="@Vadx" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={logo} />
      </Head>
      <div>
        <Header />
        <div className="pt-28">{children}</div>
        <Footer />
      </div>
    </>
  );
}
 
export default Layout;