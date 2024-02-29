
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router.jsx'
import { Provider } from 'react-redux'
import "react-datetime/css/react-datetime.css";
import 'react-loading-skeleton/dist/skeleton.css'
import { store } from './App/Store.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import global_en from "./translations/en/global.json";
import global_bn from "./translations/bn/global.json";
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { SkeletonTheme } from 'react-loading-skeleton'

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    bn: {
      global: global_bn,
    },
  },
})

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <I18nextProvider i18n={i18next}>
      <QueryClientProvider client={queryClient}>
        <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
          <Provider store={store}>
            <RouterProvider router={router} />
            <Toaster />
          </Provider>
        </SkeletonTheme>
      </QueryClientProvider>
    </I18nextProvider>
  </>
)
