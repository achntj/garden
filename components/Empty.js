// components/Empty.js

export default function Layout({ children }) {
  return (
    <>
      <div id="main" role="main" className="container">
        {children}
      </div>
    </>
  );
}
