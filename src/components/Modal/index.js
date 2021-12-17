import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  backdrop: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: 'rgba(0,0,0,.2)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {
    background: 'white',
    width: 400,
    padding: 10
  }
});

const Modal = ({ onClose }) => {
  const classes = useStyles();
  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <h2>Modal window</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima minus
          optio voluptate explicabo cupiditate facilis illum non id obcaecati
          maiores natus unde fuga, reiciendis consequatur officia rerum ab
          corporis saepe. In eius deleniti repudiandae assumenda?
        </p>
        <button onClick={onClose}>close</button>
      </div>
    </div>
  );
};

export default Modal;
