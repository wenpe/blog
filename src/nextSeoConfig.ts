const nextSeoConfig = {
  titleTemplate: '%s | Wenpe Blog',
  defaultTitle: 'Home | Wenpe Blog',
  canonical: 'https://wenpe-playground.com/',
  description: 'エンジニアのwenpeです。ITのことや、それ以外のことなど、適当に発信しています。',
  additionalMetaTags: [
    {
      property: 'dc:creator',
      content: 'wenpe',
    },
    {
      name: 'application-name',
      content: 'Wenpe Blog',
    },
  ],
  openGraph: {
    url: 'https://wenpe-playground.com/',
    type: 'website',
    locale: 'ja_JP',
    title: 'Home',
    description: 'エンジニアのwenpeです。ITのことや、それ以外のことなど、適当に発信しています。',
    site_name: 'Wenpe Blog',
  },
  twitter: {
    handle: '@wenpe2567',
    site: '@wenpe2567',
    cardType: 'summary_large_image',
  },
};

export default nextSeoConfig;
