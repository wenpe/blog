import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Stack,
  Chip
} from '@mui/material';
import { Tag } from 'types/blog'
import { css } from '@mui/styled-engine';

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

type BlogCard = {
  imagePath: string;
  imageAlt: string;
  title: string;
  tags: Tag[];
};

export const BlogCard = ({ imagePath, imageAlt, title, tags }: BlogCard) => {
  return (
    <Card sx={{ maxWidth: 400 }} css={cardStyle}>
      <CardActionArea css={buttonStyle}>
        <CardMedia component='img' height='170' image={imagePath} alt={imageAlt} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
        </CardContent>
        <CardActions>
          <Stack direction="row" spacing={1}>
            {tags.map((tag) => (
              <Chip key={tag.id} label={'#' + tag.tag} variant="outlined" />
              ))}
            </Stack>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
