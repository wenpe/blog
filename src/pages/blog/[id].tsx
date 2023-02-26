import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { client } from 'libs/client';
import type { Blog } from 'types/blog';
import { ParsedUrlQuery } from 'node:querystring';
import { Box, Container, Paper, Chip, Stack, Typography } from '@mui/material';
import cheerio from 'cheerio';
import hljs from 'highlight.js';
import 'highlight.js/styles/a11y-dark.css';
import { NextSeo } from 'next-seo';
import { Global, css } from '@emotion/react';
import type { NextPageWithLayout } from 'types/layout';
import type { ReactElement } from 'react';
import { Layout } from 'components/Laytout';
import UpdateIcon from '@mui/icons-material/Update';
import { getFormattedDate } from 'libs/getFormattedDate';
import Image from 'mui-image';

interface Props {
  blog: Blog;
}

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const data = await client.get({
    endpoint: 'blog',
    queries: {
      limit: 20,
    },
  });
  const paths = data.contents.map((content: Blog) => `/blog/${content.id}`);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
  const id = context.params?.id;
  const blog = await client.get({ endpoint: 'blog', contentId: id });

  const $ = cheerio.load(blog.body);
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });

  $('p:has(img)').each((_, elm) => {
    $(elm).html();
    $(elm).addClass('pHasImg');
  });

  return {
    props: {
      blog: { ...blog, body: $.html() },
    },
  };
};

const BlogId: NextPageWithLayout<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blog,
}: Props) => {
  return (
    <div>
      <Global
        styles={css`
          code {
            padding: 0.1em 0.1em;
            background-color: #e7edf3;
            border-radius: 3px;
            word-wrap: break-word;
          }
          ,
          .pHasImg {
            overflow: auto;
          }
        `}
      />
      <NextSeo
        title={blog.title}
        description={blog.description}
        canonical={'https://wenpe-playground.com//blog/' + blog.id}
      />
      <Container maxWidth='lg' sx={{ marginTop: `20px` }}>
        <Box>
          <Paper elevation={0} variant='outlined' square sx={{ padding: `30px` }}>
            <Stack justifyContent='center' alignItems='center'>
              <Image src={blog.image.image.url} alt='Image Not Found' width='70%' easing='unset' />
            </Stack>
            <Stack direction='row' spacing={1}>
              {blog.tags.map((tag) => (
                <Chip
                  key={tag.id}
                  label={'#' + tag.tag}
                  variant='outlined'
                  style={{
                    marginTop: 10,
                  }}
                />
              ))}
            </Stack>
            <Stack
              direction='row'
              spacing={0.5}
              alignItems='center'
              style={{
                marginTop: 10,
              }}
            >
              <UpdateIcon fontSize='small' />
              <Typography>{getFormattedDate(blog.revisedAt, 'yyyy.MM.dd')}</Typography>
            </Stack>

            <h1>{blog.title}</h1>

            <div
              dangerouslySetInnerHTML={{
                __html: `${blog.body}`,
              }}
            />
            {/* <p>{blog.publishedAt}</p> */}
          </Paper>
        </Box>
      </Container>
    </div>
  );
};

BlogId.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default BlogId;
