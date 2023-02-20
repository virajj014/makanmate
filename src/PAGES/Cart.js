import React from 'react'
import Footer from '../COMPONENTS/Footer/Footer'
import Navbar from '../COMPONENTS/Navbar/Navbar'
import './Cart.css'
const Cart = () => {
    const [active, setActive] = React.useState(1);
    return (
        <div className='cart'>
            <Navbar />
            <div className='header'>
                <img src={"https://makanmate.com/wp-content/uploads/2022/09/catering-chef-cooking-1536x864.jpg"} alt='about' />
                <h1>Your Cart</h1>
            </div>
            <div className='progress'>
                {
                    active === 1 ?
                        <div className='c11'
                            onClick={() => setActive(1)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                            <p>My Cart</p>
                        </div>
                        :
                        <div className='c1'
                            onClick={() => setActive(1)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                            <p>My Cart</p>
                        </div>
                }
                {
                    active === 2 ?
                        <div className='c11'
                            onClick={() => setActive(2)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                            </svg>
                            <p>Shipping Info</p>
                        </div>
                        :
                        <div className='c1'
                            onClick={() => setActive(2)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                            </svg>
                            <p>Shipping Info</p>
                        </div>
                }

                {
                    active === 3 ?
                        <div className='c11'
                            onClick={() => setActive(3)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                            </svg>
                            <p>Payment</p>
                        </div>
                        :
                        <div className='c1'
                            onClick={() => setActive(3)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                            </svg>
                            <p>Payment</p>
                        </div>
                }

                {
                    active === 4 ?
                        <div className='c11'
                            onClick={() => setActive(4)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                            </svg>

                            <p>Confirmation</p>
                        </div>
                        :
                        <div className='c1'
                            onClick={() => setActive(4)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                            </svg>

                            <p>Confirmation</p>
                        </div>
                }
            </div>

            {
                active == 1 &&
                <div className='cartcont'>
                    <table className='carttable'>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Tax</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                        </tr>

                        <tr>
                            <td>
                                <div className='product'>
                                    <img src='https://makanmate.com/wp-content/uploads/2023/02/1-30-300x300.jpeg' alt='product1' />
                                    <p>Marinated Chicken Satay with Peanut Sauce 25pcs</p>
                                </div>
                            </td>

                            <td>
                                <p>$ 10.00</p>
                            </td>

                            <td>
                                <p>$ 0.00</p>
                            </td>

                            <td>
                                <div className='quantity'>
                                    <button className='minus'>-</button>
                                    <p>1</p>
                                    <button className='plus'>+</button>
                                </div>
                            </td>

                            <td>
                                <p>$ 10.00</p>
                            </td>

                            <td>
                                <div className='delbtn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                </div>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <div className='product'>
                                    <img src='https://makanmate.com/wp-content/uploads/2023/02/1-30-300x300.jpeg' alt='product1' />
                                    <p>Marinated Chicken Satay with Peanut Sauce 25pcs</p>
                                </div>
                            </td>

                            <td>
                                <p>$ 10.00</p>
                            </td>

                            <td>
                                <p>$ 0.00</p>
                            </td>

                            <td>
                                <div className='quantity'>
                                    <button className='minus'>-</button>
                                    <p>1</p>
                                    <button className='plus'>+</button>
                                </div>
                            </td>

                            <td>
                                <p>$ 10.00</p>
                            </td>

                            <td>
                                <div className='delbtn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                </div>
                            </td>

                        </tr>
                    </table>
                    <div className='subtotal'>
                        <p>Subtotal</p>
                        <p>$ 20.00</p>
                    </div>
                </div>
            }
            {
                active == 2 &&
                <div className='shippingcont'>
                    <div className='previous'>
                        <h2>Previous Address</h2>
                        <div className='radio'>
                            <input type='radio' name='address' id='address1' />
                            <p>My address 1</p>
                        </div>

                        <div className='radio'>
                            <input type='radio' name='address' id='address2' />
                            <p>My address 2</p>
                        </div>

                    </div>
                    <h2>OR</h2>
                    <div className='shippingadd'>
                        <input type='text' placeholder='Enter New Address' />
                        <button>Save</button>
                    </div>
                </div>
            }

            {
                active == 3 &&
                <div className='paymentcont'>
                    <div className='left'>
                        <h2>Select Payment Method</h2>

                        <div className='paymenttypes'>
                            <div className='c1'>
                                <input type='radio' name='payment' id='payment1' />
                                <img src='https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png' alt='paypal' />

                            </div>

                            <div className='c1'>
                                <input type='radio' name='payment' id='payment2' />

                                {/* razor pay */}
                                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAY0AAAB/CAMAAAAkVG5FAAAAw1BMVEX///8HJlQzlf8AIFEAAEI+Tm8ADUkAIlIAAEUAAEYAJFMAAEMAGE0AHU8AAEAAHlAACUghOGAAFkwAE0vs7vHW2d67wMoAF0wACEj4+frk5up2f5SwtcEpkv99hJhYZH/Dx9BPXHlGVXQSjP+KkqOjqbZibYY5mP8PK1iYn64yRGifpbPMz9dZpf+ZxP90sf/R5P/H3v8AADkqPWNtd47q8//b6v9Inv+00/+u0P+CuP+hyf9hqP8cMlzo8v+Nvv8AAC8CAnkoAAAOZUlEQVR4nO1caXuiyBaGgOzgAtqCu6Ktxp5etCe9OT3//1ddljqnFiBzk/CM9yb1fhOLoqizv6dUUSQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQk3iQ+33oBEoivD3/cegkSgJ+bzZ+3XoNEiT8fZnezWy9CosTvTSaMj7dehUSOT+9nd3d3s2+3XodEhh+buxybv269EAnl892sEMbd+1uvRCL+WBpG5qh+3Hotbx7fZsQwMmnI2u+2+PoLDCMPG/Gtl/O28X0zo8K4e7j1ct40/vrAGEbmqCQtckP85Awjc1Sfbr2it4ucCOHB0CKR1q/ifFxM7k+3W/Erxu/NnSiMX/TbkW3WwfdCy7okt1v160RJhAjS+E6/v3hqI7xgfruFv0b8qBhGHjYYNt13mqWhquPF7Zb+6vCZ1nt3jIkwYSNxHxOGqtrp7Vb/yvCdGsZs85MW4gybvjUel4YTyDqxJfxCAWx+xZ+oNBg2feGTbdc8BOe8jO3t1v+6gBxhvv+/qWi+0iFgGtpqDpgs9vqARvLL7db/qvCJSGPzMfc279FrMbTIySKbbg3ZO6MUrqva+l9e9WvFH7PSMAq+9ivGkNlvOuQQgkMS7p2COLTOv7ji14yHwjBIJ+NbLZve0co993fizVen6RuJ5yC3htn7nJEaZmnqRxo2aJYUB42xetEtvxnIFLcVfJvNNoVTSv8eKQo1jQ90yHJMpKFXOJA1sZreiL0aj9LdurOYj8ThT0W0PEwW6876ko6ifxg63E4Wi8m0LtNe5qtZzadNU0TT+aLT2aX/A5Tbj81DXnOf9oYbK3/SsPGTDpmT3MlRK3dDVRgwb3pa6OOBr2n+wLIO2ef4i1HiS5kDnOBzBWMuLsX3R90KvWymbKqe3hFku7DKm/Q8nZv2dcPzfe/vXF/SgHyTu89kYtuhp2ldLxtZJ4/pUTey5Xaz5e7zRyzJ8noB88HQReOPyON7X9qk6TbFtl8CMw/EtPZjaZGrSdLYiXgzWI12xEtJR4fiJE/CsklHZJBJ9hpzggrYB0QT3dDYLzWrw22mQULWeKQM+1a5RPOcf3Mk99nZ5s4DhmHz7Ir6L/cWfYqTM26ge35O90Q63CoGxg55S336xA1/DF/zXR952QrCA1sIsmw6rKhX8TwQ3nu4pDTgtlANV8qE7Id/4W+qgnnAQfcq1JhvMwn2ENI5XZkGRF3K8BWDwdpKovKSdwIuRVeUnW5yAzJj7pMrZZC0yRfmkb8x7ZEntp2+xAs9f3HrRAtBjhaZQu2ni4Z+IFrveHBlZakC3GWfbKtRigxzgirQ30XHXh1NaY7pCsDCtNU0wLHWUqEG618S1xRn6LLrj/bvhO8dF6XsFh4IVIe+YoEheQmHm68FTO1Cdx2LFoICm05sUlQPJQWjsYhpxGfx7bK7QNdAmJgTVIee4V3tbv0If4UPx23qMOqv59/MiS16h4EojEwlDnT9ybhqpQ4s19GKMWDYqsXlBw4ZFbQb+aM10YXcTf5BwwZzyDAkqjc4cDdOz2AzHhTiR+qjtYFhDIqXhR0xr+WgeWOrJCSRcqijsufTGEwc0sHTUAtjjKhbCAvCnONkXzl+aITMBIyORyEKqxhVuka4RmIY8qUcDbEjscVoN7G/x5Cbu8kHSqfTIWi62mI+IbisHBpjTY+ozQ611NPX6Xabnlm/5ZGelBHoLOhOaXaZnSQoDF/vpNPR9mKjDmOc5y3M9IrdDLfF7VROjhFe7rfby5g+he7qFWZ1Qntx2G7nGhtkSAxDUmi8pFsyJZFJOystIjmOUbMyN8nQIswhw3tcIyVw/S71AaZFUrwtLNxxIZWcMuIYkxAds6B+UPX35KY9zG2vyMzRETwXJtlzyliqnnue32/vJ2qR304p+69BuRqv0CCxggX9Vh09Jeo0Z0RM/CqmMEzlG1lwY5vJLZv/5OHocy0tsmrw4bCJA9gyVGmdpkb3dGvqWyArkHXYAQuDXdKpZ4wNcZY+VQcdG/PL4n60A/9MH3nFtIuY6Ai22ezSPd2h0DCGDchbvaNOCTJoq8U2wvDKtpBySvxHLZtuP9aEdSzYRGUFu6AvmafgM2p5xagPW29DprjE1IANUxhsiCFG1B3ZS35OzIy1PnMVLQa4f5+IxxwwmWKCtoxUT5WjS8lUXov950nAJRx5+lnPpttqI0yD2u8J9mfMBXvU1JC7TF7eA7ujpS4osc+966gH0ijdPm6uowsVBIY51WITcuwlk6rngGk7dz+KssiVc4AeYEZ5guTWaK3fudSEgjhzk3/VsunpQG2Ccb2n44Cx0vg8mCp1NRdcQunlBFg9jojwHW4vqU4Q28BoY4mlMIY54567DjkYyQMgYA748y40HYcrmFTZ5ecYep6cC3gJ4p0uuB8zs+rv1FExhwyPmKFqJdCkfFbbh2AaLr/rKI1xZRVb2CCTkdTZrN0lSlyWQsJmZMX/QZgzNf46PKy0UZq48goOlSrtnqEekCcvyAuFFZromZiOKyl//vIMm07HooM2z+sCHdXFpPhI9Rd2XTAN7Kj7FSc7h5l9k4ZRFKqQrsDuOWE5DNyRGDQUBSYQPCPNjQpjahC6MqjcjTeWPhISR6ieXopoZVXjcu4maUbFHjIcc4vJkWBd4dElQYkotkDMhuvKAiJBeGTUE/yiKFQQdlnfoTsiwmGAqhxE9dcLV4c1ictHnQiiC1PrwY1FwZG45H1Ewuu5CJjKFNHIpiMzYDNTQIygOR4WSQKXhZrl8roeH0EL+ZNxEMPFmN/nr4M7qh6OAHGaQmGG4cRmPzl7fhQkC6yU4WXDPA71IbmtyUmeg1OF11NL91vPpu+h1cpuGmY06F6BwzPZrJIZ6fBePHEwHeZcheAWmq7HNk9EMoAwJzYjUX477pPgqJBuZphZMMvcqc3J6/htHcqozZFylftQx6YnNaUom0VCbMbXE2IbhA1eiU8WpAIB78CoX+SDK4YNp7xfiKwUTex/bNFuSAarQZphzXV4dqaPS0hux//UifxvcazymoXKxY+z6ZynQfeK2wFpX8inlULshEmBAjcxqydAExO6jGfwFqXGN7mjal0CoHlqLmYsPoTu0wj9LfO2IPrsYdDg0l/cYiagRSyLMUeLMIcMoXgT6H2chLx0XLvrDJvEKjES8b4v8jwTsdQqsYRdIqEZhPOuQqFOhJodAMlEabs4nzAKKA+u5Yw7tgdDH7R2lG9U113Ig8LvR9l0IVxCNAGHgIwCnzqhn2PDyQ7czLtzpZjd1bdSIB8lq6BRZClOYILl8/uMlXdQXJ7W0uSU4+T9LaVayOKqxwOei0ldd4Fn05mf7GOAEHQekyrimXAcHxZB1xgljrE5ZKyUCiiPwl4FYsghFobuSBfFSdl0Lm5gXkqiM/otgx0VjZ26m5W1QJu2ldwqjFaz4Nn0ukOGQrjEH9eQ3Ufb4DzaAtkXVOJoD/vt1tWyNJ9mHPpUZMDg6dXjpvQsPZsDRsAQgjjRNrqMRsTY71Bd7m2F9liLHaakLmzkbHr9IUOwATFxxcSMvDTGDXWAmxytKRXmEiUeYu/T4sM9AVYFTHzGMNMF9+U0FCUsm666qN8nbMiCOJeUWUSbH6poAoKf5H8uIdalL8G07ocYuZv8UXvIEDZCzN5xGhCTg5masSoMeZi61MBBiUd4nsBLkyGPcktwm/zrKF9HNEXe3+kRjU0aipIMLBWqp3mMiJcr2koEUotJZfR5Meq0o0cdxLflWWyrreRW4ZSHIg8KtAfLsOnLujZk8QXkAg4p0S90Xt/qXa+G9Y5xiUSJh1/oNc/ioJOi2EepmmNrf+26Blyg1Dn1+uLbDbnK9p3rX1WLNmHNAeoZ00z3XO+6t23WGwl5L5eGVjjjl6D2N0qZN2VoEeYn++iQxL4dfW3iYpfcPjjly+I+ECVuPtaG6nhgF2g6dNNM2odAIrJylAkf0IV1MCph2jTNStmVOKVhO9gm14VpmXdrs8MkKA9B3muvZ9Mhr6/w1niADL1Fv1pU2mgwpGJ/pKeL6rivP/rmMe3ShjxPoWGuu6vOoo0Zv1ZTdWl7uKkrJnuYQdIDGa2gVjtzvXz8kGE1XOI84MOGgZCsafop5VmfuIY7JnBseMvEqhGHqS/oLpzqCubyAViDjlLRCRhnzt9vRXF4ZtSB5EBMMGhS1e7xqXWd5jWz6Q00g8KYApZ7U04czvic4I87yJhHerqMOiaquJGafV0yj04b+Fe+ZD9zdJwXiGnpnBNHLu64gWVncpaw1R/Gx4FWgywofNrMAOwhw7Ac0K327RYDcrOBCzxpPa3cfse3vEwACTytLICzIq7u6QXGrDqmroG/8HR8IxAOpx+98p5q8y0lJx2LRG+BnQMtDHbVozZbN8RDne55mZNU5G09cSgyBP3KLC/B6dypQeZHvn8APDC0CI6oFmrpkXx1ZNRl2rEs27Z0b1fs3wjGkPx2VffwEmdOHePpwtOzmbKptMW9sJFxH568FBd15tj0087IJrHc8fq+NimND2e9WO5+fmJf6SgaAJ4TC/7P/sIjTk6nYSsJeTTMZho+KWZW6atkeBo+toNx/pB/egYlfGsLVol6YGfLajPxwXZfax2mtwGgr7qt/j53DkmD3WIR/gYAzHfdObpnA9p97XWY3gaSmvMeL0YM7b72OkxvA8301QuwhuS2UtxIPIpm+ur5OODprBbt7U0ANq7FvwOCX/epPfnnBE8D0lduezUa/K6n3SztLQDoK9NpbcoLcF2uTG6fCDgRUf2LgecC+/Fumx2mNwHsuFT/YuCZiPAcjPwPzadi9KVX4ktbXqXvlhPaofzPxqdiOAK0NGEyhQn/z5hbCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCYln4T/KHg6z4t0jQwAAAABJRU5ErkJggg==' alt='razorpay' />
                            </div>

                        </div>

                        <div className='paymentagreement'>
                            <input type='checkbox' name='agreement' id='agreement' />
                            <label htmlFor='agreement'>I agree to the <a>terms and conditions</a></label>
                        </div>
                    </div>

                    <div className='right'>
                        <div className='order'>
                            <h3>Order Summary</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <td>Product</td>
                                        <td>Total</td>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>
                                            Marinated Chicken Satay with Peanut Sauce 25pcs
                                        </td>
                                        <td>
                                            $ 25.00
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            Marinated Chicken Satay with Peanut Sauce 25pcs
                                        </td>
                                        <td>
                                            $ 25.00
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className='c1'>
                                <p>Subtotal</p>
                                <p>$ 50.00</p>
                            </div>

                            <div className='c1'>
                                <p>Shipping</p>
                                <p>$ 0.00</p>
                            </div>

                            <div className='c1'>
                                <p>Tax</p>
                                <p>$ 0.00</p>
                            </div>
                        </div>
                    </div>

                </div>
            }
            {
                active == 4 &&
                <div className='confirmationcont'>
                    <div className='c1'>
                        {/* tick */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>
                        <h2>Thank You For Your Order</h2>
                    </div>


                    <div className='c2'>
                        <h2>Order Summary</h2>
                        <div>
                            <p>Order Number</p>
                            <p>123456789</p>
                        </div>

                        <div>
                            <p>Order Date</p>
                            <p>12/12/2020</p>
                        </div>

                        <div>
                            <p>Name</p>
                            <p>John Doe</p>
                        </div>

                        <div>
                            <p>Email</p>
                            <p>xyz@gmail.com</p>
                        </div>

                        <div>
                            <p>Order Subtotal</p>
                            <p>$ 50.00</p>
                        </div>

                        <div>
                            <p>Payment Method</p>
                            <p>Credit Card</p>
                        </div>

                        <div>
                            <p>Shipping Address</p>
                            <p>1234 Main Street, New York, NY 10001</p>
                        </div>

                        <div>
                            <p>Shipping Charges</p>
                            <p>$ 0.00</p>
                        </div>

                        <div>
                            <p>Tax</p>
                            <p>$ 0.00</p>
                        </div>

                        <div>
                            <p>Total</p>
                            <p>$ 50.00</p>
                        </div>

                    </div>

                    <div className='c3'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Sno.</th>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Marinated Chicken Satay with Peanut Sauce 25pcs</td>
                                    <td>1</td>
                                    <td>$ 25.00</td>
                                </tr>

                                <tr>
                                    <td>2</td>
                                    <td>Marinated Chicken Satay with Peanut Sauce 25pcs</td>
                                    <td>1</td>
                                    <td>$ 25.00</td>
                                </tr>
                            </tbody>
                        </table>

                        <div>
                            <p>Subtotal</p>
                            <p>$ 50.00</p>
                        </div>

                        <div>
                            <p>Shipping</p>
                            <p>$ 0.00</p>
                        </div>

                        <div>
                            <p>Tax</p>
                            <p>$ 0.00</p>
                        </div>

                        <div>
                            <p>Total</p>
                            <p>$ 50.00</p>
                        </div>
                    </div>
                </div>
            }


            {
                active == 1 &&
                <div className='btns'>
                    <div></div>
                    <button className='nextbtn' onClick={() => setActive(active + 1)}>Next</button>
                </div>
            }

            {
                active == 2 &&
                <div className='btns'>
                    <button className='backbtn' onClick={() => setActive(active - 1)}>Back</button>
                    <button className='nextbtn' onClick={() => setActive(active + 1)}>Next</button>
                </div>
            }
            {
                active == 3 &&
                <div className='btns'>
                    <button className='backbtn' onClick={() => setActive(active - 1)}>Back</button>
                    <button className='nextbtn' onClick={() => setActive(active + 1)}>Next</button>
                </div>
            }

            {
                active == 4 &&
                <div className='btns'>
                    <button className='backbtn' onClick={() => setActive(active - 1)}>Back</button>
                    <button className='nextbtn' onClick={() => { }}>Place Order</button>
                </div>
            }

            <Footer />
        </div >
    )
}

export default Cart