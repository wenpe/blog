import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { client } from 'libs/client';
import type { Blog } from 'types/blog';
import { ParsedUrlQuery } from 'node:querystring';
import { AppBar, Box, Typography, Container, Paper, Chip, Stack } from '@mui/material';
import { NextMuiLink } from 'components/NextMuiLink';

interface Props {
  blog: Blog;
}

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const data = await client.get({ endpoint: 'blog' });

  const paths = data.contents.map((content: Blog) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
  const id = context.params?.id;
  const data = await client.get({ endpoint: 'blog', contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};

const BlogId: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ blog }: Props) => {
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
        <Box>
          <Paper elevation={3} sx={{padding: `30px`}}>
            <h1>{blog.title}</h1>

            <div
              dangerouslySetInnerHTML={{
                __html: `${blog.body}`,
              }}
            />
            {/* <p>{blog.publishedAt}</p> */}
            <Stack direction="row" spacing={1}>
            {blog.tags.map((tag) => (
              <Chip key={tag.id} label={'#' + tag.tag} variant="outlined" />
              ))}
            </Stack>
          </Paper>
        </Box>
      </Container>
    </div>
  );
};

export default BlogId;
