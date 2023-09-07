"use client"

import React from 'react'

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import {
    totalCartItemsSelector,
    TotalPriceSelector,
    increment,
    decrement,
    remove
} from "@/redux/features/counterSlice";

const Checkout = () => {

    const cartItems = useAppSelector(
        (state) => state.cart.cartItems
    );

    const totalItems = useAppSelector(totalCartItemsSelector)
    const totalPrice = useAppSelector(TotalPriceSelector)

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
                <div>
                    <div className='border-[1px] rounded-[10px] shadow-md p-[30px] mt-[20px] sm:mx-[20px] sm:mt-0'>
                        <div className='text-[20px] font-[500] border-b-[1px]'>
                            {

                            }
                        </div>
                        <div className='mt-[20px] mb-[5px]'>
                            <div className='text-[16px] font-[700] flex justify-between mb-[10px]'>
                                <span>Dirección de entrega:</span>
                                <span className='underline cursor-pointer'>Editar</span>
                            </div>
                            <div className='mb-[5px]'>Martin Martinez</div>
                            <div className='mb-[5px]'>Avenida Kolping 5050</div>
                            <div className='mb-[5px]'>Posadas Misiones</div>
                            <div className='mb-[5px]'>Argentina</div>
                            <div className='mb-[5px]'> +543764673215 </div>
                        </div>
                        <div className='border-b-[1px] my-[20px]'></div>
                        <div className='flex justify-between mb-[5px]'>
                            <span>Cant. Productos:</span>
                            <span className='font-[600]'>
                                {
                                    totalItems
                                }
                            </span>
                        </div>
                        <div className='flex justify-between mb-[5px]'>
                            <span>Subtotal: </span>
                            <span className='font-[600]'>
                                $
                                {totalPrice}
                            </span>
                        </div>
                        <div className='flex justify-between mb-[5px]'>
                            <span>Envio: </span>
                            <span className='font-[600]'>$0</span>
                        </div>

                        <div className='flex justify-between mt-[25px] pt-[10px] text-[20px] font-[700] border-t-[1px]'>
                            <span>TOTAL: </span>
                            <span>
                                $
                                {totalPrice}
                            </span>
                        </div>
                        <button
                            className="mt-[10px] rounded-[10px] text-white bg-blue-700 w-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center"
                        >
                            Pagar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout