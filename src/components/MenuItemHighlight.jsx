
export default function Highlight({ parent_item }) {

  if ( !parent_item ) return <></>
   
  return <div className='menu-hl-col'>
          <h3>{parent_item.name}</h3>
          { parent_item.config.highlight_image && <img src={parent_item.config.highlight_image} alt='' />}
          { 
          (parent_item.config.highlight_brands && parent_item.config.highlight_brands.length > 0 ) && 
            <div className='hl-item'>
            <h4>FEATURED BRANDS</h4>
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
              <h4>Buying guides</h4>
              <div dangerouslySetInnerHTML={{__html: parent_item.config.highlight_guides}}></div>
            </div> 
          }
        </div>
}