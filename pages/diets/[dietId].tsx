import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const DietsShowPage: NextPage = () => {
  const router = useRouter();
  const { dietId } = router.query;
  console.log(dietId);
  return (
    <div className="">
      <h1>Diets page</h1>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </div>
  );
};

export default DietsShowPage;
