export interface WisdomQuote {
  text: string;
  author: string;
  category: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  orientation: "horizontal" | "vertical";
}

// Horizontal images (landscape orientation)
const horizontalImages: GalleryImage[] = [
  { id: "h1", src: "/images/gallery/horizontal/Christ_In_Creation.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h2", src: "/images/gallery/horizontal/DCG-Becak-Bike.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h3", src: "/images/gallery/horizontal/DCG-Bicycle_Vender-1.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h4", src: "/images/gallery/horizontal/DCG-Bicycle_Vender_Frame.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h5", src: "/images/gallery/horizontal/DCG-Cabe_Chili-Truck.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h6", src: "/images/gallery/horizontal/DCG-Cabe_Truck_frame.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h7", src: "/images/gallery/horizontal/DCG-Farmer_Vender.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h8", src: "/images/gallery/horizontal/DCG-KOI-COLOR.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h9", src: "/images/gallery/horizontal/DCG-Laborer-sacks.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h10", src: "/images/gallery/horizontal/DCG-Market_Begger-Color.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h11", src: "/images/gallery/horizontal/DCG-Market_Vender-2.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h12", src: "/images/gallery/horizontal/DCG-Market_Vender-Man.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h13", src: "/images/gallery/horizontal/DCG-Set-Market_Vender-Buyer.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h14", src: "/images/gallery/horizontal/DCG-VILLAGE_FARMER.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h15", src: "/images/gallery/horizontal/DCG-horse_secretariat.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h16", src: "/images/gallery/horizontal/DCG-secretariat_horse.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h17", src: "/images/gallery/horizontal/Digital_Chisel_Stes-One.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h18", src: "/images/gallery/horizontal/Digital_Chisel_Stes-One_1_.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h19", src: "/images/gallery/horizontal/Digital_Chisel_Stes-One_1_copy.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h20", src: "/images/gallery/horizontal/Digital_Chisel_Stes-One_2_.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h21", src: "/images/gallery/horizontal/Digital_Chisel_Stes-One_3_.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h22", src: "/images/gallery/horizontal/Digital_Chisel_Stes-One_4_.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h23", src: "/images/gallery/horizontal/Digital_Chisel_Stes-One_5_.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h24", src: "/images/gallery/horizontal/Digital_Chisel_Stes-One_copy.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h25", src: "/images/gallery/horizontal/Digital_Javanese-Becak.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h26", src: "/images/gallery/horizontal/Digital_Javanese-Farmer-3.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h27", src: "/images/gallery/horizontal/Digital_Javanese-Farmer-_3_.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h28", src: "/images/gallery/horizontal/Digital_Javanese-Farmer-infograph.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h29", src: "/images/gallery/horizontal/Digital_Javanese-Farmer.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h30", src: "/images/gallery/horizontal/Digital_Javanese-Produce-Cart.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h31", src: "/images/gallery/horizontal/Digital_Javanese-Village_Tree.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h32", src: "/images/gallery/horizontal/Digital_Javanese-Worker-Rice.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h33", src: "/images/gallery/horizontal/Digital_Javanese_Bicicle.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h34", src: "/images/gallery/horizontal/Digital_Javanese_Woodcarving_13_.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h35", src: "/images/gallery/horizontal/Digital_Javanese_Woodcarving_14_.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h36", src: "/images/gallery/horizontal/Digital_JavaneseMarket_Vender-Woman.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h37", src: "/images/gallery/horizontal/Digital-Rice-Javanese_Farmerg_1_.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h38", src: "/images/gallery/horizontal/Gemini_Generated_Image_2_.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h39", src: "/images/gallery/horizontal/KOI-Bedroom_Frame.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h40", src: "/images/gallery/horizontal/KOI-FISH-LILLY.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h41", src: "/images/gallery/horizontal/Koi_Pond.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h42", src: "/images/gallery/horizontal/Market_Vender_Set.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h43", src: "/images/gallery/horizontal/Recycle_Colleteor.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h44", src: "/images/gallery/horizontal/Recycle_Vender_frame.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h45", src: "/images/gallery/horizontal/Woman_Market_VenderFrame.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h46", src: "/images/gallery/horizontal/recycle-vender-1.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h47", src: "/images/gallery/horizontal/recycle_vender.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
  { id: "h48", src: "/images/gallery/horizontal/f9702b1f-8ba3-4062-960c-d71529891842.png", alt: "Indonesian wood-relief print", orientation: "horizontal" },
];

// Vertical images (portrait orientation)
const verticalImages: GalleryImage[] = [
  { id: "v1", src: "/images/gallery/vertical/DCG-Bicycle_Becek.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v2", src: "/images/gallery/vertical/DCG-Bicycle_Vender.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v3", src: "/images/gallery/vertical/DCG-Cabe_Chili_Truck.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v4", src: "/images/gallery/vertical/DCG-CHRIST_copy.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v5", src: "/images/gallery/vertical/DCG-Christ.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v6", src: "/images/gallery/vertical/DCG-Collage.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v7", src: "/images/gallery/vertical/DCG-KOI-LILLY.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v8", src: "/images/gallery/vertical/DCG-Market_Begger-Color-croped.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v9", src: "/images/gallery/vertical/DCG-Market_Begger.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v10", src: "/images/gallery/vertical/DCG-Market_Vender_Woman.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v11", src: "/images/gallery/vertical/DCG-Stall_Vender.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v12", src: "/images/gallery/vertical/DCG-Vender-Broom.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v13", src: "/images/gallery/vertical/DCG-Woman-Market_Vender.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v14", src: "/images/gallery/vertical/DCG-Woman_Market_Buyer.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v15", src: "/images/gallery/vertical/Digital_Chisel_8_.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v16", src: "/images/gallery/vertical/Gemini_Generated_Image_1_.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v17", src: "/images/gallery/vertical/Gemini_Generated_Image_3_.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v18", src: "/images/gallery/vertical/Gemini_Generated_Image_4_.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v19", src: "/images/gallery/vertical/Gemini_Generated_Image_5_.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v20", src: "/images/gallery/vertical/Gemini_Generated_Image_8lgtl8lgtl8lgtl8.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v21", src: "/images/gallery/vertical/Gemini_Generated_Image_8lgtl8lgtl8lgtl8_1_.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v22", src: "/images/gallery/vertical/image.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
  { id: "v23", src: "/images/gallery/vertical/upscale-DCG-Christ.png", alt: "Indonesian wood-relief print", orientation: "vertical" },
];

export function getGalleryImages(): GalleryImage[] {
  if (typeof window === "undefined") {
    return [...horizontalImages, ...verticalImages];
  }
  
  const isPortrait = window.innerHeight > window.innerWidth;
  return isPortrait ? verticalImages : horizontalImages;
}

export function getDailyQuote(quotes: WisdomQuote[]): WisdomQuote {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
  const index = dayOfYear % quotes.length;
  return quotes[index];
}

export function getRandomImage(): GalleryImage {
  const images = getGalleryImages();
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

export function downloadImage(src: string, filename: string) {
  const link = document.createElement("a");
  link.href = src;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}