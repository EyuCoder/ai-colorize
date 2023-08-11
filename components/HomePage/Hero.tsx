'use client';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';

const Hero = () => {
  return (
    <div className='my-6'>
      <ReactCompareSlider
        className='h-[30rem] rounded-xl shadow-xl'
        position={50}
        itemOne={
          <ReactCompareSliderImage
            srcSet='/compare/original.jpg'
            alt='Image one'
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            srcSet='/compare/color.png'
            alt='Image two'
          />
        }
      />
    </div>
  );
};

export default Hero;
