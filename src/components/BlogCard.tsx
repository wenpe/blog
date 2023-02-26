import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Stack,
  Chip,
} from '@mui/material';
import { Tag } from 'types/blog';
import { css } from '@mui/styled-engine';
import UpdateIcon from '@mui/icons-material/Update';

const cardStyle = css`
  transition: all 0.2s;
  &:hover {
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.65);
  }
`;

const buttonStyle = css`
  transition: all 0.2s;
  &:hover {
    opacity: 0.9;
  }
`;

const cardTitle = css`
  font-weight: bold;
  height: 60px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

type BlogCard = {
  imagePath: string;
  imageAlt: string;
  title: string;
  tags: Tag[];
  revisedAt: string;
};

export const BlogCard = ({ imagePath, imageAlt, title, tags, revisedAt }: BlogCard) => {
  return (
    <Card sx={{ maxWidth: 400 }} css={cardStyle}>
      <CardActionArea css={buttonStyle}>
        <CardMedia component='img' height='170' image={imagePath} alt={imageAlt} />
        <CardContent>
          <Typography variant='h6' component='div' css={cardTitle}>
            {title}
          </Typography>
        </CardContent>
        <CardActions>
          <Stack direction='row' spacing={1}>
            {tags.map((tag) => (
              <Chip key={tag.id} label={'#' + tag.tag} variant='outlined' />
            ))}
          </Stack>
        </CardActions>
        <CardActions>
          <Stack direction='row' spacing={0.5} alignItems='center'>
            <UpdateIcon fontSize='small' />
            <Typography>{revisedAt}</Typography>
          </Stack>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
