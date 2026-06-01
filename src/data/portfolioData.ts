import { th1Img, th3Img, th4Img, th5Img, th6Img, th7Img, th8Img, th9Img, th10Img, th11Img, th12Img, th13Img, th14Img, th15Img, th16Img, th17Img, th18Img, th19Img, th21Img, th22Img, th23Img, th24Img, th25Img, th26Img, th27Img, th28Img, th29Img, th30Img, th31Img, th32Img } from "../utils";

export interface PortfolioItem {
  id: number
  title: string
  category: string | false
  imageUrl: string
  aspect?: "portrait" | "landscape";
  description?: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Podcast",
    category: "Thumbnails",
    imageUrl: th14Img,
    description: "Eye-catching thumbnail design for podcast content creators.",
    aspect: "landscape"
  },
  {
    id: 2,
    title: "Free Fire Live",
    category: "Thumbnails",
    imageUrl: th6Img,
    description: "Complete brand identity including logo, color palette, and typography.",
    aspect: "landscape"
  },
  {
    id: 3,
    title: "Expedition 33",
    category: "Thumbnails",
    imageUrl: th9Img,
    description: "Engaging social media graphics designed for maximum impact.",
    aspect: "landscape"
  },
  {
    id: 4,
    title: "Neymar Jr.",
    category: "Posters",
    imageUrl: th8Img,
    description: "User interface design for a mobile gaming application.",
    aspect: "portrait"
  },
  {
    id: 5,
    title: "iphone 15 vs galaxy S24",
    category: "Thumbnails",
    imageUrl: th16Img,
    description: "Dynamic logo design for a professional esports team.",
    aspect: "landscape"
  },
  {
    id: 6,
    title: "Inspirational",
    category: "Thumbnails",
    imageUrl: th24Img,
    description: "Custom channel art for gaming YouTube channel.",
    aspect: "landscape"
  },
  {
    id: 7,
    title: "Bhaivalry",
    category: "Posters",
    imageUrl: th5Img,
    description: "Custom channel art for gaming YouTube channel.",
    aspect: "portrait"
  },
  {
    id: 8,
    title: "Education Scam",
    category: "Thumbnails",
    imageUrl: th26Img,
    description: "Custom streaming overlay with alerts and screens.",
    aspect: "landscape"
  },
  {
    id: 9,
    title: "Celebrity Story",
    category: "Thumbnails",
    imageUrl: th27Img,
    description: "Original character design for gaming content.",
    aspect: "landscape"
  }, 
  {
    id: 10,
    title: "Minecraft",
    category: "Thumbnails",
    imageUrl: th28Img,
    description: "Eye-catching thumbnail design for podcast content creators.",
    aspect: "landscape"
  },
  {
    id: 11,
    title: "Free Fire Gameplay",
    category: "Thumbnails",
    imageUrl: th29Img,
    description: "Complete brand identity including logo, color palette, and typography.",
    aspect: "landscape"
  },
  {
    id: 12,
    title: "Educational Video",
    category: "Thumbnails",
    imageUrl: th30Img,
    description: "Engaging social media graphics designed for maximum impact.",
    aspect: "landscape"
  },
  {
    id: 13,
    title: "Documentry",
    category: "Thumbnails",
    imageUrl: th31Img,
    description: "User interface design for a mobile gaming application.",
    aspect: "landscape"
  },
  {
    id: 14,
    title: "Call of Duty",
    category: "Thumbnails",
    imageUrl: th32Img,
    description: "Dynamic logo design for a professional esports team.",
    aspect: "landscape"
  },
  {
    id: 15,
    title: "Exposing Sharks",
    category: "Thumbnails",
    imageUrl: th25Img,
    description: "Illustrated cover art for an indie game.",
    aspect: "landscape"
  },
  // {
  //   id: 16,
  //   title: "Restaurant",
  //   category: "Logo",
  //   imageUrl: th18Img,
  //   description: "Illustrated cover art for an indie game."
  // },
  // {
  //   id: 17,
  //   title: "Podcast",
  //   category: "Thumbnails",
  //   imageUrl: th12Img,
  //   description: "Illustrated cover art for an indie game."
  // },
  {
    id: 19,
    title: "Football",
    category: "Thumbnails",
    imageUrl: th21Img,
    description: "Illustrated cover art for an indie game.",
    aspect: "landscape"
  },
  // {
  //   id: 19,
  //   title: "Plane Crash",
  //   category: "Thumbnails",
  //   imageUrl: th23Img,
  //   description: "Illustrated cover art for an indie game."
  // },
  // {
  //   id: 19,
  //   title: "",
  //   category: false,
  //   imageUrl: "",
  //   description: "Illustrated cover art for an indie game."
  // },
  // {
  //   id: 20,
  //   title: "Restaurant",
  //   category: "Logo",
  //   imageUrl: th19Img,
  //   description: "Illustrated cover art for an indie game."
  // },
  // {
  //   id: 21,
  //   title: "Free Fire",
  //   category: "Thumbnails",
  //   imageUrl: th22Img,
  //   description: "Illustrated cover art for an indie game."
  // }
]