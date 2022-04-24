import Base from "./Base";

function PageLayout({ children, ...pageProps }) {
  return (
    <>
      <Base title={pageProps.title} description={pageProps.description}>
        <article>
          <h1>{pageProps.title}</h1>

          <div className="page-entry">{children}</div>
        </article>
      </Base>
    </>
  );
}

export default PageLayout;
