import { ReactElement, useEffect } from 'react';
import type { InferGetStaticPropsType } from 'next';
import type { NextPageWithLayout } from 'types/layout';
import { client } from 'libs/client';
import type { Blog, Tag } from 'types/blog';
import { Container, Grid } from '@mui/material';
import { BlogCard } from 'components/BlogCard';
import { NextMuiLink } from 'components/NextMuiLink';
import { Layout } from 'components/Laytout';
import { gsap, Power4 } from 'gsap';

// Get blog and tags data
export const getServerSideProps = async () => {
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

const Home: NextPageWithLayout<InferGetStaticPropsType<typeof getServerSideProps>> = ({
  blogs,
}: Props) => {
  useEffect(() => {
    gsap.fromTo(
      '.blogCard',
      {
        y: 30,
        autoAlpha: 0,
        stagger: {
          each: 0.3,
        },
      },
      {
        y: 0,
        duration: 2,
        ease: Power4.easeOut,
        autoAlpha: 1,
        stagger: {
          each: 0.2,
        },
      },
    );
  });
  return (
    <div>
      <Container maxWidth='xl' sx={{ marginTop: `20px` }}>
        <Grid container rowSpacing={2} columnSpacing={2}>
          {blogs.map((blog) => (
            <Grid key={blog.id} item xs={12} md={6} lg={4}>
              <NextMuiLink href={`/blog/${blog.id}`}>
                <div className='blogCard' style={{ opacity: 0 }}>
                  <BlogCard
                    imagePath={blog.image.image.url}
                    imageAlt='Image Not Found'
                    title={blog.title}
                    tags={blog.tags}
                  ></BlogCard>
                </div>
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
