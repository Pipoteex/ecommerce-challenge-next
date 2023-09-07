import React from 'react'

import Trash from './icons/Trash'
import { CartItem } from '@/types/types'
import { useAppDispatch } from '@/redux/hooks'
import { increment, decrement, remove } from "@/redux/features/counterSlice";

const ItemProductCart = ({ item }: { item: CartItem }) => {

    //STATES

    //HOOKS

    const dispatch = useAppDispatch()

    //FUNCTIONS

    return (
        <li key={item.product.tail} className='flex border-[1px] p-[10px] my-[3px]'>
            <div className='w-[25%] flex items-center'>
                <img className='w-[100%]' src={item.product.image} alt="product" />
            </div>
            <div className='w-[75%] p-[5px]'>
                <div className='font-[600] text-[18px] mb-[8px] flex'>
                    {item.product.name}
                    <Trash
                        className={"w-[20px] cursor-pointer ml-auto"}
                        onClick={() => dispatch(remove(item.product))}
                    />
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
                        <div className='flex items-center justify-center' >
                            <div
                                className='select-none text-[black] font-[800] cursor-pointer px-[5px]'
                                onClick={() => dispatch(increment(item.product))}
                            >
                                +
                            </div>
                        </div>
                        <div className='mx-[5px]'>
                            {
                                item.qty
                            }
                        </div>
                        <div className='flex items-center justify-center' >
                            <div
                                className='select-none text-[black] font-[800] cursor-pointer px-[5px]'
                                onClick={() => dispatch(decrement(item.product))}
                            >
                                -
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' flex justify-between'>
                    <span className='font-[500] text-[15px]'>Subtotal:</span>
                    <span>
                        $
                        {
                            item.qty * item.product.price
                        }
                    </span>
                </div>
            </div>
        </li>
    )
}

export default ItemProductCart