import type { InferGetStaticPropsType, NextPage } from 'next';
import { client } from 'libs/client';
import type { Blog, Tag } from 'types/blog';
import { AppBar, Box, Typography, Container, Grid } from '@mui/material';
import { BlogCard } from 'components/BlogCard';
import { NextMuiLink } from 'components/NextMuiLink';

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

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ blogs, tags }: Props) => {
  return (
    <div>
      <AppBar position='static' sx={{ boxShadow: `none` }}>
        <Container maxWidth='xl'>
          <Box
            sx={{
              display: `flex`,
              alignItems: `center`,
              height: `70px`,
            }}
          >
            <NextMuiLink href='/'>
              <Typography sx={{ fontSize: `25px` }}>Wenpe Blog</Typography>
            </NextMuiLink>
          </Box>
        </Container>
      </AppBar>
      <Container maxWidth='xl' sx={{ marginTop: `20px` }}>
        <Grid
          container
          rowSpacing={{ xs: 1, sm: 2, md: 3 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {blogs.map((blog) => (
            <Grid key={blog.id} item xs={12} md={6} lg={4}>
              <NextMuiLink href={`/blog/${blog.id}`}>
                <BlogCard
                  imagePath='/images/blog/fauaerhhr.jpg'
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

export default Home;
