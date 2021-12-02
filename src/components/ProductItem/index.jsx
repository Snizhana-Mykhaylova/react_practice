import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import IconButton from '@mui/material/IconButton';
import { createUseStyles } from 'react-jss';
import { loadImage } from '../../utils/loadImage';

const useStyles = createUseStyles({
  item: {
    marginBottom: 10,
    display: 'flex',
    alignItems: 'flex-start',

    '& img': {
      height: 200
    }
  },
  card: { padding: 10 }
});

const ProductItem = ({ product }) => {
  const classes = useStyles();
  return (
    <li className={classes.item}>
      <CardActionArea>
        <Card className={classes.card}>
          <p>Name: {product.name}</p>
          <p>Price: {product.price}</p>
          <img
            className={classes.img}
            src={loadImage(product.img)}
            alt={product.name}
          />
        </Card>
      </CardActionArea>
      <IconButton>
        <AddShoppingCartOutlinedIcon />
      </IconButton>
    </li>
  );
};

export default ProductItem;
