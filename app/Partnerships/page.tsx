"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Partner = () => {
  const router = useRouter();

  useEffect(() => {
    // Define the link to navigate to
    const partnerLink =
      "https://nervous-alibi-0f3.notion.site/2025-HTL-Partnership-1c958377681c80fba75ee5810d9dd01a?pvs=73";

    // Redirect the user
    router.replace(partnerLink);
  }, [router]);

  return null; // Optionally, you can show a loading spinner here
};

export default Partner;
