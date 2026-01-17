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
  subtitle: "✨ Launchpad to BUIDL & Ship!",
  title: "HACK THE LEAGUE",
  tagline: "FOUNDATION",
  buttons: [
    {
      label: "Join Discord",
      link: "https://discord.com/invite/fxP5t2w2b9",
      outline: true,
    },
  ],
};

