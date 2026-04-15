import { useEffect } from "react";
import { useRouter } from "next/router";

export default function PrivacyIndex() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/imgzen/privacy/en");
  }, [router]);

  return null;
}
