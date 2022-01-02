import Card from '@mui/material/Card';
import { Link, useLocation } from 'react-router-dom';
import { CardActionArea } from '@mui/material';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
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

const ProductItem = ({ product, onDelete }) => {
  const classes = useStyles();
  const handleDelete = () => onDelete(product.id);
  const { pathname } = useLocation();
  return (
    <li className={classes.item}>
      <CardActionArea>
        <Link to={`${pathname}/${product.id}`}>
          <Card className={classes.card}>
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
            <p>Color: {product.color}</p>
            {product.software || product.insurance ? (
              <p>
                Options: {product.software ? 'softaware' : null}
                {product.isurance ? 'insurance' : null}
              </p>
            ) : null}
            <img
              className={classes.img}
              src={loadImage(product.img)}
              alt={product.name}
            />
          </Card>
        </Link>
      </CardActionArea>

      <div>
        <IconButton>
          <AddShoppingCartOutlinedIcon />
        </IconButton>
        <IconButton onClick={handleDelete}>
          <DeleteForeverIcon />
        </IconButton>
      </div>
    </li>
  );
};

export default ProductItem;
