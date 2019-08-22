import React from 'react'

export default function CartItem({ item, value }) {

    const { id, img, info, price, title } = item;

    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <img src={img} className="img-fluid" />
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <h6>{title}</h6>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <h6><span className="font-weight-bold">$</span> {price}</h6>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <h6>{title}</h6>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <h6>{title}</h6>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <h6>{title}</h6>
                </div>
            </div>
        </div>

    )
}
