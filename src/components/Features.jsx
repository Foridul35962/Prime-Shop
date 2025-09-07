import { FaTruck, FaLock } from 'react-icons/fa';
import { FiRotateCcw } from 'react-icons/fi';
import { FaClock } from 'react-icons/fa6';


const allFeatures = [
    {
        icon: FaTruck,
        text: 'Free Shipping',
        subText: 'On orders over $100'
    },
    {
        icon: FaLock,
        text: 'Secure Payment',
        subText: '100% protected payments'
    },
    {
        icon: FiRotateCcw,
        text: 'Easy Returns',
        subText: '30-day return policy'
    },
    {
        icon: FaClock,
        text: '24/7 Support',
        subText: 'Dedicated customer service'
    },
]

const Features = () => {
  return (
    <div className='bg-gray-200 dark:bg-gray-800 dark:text-white py-10 md:py-0 md:pb-13 md:px-5 lg:px-0'>
        <div className='flex items-center flex-col gap-10 md:flex-row md:justify-evenly w-full'>
        {
            allFeatures.map((feature,idx)=>(
                <div key={idx} className='flex items-center gap-5'>
                    <feature.icon className='text-3xl'/>
                    <div>
                        <p className='text-lg font-semibold'>{feature.text}</p>
                        <p className='text-sm'>{feature.subText}</p>
                    </div>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Features