import React from 'react'

import Container from '../container/Container'

const Offers = ({ items, services }) => {
    return (
        <Container classOne="offers py-4">
            <div className="row">
                <div className="col-12">
                    <div className="services">
                        {services.map(service => (
                            <div className="services-offer" key={service.id}>
                                <service.icon className="icon" />
                                <div className="content">
                                    <h5>{service.desc}</h5>
                                    <p>{service.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="items">
                        <div className="products">
                            {items.map(item => (
                                <div className="product" key={item.id}>
                                    <div className="content">
                                        <h5>{item.desc}</h5>
                                        <p>{item.text}</p>
                                    </div>
                                    <div className="image">
                                        <img src={item.image} alt="product" />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <hr />
                        <div className="products">
                            {items.map(item => (
                                <div className="product">
                                    <div className="content">
                                        <h5>{item.desc}</h5>
                                        <p>{item.text}</p>
                                    </div>
                                    <div className="image">
                                        <img src={item.image} alt="product" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Offers