import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import Cart from './components/pages/cart/Cart';
import Home from './components/pages/home/Home';
import Product from './components/pages/product/Product';
import './index.css';
import { persistor, store } from './store/store';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<QueryClientProvider client={queryClient}>
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={null}>
				<Router>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/cart' element={<Cart />} />
						<Route path='/product/:id' element={<Product />} />
					</Routes>
				</Router>
			</PersistGate>
		</Provider>
	</QueryClientProvider>
);
