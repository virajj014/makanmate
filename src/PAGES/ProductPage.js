import React from 'react'
import Footer from '../COMPONENTS/Footer/Footer'
import Navbar from '../COMPONENTS/Navbar/Navbar'
import './ProductPage.css'
const ProductPage = () => {
    const [imageset, setimageset] = React.useState([
        {
            "id": 1,
            image: 'https://makanmate.com/wp-content/uploads/2023/02/1-30-300x300.jpeg'
        },
        {
            "id": 2,
            image: 'https://makanmate.com/wp-content/uploads/2023/02/Norwegian-Salmon-Fillet-Fresh-Frozen-300x300.jpg'
        },
        {
            "id": 3,
            image: 'https://makanmate.com/wp-content/uploads/2023/02/1-30-300x300.jpeg'
        },
        {
            "id": 4,
            image: 'https://makanmate.com/wp-content/uploads/2023/02/Norwegian-Salmon-Fillet-Fresh-Frozen-300x300.jpg'
        }
    ])
    const [activeimage, setactiveimage] = React.useState(imageset[0])

    const [count, setcount] = React.useState(1)
    return (
        <div className='productpage'>
            <Navbar />
            <div className='pc1'>
                <div className='c11'>
                    <div className='imgset'>
                        {imageset.map((item) => {
                            return (
                                <div className='imgsmall'
                                    onClick={() => {
                                        setactiveimage(item)
                                    }}
                                >
                                    <img src={item.image} 
                                        className={activeimage.id === item.id ? 'active' : ''}
                                    />
                                </div>
                            )
                        })}
                    </div>
                    <div className='imgbig'>
                        <img src={activeimage.image} />
                    </div>
                </div>
                <div className='c12'>
                    <h1 className='head1'>Marinated Chicken Satay with Peanut Sauce 25pcs</h1>


                    <div className='c121'>
                        <p className='price'>
                            $25
                        </p>

                        <div className='incrdecr'>
                            <button className='decr'
                                onClick={() => {
                                    if (count > 1) {
                                        setcount(count - 1)
                                    }
                                }}
                            >-</button>
                            <p className='count'>{
                                count
                            }</p>
                            <button className='incr'
                                onClick={() => {
                                    setcount(count + 1)
                                }}
                            >+</button>
                        </div>
                    </div>

                    <div className='btncont'>
                        <button >Add to cart</button>
                        <button >Buy now</button>
                    </div>
                </div>
            </div>

            <div className='pc2'>
                <h1 className='head2'>Description</h1>
                <p className='desc'>
                    Basically, tom yum is a soup dish originated in Laos and Thailand. It is also known as ‘tom yam’ in Royal Thai General System of Transcription. Since the time of its origin, this soup is popular in Thai cuisine as well as in neighboring cuisines such as Malay cuisine as well as in cuisine of Singapore. The term tom yum is also associated with the financial crisis aroused in Asia in the year 1997. The crisis is often called as ‘Tom Yum Goong Crisis’.
                    <br/><br/>
                    Tom yum is referred to the two identical soups hailing from South East Asian countries. The basic characteristics of this soup are the hot and sour taste along with fragrance of distinct herbs.
                    <br/><br/>
                    Preparation method:
                    1) Thaw fully<br/>
                    2) Heat on stovetop (stir frequently) or microwave (stir halfway through)<br/>
                    3) Serve<br/>
                    <br/><br/>
                    – Suitable for 1 pax only<br/>
                    – No added MSG and preservatives<br/>
                    – Product comes frozen<br/>
                    <br/><br/>
                    Every soup is prepared beforehand in our kitchen and packed. Every pack is filled with ingredients and is suitable for home cooking as there are no preservatives added. Recommended for housewife or young adult that wishes to cook at home.
                    <br/><br/>
                    Ingredients: Prawn, Dory Fish, Mussel, Tom Yum leaf, Squid, Red Chili & Green Chili, Garlic, Onion, Tom Yum Soup, Lemongrass.
                </p>
            </div>

            <Footer />
        </div>
    )
}

export default ProductPage