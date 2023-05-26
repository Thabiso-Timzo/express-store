import React from 'react'
import Marquee from 'react-fast-marquee'

const Marque = ({ images }) => {
  return (
    <section className='marque' >
        <div className="container-xxl">
            <div className="card-wrapper">
                <Marquee className='marque-container'>
                    {images.map(item => (
                        <div key={item.id} className='brand'>
                            <img src={item.image} alt="brand" />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    </section>
  )
}

export default Marque