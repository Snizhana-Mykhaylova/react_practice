import { useState } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  productForm: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 300,
    marginBottom: 10,
    padding: 10
  },
  formField: {
    display: 'flex',
    marginBottom: 10
  },
  formInput: { flex: 1 },
  fieldName: {
    marginRight: 10
  },
  error: {
    color: 'red'
  }
});

const ProductForm = ({ onAddProduct }) => {
  const classes = useStyles();

  // для каждого поля делаем свой стейт
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [count, setCount] = useState(0);
  const [image, setImage] = useState('phone');
  const [color, setColor] = useState('white');
  const [error, setError] = useState('');

  // хендлер сабмита
  const handleSubmit = (e) => {
    e.preventDefault();

    const allFieldAreFull = name && price && count && image;
    if (!allFieldAreFull) {
      setError('Fields are required');
      return;
    }
    const newProduct = {
      id: Date.now(),
      name,
      price: Number(price),
      count: Number(count),
      img: image,
      color: color
    };

    onAddProduct(newProduct);
    setName('');
    setPrice(0);
    setCount(0);
    setImage('phone');
    setColor('white');
    setError('');
  };

  // создаем хендлеры для кождого поля формы
  const handlerChangeName = (e) => setName(e.target.value);
  const handlerChangePrice = (e) => setPrice(e.target.value);
  const handlerChangeCount = (e) => setCount(e.target.value);
  const handlerChangeImage = (e) => setImage(e.target.value);
  const handlerChangeColor = (e) => setColor(e.target.value);

  return (
    <form className={classes.productForm} onSubmit={handleSubmit}>
      <label className={classes.formField}>
        <span className={classes.fieldName}>Name</span>
        <input
          type='text'
          className={classes.formInput}
          onChange={handlerChangeName}
        />
      </label>
      <label className={classes.formField}>
        <span className={classes.fieldName}>Price</span>
        <input
          type='text'
          className={classes.formInput}
          onChange={handlerChangePrice}
        />
      </label>
      <label className={classes.formField}>
        <span className={classes.fieldName}>Count</span>
        <input
          type='text'
          className={classes.formInput}
          onChange={handlerChangeCount}
        />
      </label>
      <label className={classes.formField}>
        <span className={classes.fieldName}>Image</span>
        <select
          name=''
          id=''
          className={classes.formInput}
          onChange={handlerChangeImage}
        >
          <option value='phone'>phone</option>
          <option value='smartphone'>smartphone</option>
        </select>
      </label>
      {error && <p className={classes.error}> {error}</p>}
      <fieldset>
        <legend>color</legend>
        <label>
          <span>white</span>{' '}
          <input
            type='radio'
            name='color'
            onChange={handlerChangeColor}
            checked={color === 'white'}
            value='white'
          />
        </label>
        <label>
          <span>grey</span>{' '}
          <input
            type='radio'
            name='color'
            onChange={handlerChangeColor}
            checked={color === 'grey'}
            value='grey'
          />
        </label>
        <label>
          <span>black</span>{' '}
          <input
            type='radio'
            name='color'
            onChange={handlerChangeColor}
            checked={color === 'black'}
            value='black'
          />
        </label>
      </fieldset>
      <button type='submit'>+Add</button>
    </form>
  );
};

export default ProductForm;
