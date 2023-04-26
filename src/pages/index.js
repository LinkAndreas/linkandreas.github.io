import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /articles
    router.push('/articles');
  }, [router]);

  return null;
}