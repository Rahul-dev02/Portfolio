"use client"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ClientReviewCard from './ClientReviewCard';
import Image from 'next/image';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


const ClientReview = () => {
  return (
    <div className='pt-16 pn-16'>
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl text-white font-bold">
        Kind words from satisfied <br/> <span className='text-cyan-200'>cleints</span> 
      </h1>
      <div className="mt-16 w-[70%] mx-auto" >
<Carousel
  showDots={false}
  responsive={responsive}
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={4000}
>
   <ClientReviewCard
          image="/images/c1.png"
          name="Janny Doe"
          role="CEO, Landscape"
        />
   <ClientReviewCard
          image="/images/c2.png"
          name="Jhon Doe"
          role="UI & UX Desiner"
        />
   <ClientReviewCard
          image="/images/c3.png"
          name="Jassica"
          role="CEO, Tech Company"
        />
   <ClientReviewCard
          image="/images/c4.png"
          name="Jara Doe"
          role="Web Delloper"
        />
   <ClientReviewCard
          image="/images/c5.png"
          name="Jora Doe"
          role="CEO, Design Studio"
        />
</Carousel>;
      </div>
    </div>
  )
}

export default ClientReview
