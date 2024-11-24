"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Branding = () => {
  const router = useRouter();

  useEffect(() => {
    // Define the link to navigate to
    const brandingLink =
      "https://drive.google.com/drive/folders/13DKRXJyan2MVMaCwLFMQHP1hHQ6RBSfv?usp=drive_link";

    // Redirect the user
    router.replace(brandingLink);
  }, [router]);

  return null; // Optionally, you can show a loading spinner here
};

export default Branding;
