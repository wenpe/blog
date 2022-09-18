import Link from 'next/link';
import type { InferGetStaticPropsType, NextPage } from 'next';
import { client } from 'libs/client';
import type { Blog, Tag } from 'types/blog';
import { styled } from '@mui/system';
import { css } from '@mui/styled-engine';
import { AppBar, Toolbar, Typography } from "@mui/material";

const RedColor = css({
  color: 'red',
});

const Welcome = styled('span')({
  color: 'lightblue',
  backgroundColor: 'blue',
  padding: 8,
  borderRadius: 4,
});

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
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            App Bar
          </Typography>
        </Toolbar>
      </AppBar>
      <h1>
        <Welcome>Welcome to</Welcome> <a href='https://nextjs.org'>Next.js!</a>
      </h1>
      <p>
        <span css={RedColor}>Get started by editing</span> <code>pages/index.js</code>
      </p>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
