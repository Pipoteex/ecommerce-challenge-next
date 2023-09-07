"use client"

import React, { useEffect } from 'react'
import { useAppDispatch } from '@/redux/hooks'
import { update } from '@/redux/features/counterSlice'
import { Product } from '@/types/types'
import ProductComponent from '@/components/Product'

const WrapperProducts = ({ data }: { data: Product[] }) => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(update(data))
    }, [])

    return (
        <div className='grid grid-cols-1 my-[20px] min-[580px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
                data?.slice(0, 6).map((product: Product, index) => {
                    return <ProductComponent key={index} data={product} />
                })
            }
        </div>
    )
}

export default WrapperProducts