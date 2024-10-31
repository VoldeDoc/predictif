import { AccordionBody, accordionItems } from '@/components/Ui/accordion';
import Typing from '@/components/Ui/typed';

import LandingPageLayout from "@/components/Layout/LandingPageLayout";
import GaugeCharts from '@/components/Chart/gaugeChart';
import { CarouselHolder } from '@/components/Ui/carousel';

export default function Home() {
    return (
        <LandingPageLayout>
            <div className="container-sm mx-auto my-40 py-16 flex flex-col items-center rounded-lg hero" style={{ backgroundColor: '#EFF7FFB2' }}>
                <h3 className="text-center bg-white w-72 mx-auto">
                    <span className="text-red-700 font-bold">o</span> Fully Integrated Point-of-sale System
                </h3>
                <div>
                    <Typing />
                </div>
                <p className="text-center">
                    Predictivo™ assists thousands of game-loving bettors and traders
                </p>
                <p className="text-center">
                    in making smarter, data-driven betting decisions every day.
                </p>

                <div className="text-center space-x-4 pt-4 py-5 mb-5">
                    <button className="py-2 px-3 bg-red-800 rounded-md text-white">Get started</button>
                    <button className="py-2 px-3 bg-white rounded-md text-blueGray-700 border-2 border-blueGray-900">
                        Learn more
                    </button>
                </div>

                <div className="flex justify-center lg:ml-[-200px] my-8">
                    <GaugeCharts />
                </div>

                <div className="payment flex justify-between items-center bg-white rounded-md w-72 py-3 pl-6 space-x-3 pr-7 lg:mr-[800px]">
                    <div className="flex items-center space-x-2">
                        <img src="https://img.icons8.com/?size=100&id=pIPl8tqh3igN&format=png&color=000000" alt="" className='w-5 h-5' />
                        <div>
                            <h2 className="text-sm font-semibold">
                                Payment from #1032
                            </h2>
                            <p className="text-xs text-gray-500">Jan 21, 2019 3:30pm</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-end">
                        <div className="flex items-baseline">
                            <span className="font-medium text-lg">+ </span>
                            <p className="font-medium text-lg">$250,000</p>
                        </div>
                        <p className="text-green-500 text-sm">completed</p>
                    </div>
                </div>
            </div>


            <div className="container mx-auto mb-20">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2">
                        <img src="/assets/images/landingPage/Frame 4763.png" alt="" />
                    </div>
                    <div className="w-full lg:w-1/2 pt-3 text-black-700 pl-10">
                        <h2 className="text-4xl font-bold">Enhance Shop</h2>
                        <h2 className="text-4xl font-bold">Management Smoother</h2>
                        <h2 className="text-4xl font-bold">and More Efficient</h2>

                        <p className="py-7">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <hr />
                        <div className="paid flex py-7 space-x-4">
                            <div>
                                <button className="bg-red-900 px-8 py-4 rounded-lg"></button>
                                <h2 className="text-3xl py-4">Smooth Payments </h2>
                                <p>Duis aute irure dolor in velit reprehenderit in voluptate</p>
                            </div>
                            <div>
                                <button className="bg-red-900 px-8 py-4 rounded-lg"></button>
                                <h2 className="text-3xl py-4">Convenient shopping </h2>
                                <p>Duis aute irure dolor in velit reprehenderit in voluptate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="container mx-auto mt-20 mb-24">
                <div className="pos">
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-5xl font-bold text-black-700">Elevate your POS</h2>
                            <h2 className="text-5xl font-bold text-black-700">Experience with</h2>
                            <h2 className="text-5xl font-bold text-black-700">Personalized Reports</h2>
                            <p className="py-7">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo.
                            </p>
                            <hr />
                            <div className="paid flex py-10 space-x-4">
                                <div>
                                    <h2 className="text-5xl text-red-800">25%</h2>
                                    <h2 className="text-3xl py-4">Smooth Payments </h2>
                                    <p>Duis aute irure dolor in velit reprehenderit in voluptate</p>
                                </div>
                                <div>
                                    <h2 className="text-5xl text-red-800">15%</h2>
                                    <h2 className="text-3xl py-4">Convenient shopping </h2>
                                    <p>Duis aute irure dolor in velit reprehenderit in voluptate</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="bg-gray-300 px-14 py-48">
                                <GaugeCharts />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mb-20">
                <div className="text-center">
                    <h2 className="text-6xl font-bold ">A powerful betting tool to gain</h2>
                    <h2 className="text-6xl font-bold ">an edge over the bookmarks</h2>
                    <div className="py-7">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque </p>
                        <p>
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo.
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap pt-7 lg:flex-nowrap lg:gap-5">
                    <div className="w-full lg:w-1/2 pb-4">
                        <div className="pb-48 pt-9 px-10 rounded-xl border-2 shadow-md">
                            <h1 className="text-3xl">Data driven decision making</h1>
                            <p>
                                Identify your top-selling products, track sales trends, and adjust your inventory and
                                marketing strategies accordingly.
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 pb-4">
                        <div className="pb-56 pt-9 px-4 rounded-xl border-2 bg-blue-700 text-white shadow-md">
                            <h1 className="text-3xl pb-4">Payment processing</h1>
                            <p>Fast and secure payment processing is essential for customer satisfaction.</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container mx-auto mb-11">
                <div className="flex flex-wrap mx-4">
                    <div className="w-full lg:w-1/3 px-4 pb-4">
                        <div className="pb-48 pt-9 px-14 rounded-xl border-2 bg-red-800 text-white shadow-md">
                            <h1 className="text-3xl">Customer Loyalty</h1>
                            <p>Fast and secure payment processing is essential for customer satisfaction.</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 px-4 pb-4">
                        <div className="pb-48 pt-9 px-14 rounded-lg border-1 shadow-md">
                            <h1 className="text-3xl">Inventory Control</h1>
                            <p>Fast and secure payment processing is essential for customer satisfaction.</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 px-4 pb-4">
                        <div className="pb-48 pt-9 px-14 rounded-lg border-1 shadow-md">
                            <h1 className="text-3xl">Staff Management</h1>
                            <p>Fast and secure payment processing is essential for customer satisfaction.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-14 pt-20">
                <div className="flex flex-wrap lg:flex-nowrap">
                    <div className="w-full lg:w-1/2 flex flex-col justify-between">
                        <div className="flex flex-col text-left   mb-12">
                            <h2 className="text-5xl font-bold">Get Quick Answers</h2>
                            <h2 className="text-5xl py-4 font-bold">to Your Concerns</h2>
                            <p className="pb-10">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium totam rem aperiam perspiciatis
                            </p>
                        </div>
                        <div className="mt-auto  pt-12">
                            <p>Couldn’t find what you looking for?</p>
                            <p>write to us at</p>
                            <a href="mailto:support@domain.com" className='text-blue-600'>
                                Support@domain.com
                            </a>
                            <hr className='w-72' />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 lg:px-8 lg:py-8">
                        <AccordionBody items={accordionItems}/>
                    </div>
                </div>
            </div>
            <div className="container mx-auto my-10 px-4 sm:px-6 lg:px-8">
                <CarouselHolder />
            </div>
        </LandingPageLayout>
    );
}