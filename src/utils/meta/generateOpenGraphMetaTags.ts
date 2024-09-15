
interface OpenGraphMetaTagsOptions {
  title?: string;
  image?: string;
  site_name?: string;
}

const generateOpenGraphMetaTags = (options: OpenGraphMetaTagsOptions): Record<string, string> => {
  const openGraph: Record<string, string> = {};

  if(options.title) {
    openGraph.title = options.title;
  }

  if(options.image) {
    openGraph.image = options.image;
  }

  if(options.site_name) {
    openGraph.site_name = options.site_name;
  }

  return openGraph;
};

export default generateOpenGraphMetaTags;