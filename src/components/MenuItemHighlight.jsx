
export default function Highlight({ parent_item }) {

  if ( !parent_item ) return <></>
   
  return <div className='menu-hl-col'>
          <div className="hl-title">{parent_item.name}</div>
          { parent_item.config.highlight_image && <img src={parent_item.config.highlight_image} alt='' />}
          { 
          (parent_item.config.highlight_brands && parent_item.config.highlight_brands.length > 0 ) && 
            <div className='hl-item'>
            <div className="hl-subtitle">FEATURED BRANDS</div>
            <div className='ft-brands-imgs'>
              {
                parent_item.config.highlight_brands.map((item, index) => {
                  return <a href={item.url} className='ft-img' key={index}><img src={item.url_img} alt='' /></a>
                })
              }
            </div>
            </div>
          }
          { 
          parent_item.config.highlight_guides && 
            <div className='hl-item'>
              <div className="hl-subtitle">Buying guides</div>
              <div dangerouslySetInnerHTML={{__html: parent_item.config.highlight_guides}}></div>
            </div> 
          }
        </div>
}