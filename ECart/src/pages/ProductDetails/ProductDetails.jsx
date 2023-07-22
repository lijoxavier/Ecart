import React, { useEffect, useState } from 'react'
import './product-details.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "font-awesome/css/font-awesome.min.css";
import StarRating from '../../Components/StarRating/StarRating';
import { Rating } from 'react-simple-star-rating'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BASEURL } from '../../Utils/Utils';
const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false

};
const ProductDetails = () => {
    const [product, setProduct] = useState([{}])
    const [rating, setRating] = useState(0)
    const { id } = useParams()

    const getSingleData = async () => {
        const response = await axios(`${BASEURL}/${id}`)
        setProduct(response?.data)
        const rating=Math.round(response?.data[0].rating)
        setRating(rating)

    }
    console.log(rating,"==rating");
    useEffect(() => {
        getSingleData()
    }, [])

    const handleRating = (rate) => {
        setRating(rate)
    }
    const imageArray = product[0].images
    return (
        <div className=' min-h-[calc(100vh-76px)]  flex items-center justify-center text-black mx-auto overflow-hidden' data-aos="fade-up">

            <div className="pro flex  flex-wrap py-4">

                <div className="slider  w-[400px] p-4 mx-auto">
                    <Slider {...settings}>
                        {imageArray?.map((image) => (
                            <div>
                                <img src={image} alt="" />
                            </div>
                        ))}

                    </Slider>
                </div>
                {product.map((prod) => (
                    <div className="card-detail flex-grow pl-6">
                        <h3 className='font-bold text-3xl mb-2'>{prod.title}</h3>
                        <h1 className="brand max-w-[300px]  text-lg bg-lime-500 rounded-md text-center p-[2px] mb-2 ">{prod.brand}</h1>
                        <p className="info mb-2 max-w-lg">{prod.description}</p>
                        <p>Price: <span>{prod.price}</span></p>

                        <div className='inline-flex items-center'>
                            <span>Rating:</span>
                            {/* <div className="rate">
                            <input type="radio" id="star5" name="rate" value="5" />
                            <label htmlFor="star5" title="text">5 stars</label>
                            <input type="radio" id="star4" name="rate" value="4" />
                            <label htmlFor="star4" title="text">4 stars</label>
                            <input type="radio" id="star3" name="rate" value="3" />
                            <label htmlFor="star3" title="text">3 stars</label>
                            <input type="radio" id="star2" name="rate" value="2" />
                            <label htmlFor="star2" title="text">2 stars</label>
                            <input type="radio" id="star1" name="rate" value="1" />
                            <label htmlFor="star1" title="text">1 star</label>
                        </div> */}
                            <div className='rating'
                             style={{
                                direction: 'ltr',
                                fontFamily: 'sans-serif',
                                touchAction: 'none'
                            }}>
                                
                                <Rating
                                
                                    onClick={handleRating}
                                    ratingValue={rating}
                                    initialValue={rating}
                                    size={30}
                                   
                                    transition
                                    // readonly
                                    fillColor='orange'
                                    emptyColor='gray'
                                />
                            </div>
                            <span>{rating}</span>
                        </div>


                        <p className='mb-2'>Stocks: <span>34</span></p>
                        <button className='bg-orange-600 text-white py-2 px-4 rounded font-bold'>Buy now</button>
                    </div>
                ))}
               
            </div>



        </div>
    )
}

export default ProductDetails