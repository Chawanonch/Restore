import { ContactPage } from '@mui/icons-material';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AboutPage from '../../features/about/AboutPage';
import Catalog from '../../features/catalog/Catalog';
import ProductDetails from '../../features/catalog/ProductDetails';
import HomePage from '../../features/home/HomePage';
import NotFound from '../errors/NotFound';
import Header from './Header'
import 'react-toastify/dist/ReactToastify.css';
import ServerError from '../errors/ServerError';
import { useStoreContext } from '../context/StoreContext';
import agent from '../api/agent';
import { getCookie } from '../util/util';
import LoadingComponent from './LoadingComponent';
import BasketPage from '../../features/basket/basketPage';

export default function App() {

  const { setBasket } = useStoreContext(); //ควบคุมสเตทด้วย React context to Centralize
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const buyerId = getCookie("buyerId");
    if (buyerId) {
      agent.Basket.get()
        .then((basket) => setBasket(basket))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    } else setLoading(false);
  }, [setBasket]);

  const [mode, setMode] = useState(true)
  const displayMode = mode ? 'light' : 'dark'

  const darkTheme = createTheme({
    palette: {
      mode: displayMode
    },
  });

  const handleMode = () => setMode(!mode)

  if (loading) return <LoadingComponent message="Initilize App....." />;

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <ToastContainer
          position="bottom-right"
          autoClose={200}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <CssBaseline />
        <Header handleMode={handleMode} />
        <Container>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/catalog/:id' element={<ProductDetails />} />
            <Route path='/basket' element={<BasketPage />} />
            <Route path='/server-error' element={<ServerError />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </>
  )
}

