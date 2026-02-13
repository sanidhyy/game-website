import { FaDiscord, FaTwitch, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const NAV_ITEMS = [
  { label: "TRAILER", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Nexus", href: "#nexus" },
  { label: "Story", href: "#story" },
  { label: "Contact", href: "#contact" },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/game-website",
} as const;

export const SOCIAL_LINKS = [
  {
    href: "https://discord.com",
    icon: FaDiscord,
  },
  {
    href: "https://x.com/_sanidhyy",
    icon: FaXTwitter,
  },
  {
    href: "https://youtube.com",
    icon: FaYoutube,
  },
  {
    href: "https://twitch.com",
    icon: FaTwitch,
  },
] as const;

export const VIDEO_LINKS = {
  feature1:
    "https://93w95scdts.ufs.sh/f/AOfILeWJzqCc56aV03LYRyJDZsOPGdFTt0lQuHLkeqjKCao1",
  feature2:
    "https://93w95scdts.ufs.sh/f/AOfILeWJzqCclcn5JiTo8NUtBfpgkOmXZ2CT3DjMr19Yqlac",
  feature3:
    "https://93w95scdts.ufs.sh/f/AOfILeWJzqCcbZvH6O7fXDrfMZ6S457EQsgoxTCIz1kjlnVd",
  feature4:
    "https://93w95scdts.ufs.sh/f/AOfILeWJzqCcSrGHFCyiMbxBtTacUmFzn4dZpwVYNfvR6WLg",
  feature5:
    "https://93w95scdts.ufs.sh/f/AOfILeWJzqCc1qT68sSEu6tgkCBNP3FH45AUe70hrbTaxYDm",
  hero1:
    "https://93w95scdts.ufs.sh/f/AOfILeWJzqCc5wEKtxLYRyJDZsOPGdFTt0lQuHLkeqjKCao1",
  hero2:
    "https://93w95scdts.ufs.sh/f/AOfILeWJzqCcLjP2Y7QEQuN5THDwzeBx4OvmaFZjP6ysCKk3",
  hero3:
    "https://93w95scdts.ufs.sh/f/AOfILeWJzqCcpmpmzmuj1IHWSEokgRuN2hMcUpBq0xQery3i",
  hero4:
    "https://93w95scdts.ufs.sh/f/AOfILeWJzqCcpB0GHsouj1IHWSEokgRuN2hMcUpBq0xQery3",
};
