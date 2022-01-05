import { useEffect } from 'react';

const withLog = (Component) => (props) => {
  useEffect(() => {
    console.group(`With log output ${Component.name}`);
    console.log(props);
    console.groupEnd();
  }, []);

  return <Component {...props} />;
};
export default withLog;
