import React, { useState } from 'react';
import { Slider } from "@nextui-org/react";
import { Switch } from "@nextui-org/react";

const Card = () => {
    const [billingType, setBillingType] = useState<'monthly' | 'yearly'>('monthly'); // 'monthly' or 'yearly'
    const [sliderIndex, setSliderIndex] = useState<number>(2); // Default index corresponding to 100K page views
    const [price, setPrice] = useState<number>(16); // Default price for 100K page views

    const pageViewOptions = [
        { views: '10K', price: 8 },
        { views: '50K', price: 12 },
        { views: '100K', price: 16 },
        { views: '500K', price: 24 },
        { views: '1M', price: 36 },
    ];

    const handleSliderChange = (value: number | number[]) => {
        const index = Array.isArray(value) ? value[0] : value;

        // Ensure the index is within the bounds of pageViewOptions
        if (index >= 0 && index < pageViewOptions.length) {
            setSliderIndex(index); // Update slider index
            setPrice(pageViewOptions[index].price); // Set price based on slider index
        }
    };

    const toggleBilling = () => {
        setBillingType(billingType === 'monthly' ? 'yearly' : 'monthly');
    };

    const getDisplayedPrice = () => {
        if (billingType === 'yearly') {
            return (price * 0.75).toFixed(2); // Apply 25% discount for yearly billing
        }
        return price.toFixed(2);
    };

    return (
        // <div className='bg-white overflow-hidden rounded-md h-[30rem] w-[90%] lg:w-[40rem] z-999 shadow-lg md:w-full'>
        <div className='bg-white overflow-hidden rounded-md h-[30rem] w-full lg:w-[40rem] z-999 shadow-lg'>
            <div className='p-6 md:p-10'>
                <div className='flex flex-col md:flex-row justify-between items-center p-5'>
                    <div className='text-zinc-400 text-xs heebo-font tracking-widest font-semibold'>
                        {pageViewOptions[sliderIndex] ? pageViewOptions[sliderIndex].views : '0'} PAGEVIEWS
                    </div>
                    <div className='currency text-3xl font-bold flex items-center tracking-wide'>
                        ${getDisplayedPrice()}<span className='text-sm text-zinc-400 ml-1'>/month</span>
                    </div>
                </div>
                <div className='slider mx-auto max-w-xs md:max-w-md'>
                    <Slider
                        value={sliderIndex} // Use controlled value
                        onChange={handleSliderChange} // Handle slider changes
                        className="w-full"
                    />
                </div>
                <div className='flex flex-row flex-nowrap md:w-full text-xs font-medium mt-6 md:mt-10 justify-center items-center text-zinc-400'>
                    <div className='mr-2 font-bold'>Monthly Billing</div>
                    <div className='toggle-bar mr-2'>
                        <Switch checked={billingType === 'yearly'} onChange={toggleBilling} size="sm" />
                    </div>
                    <div className='mr-2 font-bold'>Yearly Billing</div>
                    <div className='tracking-wide text-[#DB412D] bg-accent rounded-2xl py-1 px-2'>
                        25% discount
                    </div>
                </div>


            </div>
            <hr />
            <div className='p-6 md:p-10 flex flex-col md:flex-row justify-between items-center'>
                <div className='text-zinc-400 font-semibold leading-8 md:text-wrap md:leading-3 md:text-sm'>
                    <div className='flex items-center gap-5 mb-2'>
                        <div><img src='./interactive-pricing-component-main/images/icon-check.svg' alt="Check" /></div>
                        Unlimited websites
                    </div>
                    <div className='flex items-center gap-5 mb-2'>
                        <div><img src='./interactive-pricing-component-main/images/icon-check.svg' alt="Check" /></div>
                        100% data ownership
                    </div>
                    <div className='flex items-center gap-5 mb-2'>
                        <div><img src='./interactive-pricing-component-main/images/icon-check.svg' alt="Check" /></div>
                        Email reports
                    </div>
                </div>
                <div className='mt-6 md:mt-0'>
                    <button className='bg-[#081154] rounded-3xl text-[#93cfcf] px-10 py-3 md:px-16'>
                        Start my trial
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
