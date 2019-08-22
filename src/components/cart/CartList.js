import React from 'react'
import CartItem from './CartItem';

export default function CartList({value}) {
    const {cart} = value;

    return (
        <div className="container-fluid">
            {cart.map(c=>{
                return <CartItem key={c.id} item={c} value={value} />
            })}
        </div>
    )
}
