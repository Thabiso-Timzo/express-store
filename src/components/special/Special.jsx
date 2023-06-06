import React from 'react'

import SpecialCard from '../special-card/SpecialCard'
import Container from '../container/Container'

const Special = () => {
  return (
    <Container classOne="spacial py-4">       
        <div className="row">
            <div className="col-12">
                <h3 className='section-heading'>Special Products</h3>
            </div>
        </div>
        <div className="row">
            <SpecialCard />
            <SpecialCard />
            <SpecialCard />
        </div>
    </Container>
  )
}

export default Special