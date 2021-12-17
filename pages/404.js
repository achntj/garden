import Link from "next/link";
import Empty from "../components/Empty";

export default function Custom404() {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <p>
        That page doesn&lsquo;t exist🙀. You can try again by going{" "}
        <Link href="/">back to the homepage</Link>.
      </p>
      <img src="/images/404.gif" alt="Error Image" style={{ width: "400px" }} />
    </>
  );
}

Custom404.getLayout = function getLayout(Custom404) {
  return <Empty>{Custom404}</Empty>;
};
