import PropTypes from 'prop-types';
import { useState } from 'react';

const Toggler = ({ children }) => {
  const [isOpen, setIsOpen] = useState();

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  // вызываем функцию children и передаем туда текущий стейт и функцию toggle
  return children({ isOpen, toggle });
};

Toggler.propTypes = {
  children: PropTypes.func
};

export default Toggler;
