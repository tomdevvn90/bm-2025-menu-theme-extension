import { createContext, useContext, useEffect, useState, useRef } from 'react'
import BmMenuApi from "../libs/api";

const BmMenuContext = createContext(null);

const BmMenuContextProvider = ({ children, menuId, storeId, API_ENDPOINT, API_KEY }) => {
  const API = useRef(null);
  const [menuData, setMenuData] = useState(null);

  const getMenuData = async (_id) => {
    const res = await API.current.getMenu(_id);
    if(res == false) {
      return;
    }
    const { builder_data } = res;
    setMenuData(builder_data);
  }

  useEffect(() => {
    API.current = new BmMenuApi(API_ENDPOINT, API_KEY, storeId);
    getMenuData(menuId);
  }, [])

  const value = {
    menuData
  }

  return <BmMenuContext.Provider value={ value } >
    { children }
  </BmMenuContext.Provider>
}

const useBmMenuContext = () => {
  return useContext(BmMenuContext);
}

export { BmMenuContextProvider, useBmMenuContext }