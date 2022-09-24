import type { ReactElement } from 'react';
import type { InferGetStaticPropsType } from 'next';
import type { NextPageWithLayout } from 'types/layout';
import { client } from 'libs/client';
import type { Blog, Tag } from 'types/blog';
import { Container, Grid } from '@mui/material';
import { BlogCard } from 'components/BlogCard';
import { NextMuiLink } from 'components/NextMuiLink';
import { Layout } from 'components/Laytout';

// Get blog and tags data
export const getStaticProps = async () => {
  const blog = await client.get({ endpoint: 'blog' });
  const tag = await client.get({ endpoint: 'tag' });

  return {
    props: {
      blogs: blog.contents,
      tags: tag.contents,
    },
  };
};

type Props = {
  blogs: Blog[];
  tags: Tag[];
};

const Home: NextPageWithLayout<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blogs,
}: Props) => {
  return (
    <div>
      <Container maxWidth='xl' sx={{ marginTop: `20px` }}>
        <Grid container rowSpacing={2} columnSpacing={2}>
          {blogs.map((blog) => (
            <Grid key={blog.id} item xs={12} md={6} lg={4}>
              <NextMuiLink href={`/blog/${blog.id}`}>
                <BlogCard
                  imagePath={blog.image.image.url}
                  imageAlt='Image Not Found'
                  title={blog.title}
                  tags={blog.tags}
                ></BlogCard>
              </NextMuiLink>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
