import { Route, Routes } from 'react-router-dom';
import { Suspense} from 'react';
import { HomePage } from 'pages/HomePage/HomePage';
import { CatalogPage } from 'pages/CatalogPage/CatalogPage';
import { FavouritePage } from 'pages/FavouritePage/FavouritePage';
import Loader from './Loader/Loader';

export const App = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavouritePage />} />
      </Routes>
    </Suspense>
  );
};
