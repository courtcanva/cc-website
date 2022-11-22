import Image from 'next/image';
import pic1 from '../public/template/1.png';
import pic2 from '../public/template/2.png';
import pic3 from '../public/template/3.png';
import pic4 from '../public/template/4.png';
import pic5 from '../public/template/5.png';
import pic6 from '../public/template/6.png';

const Template = () => {
  const arr = [
    [pic1, 'animate-template1'],
    [pic2, 'animate-template2'],
    [pic3, 'animate-template3'],
    [pic4, 'animate-template4'],
    [pic5, 'animate-template5'],
    [pic6, 'animate-template6'],
  ];

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-12 pt-12 pb-20 bg-template">
      <h2 className="text-h2">Template Collection</h2>
      <p className="text-p text-white85 mb-8">Your Design. Your court.</p>
      <div className="flex cursor-pointer">
        {arr.map((e, index) => {
          return (
            <Image
              key={index}
              src={e[0]}
              alt=""
              className={`${index === 0 ? '-ml-3' : '-ml-52'} flex-1 ${
                e[1]
              } hover:z-0`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Template;
