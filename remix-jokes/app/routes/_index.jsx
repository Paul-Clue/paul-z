// import { LinksFunction } from "@remix-run/node";
// import { links } from '@remix-run/node';
import stylesUrl from "~/styles/index.css";

 const LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export function Links() {
  const linksArray = LinksFunction();

  return (
    <>
      {linksArray.map((link, index) => (
        <link key={index} rel={link.rel} href={link.href} />
      ))}
    </>
  );
}

 export default IndexRoute = () => {
  return <div>Hello Index Route</div>;
}
