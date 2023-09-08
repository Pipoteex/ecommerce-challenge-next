import React from 'react'

import { useAppSelector } from "@/redux/hooks";
import { totalCartItemsSelector, TotalPriceSelector } from "@/redux/features/counterSlice";

const ResumeToPay = () => {

    //STATES

    //HOOKS

    const totalItems = useAppSelector(totalCartItemsSelector)
    const totalPrice = useAppSelector(TotalPriceSelector)

    //FUNCTIONS

    return (
        <div>
            <div className='border-[1px] rounded-[10px] shadow-md p-[30px] mt-[20px] sm:mx-[20px] sm:mt-0'>
                <div className='text-[20px] font-[500] border-b-[1px]'>
                    Resumen de compra:
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
    )
}

export default ResumeToPay