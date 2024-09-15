import { MetaTag } from "react-metatags-hook";

interface FacebookMetaTagsOptions {
  url?: string;
  type?: string;
  title?: string;
  description?: string;
  image?: string;
}

const generateFacebookMetaTags = (options: FacebookMetaTagsOptions): MetaTag[] => {
  const metaTags: MetaTag[] = [];

  if (options.url) {
    metaTags.push({
      property: "og:url",
      content: options.url
    });
  }

  if (options.type) {
    metaTags.push({
      property: "og:type",
      content: options.type
    });
  }

  if (options.title) {
    metaTags.push({
      property: "og:title",
      content: options.title
    });
  }

  if (options.description) {
    metaTags.push({
      property: "og:description",
      content: options.description
    });
  }

  if (options.image) {
    metaTags.push({
      property: "og:image",
      content: options.image
    });
  }

  return metaTags;
};

export default generateFacebookMetaTags;