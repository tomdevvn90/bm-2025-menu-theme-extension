import { useBmMenuContext } from '../context/BmMenuContext';
import MenuIcon from './MenuIcon';
import Highlight from './MenuItemHighlight';

export default function BmMenuApp() {
  const { menuData } = useBmMenuContext();

  const renderMenu = (menu, lv = null, __parent_item) => {
    lv = (lv === null) ? 0 : lv += 1;
    let classesUl = (lv == 0 ? ['menu-builder'] : [
      'menu-builder__sub', 
      `sub-lv__${ lv }`, 
      (__parent_item?.type ? `__type${ __parent_item.type }` : '')]);
    
    let __li = (
      <>
        {
          menu.map((item, __i_index) => {
            const { __key, name, url, children, type } = item;
            const columns = item?.config?.containerColumns ? item.config.containerColumns : 0;
            let columnsClasses = columns ? `__width-${ columns*25 }` : '';
            
            let liClasses = [
              '__menu-item', 
              `__item-lv-${ lv }`, 
              columnsClasses,
              (children && children.length > 0 ? `__has-children` : ''),
              (item.type ? `__menu-item_type__${ type }` : ''),
            ];

            return <li
              className={ liClasses.join(' ') }
              key={ __key }
              data-id={ __key }
              data-nav-level={ lv }
              // data-nav-item={ ((__u, __name) => {
              //   let segment = __u.split('/');
              //   let newName = __name.split(' ').join('-').toLowerCase();
              //   return segment.at(-1) == '' ? newName : segment.at(-1);
              // })(url, name) } 
              >
              { ['__BLOCK_BRAND__'].includes(type) == false && 
                <a href={ url } style={{ background: item.background, color: item.color }}
                  className={ ['__BLOCK_MENU_IMAGE__', '__BLOCK_MENU_IMAGE_HEADING__'].includes(type) ? 'menu-heading' : '' } >
                  { ['__MEGASHOP__'].includes(type) ? <MenuIcon source={ 'HB' } /> : '' } 
                  <span className="__menu-item-name">
                    { name }
                    { children && children.length > 0 ? <MenuIcon className={ 'dropdown-icon' } source={ 'arrow_down' } /> : '' } 
                  </span>
                  { 
                    ['__BLOCK_BRAND_ITEM__', '__BLOCK_MENU_IMAGE_ITEM__'].includes(type) && item?.image &&
                    <div className={ ((__type) => {
                      let __c = {
                        '__BLOCK_BRAND_ITEM__': '__brand-image',
                        '__BLOCK_MENU_IMAGE_ITEM__': '__image',
                      }
                      return __c[__type];
                    })(type) }>
                      <img src={ item.image } alt='' />
                    </div>
                  }
                </a>
              }
              { (children && children.length > 0) && renderMenu(children, lv, item) }
            </li>
          })
        }
      </>
    )

    let __ul = (<ul className={ classesUl.join(' ') }> 
      {
        ( __parent_item?.type && ['__MEGA__', '__MEGASHOP_SUBITEM__'].includes(__parent_item.type) )
          ? <div className='__container-item'>
              <div className={ __parent_item?.config?.highlight_enable ? 'menu-list-col' : 'menu-list-col full' } >
                {
                  __parent_item?.config?.more_text && 
                  <div className="__menu-item">
                    <a href={ __parent_item?.config?.more_url }>
                      { __parent_item.config.more_text }
                    </a>
                  </div>
                }
                <div className="__BLOCK_MENU_IMAGE-container" >{ __li }</div>
              </div> 
              {
                __parent_item?.config?.highlight_enable && <Highlight parent_item={__parent_item} />
              }
            </div>
          : __li 
      }
    </ul>)

    return __ul;
  }

  return <div className="bm-2025-menu-wrap">
    {/* { JSON.stringify(menuData) } */} 
    { (menuData && menuData.length > 0) && renderMenu(menuData) }
  </div>
}