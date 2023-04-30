import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../ASSETS/logo.png'
import { useRecoilState } from 'recoil'
import { clearCartState } from '../../Provider/ClearCartProvider'
import { toast } from 'react-toastify'
import './ProductCard.css'

const ProductCard = ({ product, pagetype }) => {
    const [showpopup, setShowPopup] = useRecoilState(clearCartState)
    const navigate = useNavigate()
    const [selecetedproduct, setselecetedproduct] = React.useState(null)
    const [quantity, setquantity] = React.useState(1)

    const checkaddon = (product) => {
        console.log(product.IsAddOnItem
        )
        if (product.IsAddOnItem) {
            navigate(`/product/${product.ProductId}`)
        }
        else {
            setselecetedproduct(product.ProductId)
        }
    }


    const addtocart = (productdata, count) => {
        // add to local storage
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (cart) {
            // check if item is already in cart


            console.log('cart', pagetype)
            let flag = false;
            // this item is of type MT, check cart if all the items are MT, if there is any MM item then return 
            cart.forEach(element => {
                if (element.productdata.BranchCode != pagetype) {
                    flag = true;
                }
            });

            if (flag) {
                toast.error('You can not add items from both MT and MM in the same cart')
                setShowPopup(true)
            }
            else {
                let itemincart = cart.find(item => item.productdata.ProductId === productdata.ProductId)
                if (itemincart) {
                    // update quantity
                    cart = cart.map(item => {
                        if (item.productdata.ProductId === productdata.ProductId) {
                            return {
                                ...item,
                                quantity: item.quantity + count
                            }
                        }
                        else {
                            return item
                        }
                    })
                    localStorage.setItem('cart', JSON.stringify(cart))
                }
                else {
                    // add new item to cart
                    cart = [...cart, { productdata, quantity: count, url: window.location.href }]
                    localStorage.setItem('cart', JSON.stringify(cart))
                }
                window.location.reload()
                toast.success('Item added to cart')
            }

        }
        else {
            // create cart and add item object to cart
            cart = [{ productdata, quantity: count }]
            localStorage.setItem('cart', JSON.stringify(cart))
            // window.location.reload()
            // get current location
            let url = window.location.href
            console.log(url)
            toast.success('Item added to cart')
        }

    }
    return (
        <div className='productcard'
        >
            <div className='productimage'
                onClick={() => {
                    navigate(`/product/${pagetype}/${product.ProductId}`)
                }}
            >
                <img src={
                    product.ProductImageURL ?
                        product.ProductImageURL
                        :
                        logo

                } alt='product' />
            </div>
            <div className='productinfo' onClick={() => {
             navigate(`/product/${pagetype}/${product.ProductId}`)
            }}>
                <h3>{product.ProductName}</h3>
                {/* <p>{product.description}</p> */}
                {
                    product.SalesPrice > 0 ?
                        <p>$ {
                            //  add .00 if price is integer
                            product.SalesPrice % 1 == 0 ?
                                product.SalesPrice + '.00'
                                :
                                product.SalesPrice
                        }
                            <span>${
                                (product.SalesPrice + (product.SalesPrice) * (0.2)).toFixed(2)
                            }</span>
                        </p>
                        :
                        <p>$ 0.00</p>
                }
            </div>

            {/* <Link to={`/product/${product.ProductId
                                            }`}
                                            style={{ textDecoration: 'none', width: '100%', display: 'flex', justifyContent: 'center' }}
                                        > */}
            {
                selecetedproduct == product.ProductId &&
                <div className='incrdecr'>
                    <button className='decr'
                        onClick={() => {
                            if (quantity > 1) {
                                setquantity(quantity - 1)
                            }
                        }}
                    >-</button>
                    <span className='count'>{
                        quantity
                    }</span>
                    <button className='incr'
                        onClick={() => {
                            setquantity(quantity + 1)
                        }}
                    >+</button>
                </div>
            }
            {
                selecetedproduct == product.ProductId ?
                    <button
                        onClick={() => {
                            addtocart(product, quantity)
                        }}
                    >Add to cart</button>
                    :
                    <button
                        onClick={() => {
                            checkaddon(product)
                        }}
                    >Buy</button>
            }
        </div>
    )
}

export default ProductCard