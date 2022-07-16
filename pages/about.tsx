import type { NextPage } from "next";
import Link from "next/link";

const About: NextPage = () => {
  return (
    <>
      <h1>About</h1>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </>
  );
};

export default About;
