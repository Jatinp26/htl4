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
  subtitle: "✨ Prepare to Build Beyond, Coming Soon!",
  title: "HACK THE LEAGUE",
  tagline: "BUILD BEYOND",
  buttons: [
    { label: "Pre-Register",
      link: "https://lu.ma/8b7l8fkz",
    },
    {
      label: "Join Discord",
      link: "https://discord.com/invite/fxP5t2w2b9",
      outline: true,
    },
  ],
};

