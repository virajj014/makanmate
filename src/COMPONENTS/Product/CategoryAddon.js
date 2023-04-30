import React from 'react'

const CategoryAddon = ({product, index}) => {
    const [selectedcategoryaddon, setselectedcategoryaddon] = React.useState([])
    return (
        <div className='product1'
        >
            <div className='product1image'>
                <img src={product.ProductImageURL} alt='product' />
            </div>
            <div className='product1info'>
                <h3>{product.ProductName}</h3>
                <p>$ {product.SalesPrice}</p>
            </div>
            {
                selectedcategoryaddon.find((item) => item.product.ProductId === product.ProductId) ?
                    <div
                        className='product1incredecre'
                    >
                        <button
                            onClick={() => {
                                // // find the index of the product in the selectedcategoryaddon array
                                // const index = selectedcategoryaddon.findIndex((item) => item.product.ProductId === product.ProductId)

                                // // if the quantity is 1 then remove the product from the array
                                // if (selectedcategoryaddon[index].quantity === 1) {
                                //     const newselectedcategoryaddon = selectedcategoryaddon.filter((item) => item.product.ProductId !== product.ProductId)
                                //     setselectedcategoryaddon(newselectedcategoryaddon)
                                // }
                                // else {
                                //     const newselectedcategoryaddon = [...selectedcategoryaddon]
                                //     newselectedcategoryaddon[index].quantity = newselectedcategoryaddon[index].quantity - 1
                                //     setselectedcategoryaddon(newselectedcategoryaddon)
                                // }


                            }}
                        >-</button>
                        <span>{
                            selectedcategoryaddon.find((item) => item.product.ProductId === product.ProductId).quantity
                        }</span>
                        <button
                            onClick={() => {
                                // const index = selectedcategoryaddon.findIndex((item) => item.product.ProductId === product.ProductId)
                                // const newselectedcategoryaddon = [...selectedcategoryaddon]
                                // newselectedcategoryaddon[index].quantity = newselectedcategoryaddon[index].quantity + 1
                                // setselectedcategoryaddon(newselectedcategoryaddon)
                            }}
                        >+</button>
                    </div>
                    :
                    <button
                        onClick={() => {
                            setselectedcategoryaddon(
                                [
                                    ...selectedcategoryaddon,
                                    {
                                        quantity: 1,
                                        product: product
                                    }
                                ]
                            )
                        }}
                    >Add</button>
            }

        </div>
    )
}

export default CategoryAddon