import React from 'react'
import Carousel from 'react-grid-carousel'
import f1 from '../media/food/f1.jpg';
import f2 from '../media/food/f2.jpg';
import f3 from '../media/food/f3.jpg';
import f4 from '../media/food/f4.jpg';
import f5 from '../media/food/f5.jpg';

const Gallery = () => {
    let gallery = [f1, f2, f3, f4, f5, f4, f3, f2, f1, f5];


    return (
        <React.Fragment>
            <Carousel
                cols={5}
                rows={1}
                gap={1}
                autoplay={3000}
                hideArrow
                loop
                className="Carousel"
            >
                {gallery.map((value, index) => {
                    return <Carousel.Item key={index}>
                        <img className="Gallery-Food" src={value} />
                    </Carousel.Item>
                })}

            </Carousel>
        </React.Fragment>
    );
}

export default Gallery;