export interface HeroData {
  subtitle: string;
  title: string;
  tagline: string;
  buttons: Array<{
    label: string;
    link?: string;
    outline?: boolean;
  }>;
}

export const heroData: HeroData = {
  subtitle: "✨ The Accelerator That Ships!",
  title: "HACK THE LEAGUE",
  tagline: "FOUNDATION",
  buttons: [
    {
      label: "Apply Now",
      link: "https://t.me/hacktheleague",
      outline: true,
    },
  ],
};

