// pages/sponsor.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Sponsor = () => {
  const router = useRouter();

  useEffect(() => {
    // Define the link to navigate to
    const sponsorLink = 'https://nervous-alibi-0f3.notion.site/Hack-The-League-4-Sponsorship-Prospect-3c82598c714a429986e7632da50cb1c5?pvs=4';

    // Redirect the user
    router.replace(sponsorLink);
  }, [router]);

  return null; // Optionally, you can show a loading spinner here
};

export default Sponsor;
