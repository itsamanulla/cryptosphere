import React from 'react'
import { Input} from 'antd'

function Search({setSearch}) {
  return (
    <>
     {/* <Affix style={{ position: 'sticky' }}> */}
    <div className="search-crypto" style={{width:"70%",position:"sticky", top: 15,
          zIndex: 1,}}>
       
    <Input
      placeholder="Search Cryptocurrency"
      onChange={(e) => setSearch(e.target.value.toLowerCase())}
    />
  </div>
  {/* </Affix> */}
  </>
  )
}

export default Search