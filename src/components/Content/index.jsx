import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const Products = lazy(() =>
  import('../../pages/Products' /* webpackChunkName: "home-page" */)
);
const Contacts = lazy(() =>
  import('../../pages/Contacts' /* webpackChunkName: "Products" */)
);
const Counter = lazy(() =>
  import('../../pages/Counter' /* webpackChunkName: "Counter" */)
);
const Timer = lazy(() =>
  import('../../pages/Timer' /* webpackChunkName: "Timer" */)
);
const Home = lazy(() =>
  import('../../pages/Home' /* webpackChunkName: "Home" */)
);
const Page404 = lazy(() =>
  import('../../pages/Page404' /* webpackChunkName: "Page404" */)
);

const ProductsDetail = lazy(() =>
  import('../../pages/ProductsDetail' /* webpackChunkName: "ProductsDetail" */)
);
const HocPage = lazy(() =>
  import('../../pages/HocPage' /* webpackChunkName: "HocPage" */)
);
const ContextDemo = lazy(() =>
  import('../../pages/Context' /* webpackChunkName: "Context" */)
);
// import Products from '../../pages/Products';
// import Contacts from '../../pages/Contacts';
// import Counter from '../../pages/Counter';
// import Timer from '../../pages/Timer';
// import Home from '../../pages/Home';
// import Page404 from '../../pages/Page404';

const Content = () => {
  // const { pathname } = window.location;
  return (
    <div className='content'>
      {/* {pathname === '/products' && <Products />}
      {pathname === '/contacts' && <Contacts />}
      {pathname === '/counter' && <Counter />}
      {pathname === '/timer' && <Timer />} */}
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path='/react_practice' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/timer' element={<Timer />} />
          <Route path='/products/:id' element={<ProductsDetail />} />
          <Route path='/hoc' element={<HocPage />} />
          <Route path='/context' element={<ContextDemo />} />

          <Route path='*' element={<Page404 />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Content;
