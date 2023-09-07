"use client"

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';

import { useAppSelector } from "@/redux/hooks";
import ResumeToPay from '@/components/ResumeToPay';

const Checkout = () => {

    //STATES

    //HOOKS

    const cartItems = useAppSelector(
        (state) => state.cart.cartItems
    );

    const router = useRouter()

    //FUNCTIONS

    useEffect(() => {
        if (localStorage.getItem("cart") === null) {
            router.push("/products")
        } else {
            let items = JSON.parse(localStorage.getItem("cart") || "")
            if (items.length === 0) {
                router.push("/products")
            }
        }
    }, [])

    return (
        <div className='p-[20px]'>
            <div className='font-[500] text-[23px] sm:text-[30px]'>Resumen de la orden:</div>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                <div className=''>
                    {
                        cartItems.map(item => {
                            return <li key={item.product.tail} className='flex border-[1px] p-[10px] my-[3px] '>
                                <div className='w-[20%] overflow-hidden'>
                                    <img className='w-[60%] min-w-[70px]' src={item.product.image} alt="imageProduct" />
                                </div>
                                <div className='w-[80%] p-[5px]'>
                                    <div className='font-[600] text-[18px] mb-[8px] flex'>
                                        {
                                            item.product.name
                                        }
                                    </div>
                                    <div className='mb-[8px] flex justify-between'>
                                        <span className='font-[500] text-[15px] mr-auto'>Precio:</span>
                                        <span>
                                            $
                                            {
                                                item.product.price
                                            }
                                        </span>
                                    </div>
                                    <div className='flex mb-[8px]'>
                                        <span className='font-[500] text-[15px]'>Cantidad:</span>
                                        <div className='ml-auto flex'>
                                            <div className='mx-[5px]'>
                                                {
                                                    item.qty
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' flex justify-between'>
                                        <span className='font-[500] text-[15px]'>Total producto:</span>
                                        <span>
                                            $
                                            {
                                                item.qty * item.product.price
                                            }
                                        </span>
                                    </div>
                                </div>
                            </li>
                        })
                    }
                </div>

                <ResumeToPay />
            </div>
        </div>
    )
}

export default Checkout