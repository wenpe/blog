const nextSeoConfig = {
  titleTemplate: '%s | Wenpe Playground',
  defaultTitle: 'Home | Wenpe Playground',
  canonical: 'https://wenpe-playground.com/',
  description: 'エンジニアのwenpeです。ITのことや、それ以外のことなど、適当に発信しています。',
  additionalMetaTags: [
    {
      property: 'dc:creator',
      content: 'wenpe',
    },
    {
      name: 'application-name',
      content: 'Wenpe Playground',
    },
  ],
  openGraph: {
    url: 'https://wenpe-playground.com/',
    type: 'website',
    locale: 'ja_JP',
    title: 'Home',
    description: 'エンジニアのwenpeです。ITのことや、それ以外のことなど、適当に発信しています。',
    site_name: 'Wenpe Playground',
    image: "https://images.microcms-assets.io/assets/885d2f8a9001437884ab24d84c00b5d7/2ba5bc0d3d54481988441affeceef41a/codehighlihgt.png",
    images: [
      {
      　url: "https://images.microcms-assets.io/assets/885d2f8a9001437884ab24d84c00b5d7/2ba5bc0d3d54481988441affeceef41a/codehighlihgt.png",
      },
    ]
  },
  twitter: {
    handle: '@wenpe2567',
    site: '@wenpe2567',
    cardType: 'summary_large_image',
  },
};

export default nextSeoConfig;
