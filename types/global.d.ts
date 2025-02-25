interface RouteParams {
  params: Promise<Record<string, string>>;
  searchParams: Promise<Record<string, string>>;
}

interface KidsProfile {
  id: string;
  name: string;
  pageTitle: string;
  pageDescription: string;
  richText: string;
  coverImageSRC: string;
  gallery: { src: string; alt: string }[];
}

interface EventPhoto {
  srcUrl: string;
  alt: string;
  id: string;
}
