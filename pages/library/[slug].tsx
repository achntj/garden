import { allLibrarydocs } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

// import 'prismjs/themes/prism-tomorrow.css'

import ImageComp from "../../components/ImageComp";
import Base from "components/Base";
import Container from "components/Container";

const MDXcomponents = {
  // Image: ImageComp,
  ImageComp,
};

export default function LibrarydocPage({ librarydoc }) {
  const MDXComponent = useMDXComponent(librarydoc.body.code);
  return (
    <>
      <Container
        title={librarydoc.title}
        description={librarydoc.description}
        image={librarydoc.cover}
      >
        <article>
          <div>
            <h1>{librarydoc.title}</h1>
            <p className="flex justify-between">
              <span>{librarydoc.date}</span>
              <span>{librarydoc.location && librarydoc.location}</span>
            </p>
          </div>
          <div className="entry">
            <MDXComponent components={MDXcomponents} />
          </div>
        </article>
      </Container>
    </>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: allLibrarydocs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const librarydoc = allLibrarydocs.find((p) => p.slug === params.slug);
  return {
    props: {
      librarydoc,
    },
  };
};
