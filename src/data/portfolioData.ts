import { th1Img, th2Img, th3Img, th4Img, th5Img, th6Img, th7Img, th8Img, th9Img, th10Img, th11Img, th12Img, th13Img, th14Img, th15Img, th16Img, th17Img, th18Img, th19Img, th20Img } from "../utils";

export interface PortfolioItem {
  id: number
  title: string
  category: string | false
  imageUrl: string
  description?: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Podcast",
    category: "Thumbnails",
    imageUrl: th14Img,
    description: "Eye-catching thumbnail design for podcast content creators."
  },
  {
    id: 2,
    title: "Free Fire Live",
    category: "Thumbnails",
    imageUrl: th6Img,
    description: "Complete brand identity including logo, color palette, and typography."
  },
  {
    id: 3,
    title: "Expedition 33",
    category: "Thumbnails",
    imageUrl: th9Img,
    description: "Engaging social media graphics designed for maximum impact."
  },
  {
    id: 4,
    title: "Neymar Jr.",
    category: "Posters",
    imageUrl: th8Img,
    description: "User interface design for a mobile gaming application."
  },
  {
    id: 5,
    title: "iphone 15 vs galaxy S24",
    category: "Thumbnails",
    imageUrl: th16Img,
    description: "Dynamic logo design for a professional esports team."
  },
  {
    id: 6,
    title: "Inspirational",
    category: "Thumbnails",
    imageUrl: th15Img,
    description: "Custom channel art for gaming YouTube channel."
  },
  {
    id: 7,
    title: "Exposing Sharks",
    category: "Thumbnails",
    imageUrl: th7Img,
    description: "Illustrated cover art for an indie game."
  },
  {
    id: 8,
    title: "Education Scam",
    category: "Thumbnails",
    imageUrl: th17Img,
    description: "Custom streaming overlay with alerts and screens."
  },
  {
    id: 9,
    title: "Celebrity Story",
    category: "Thumbnails",
    imageUrl: th10Img,
    description: "Original character design for gaming content."
  }, 
  {
    id: 10,
    title: "Minecraft",
    category: "Thumbnails",
    imageUrl: th1Img,
    description: "Eye-catching thumbnail design for podcast content creators."
  },
  {
    id: 11,
    title: "Free Fire Gameplay",
    category: "Thumbnails",
    imageUrl: th4Img,
    description: "Complete brand identity including logo, color palette, and typography."
  },
  {
    id: 12,
    title: "Educational Video",
    category: "Thumbnails",
    imageUrl: th13Img,
    description: "Engaging social media graphics designed for maximum impact."
  },
  {
    id: 13,
    title: "Documentry",
    category: "Thumbnails",
    imageUrl: th11Img,
    description: "User interface design for a mobile gaming application."
  },
  {
    id: 14,
    title: "Call of Duty",
    category: "Thumbnails",
    imageUrl: th3Img,
    description: "Dynamic logo design for a professional esports team."
  },
  {
    id: 15,
    title: "Bhaivalry",
    category: "Posters",
    imageUrl: th5Img,
    description: "Custom channel art for gaming YouTube channel."
  },
  {
    id: 16,
    title: "Restaurant",
    category: "Logo",
    imageUrl: th18Img,
    description: "Illustrated cover art for an indie game."
  },
  {
    id: 17,
    title: "Podcast",
    category: "Thumbnails",
    imageUrl: th12Img,
    description: "Illustrated cover art for an indie game."
  },
  {
    id: 18,
    title: "",
    category: false,
    imageUrl: "",
    description: "Illustrated cover art for an indie game."
  },
  {
    id: 19,
    title: "",
    category: false,
    imageUrl: "",
    description: "Illustrated cover art for an indie game."
  },
  {
    id: 20,
    title: "Podcast",
    category: "Logo",
    imageUrl: th19Img,
    description: "Illustrated cover art for an indie game."
  }
]