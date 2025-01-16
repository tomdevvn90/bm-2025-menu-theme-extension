import { createRoot } from 'react-dom/client';
import { BmMenuContextProvider } from './context/BmMenuContext'
import BmMenuApp from './components/BmMenuApp';

const API_KEY = process.env.MIX_API_KEY;
const ENDPOINT = process.env.MIX_ENDPOINT;

((w) => {
  'use strict';

  const BmMenuInit = () => {
    const ROOT_ELEM = document.querySelector('#__BM_2025_MENU__');
    if(!ROOT_ELEM) return;

    const { storeId, menuId } = ROOT_ELEM.dataset;
    const root = createRoot(ROOT_ELEM);
    root.render(
      <BmMenuContextProvider 
        API_ENDPOINT={ ENDPOINT } 
        API_KEY={ API_KEY } 
        menuId={ menuId }
        storeId={ storeId } >
          <BmMenuApp />
      </BmMenuContextProvider>);
  }

  document.addEventListener('DOMContentLoaded', e => {
    BmMenuInit();
  });

})(window)