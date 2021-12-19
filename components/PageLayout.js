import Base from "./Base";

function PageLayout({ children, ...pageProps }) {
  return (
    <>
      <Base title={pageProps.title} description={pageProps.description}>
        <article className="page">
          <h1>{pageProps.title}</h1>

          <div className="entry">{children}</div>
        </article>
      </Base>
    </>
  );
}

export default PageLayout;
