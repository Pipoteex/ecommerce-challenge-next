"use client"

import React, { useEffect, useState } from 'react'

import { useAppDispatch } from '@/redux/hooks'
import { update } from '@/redux/features/counterSlice'
import { Product } from '@/types/types'
import ProductComponent from '@/components/Product'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loading from './icons/Loading'

const WrapperProducts = ({ data }: { data: Product[] }) => {

    //STATES

    const [dataScrolled, setDataScrolled] = useState(data.slice(0, 10))

    //HOOKS

    const dispatch = useAppDispatch()

    //FUNCTIONS

    useEffect(() => {
        dispatch(update(data))
    }, [])

    const addMore = () => {
        setTimeout(() => {
            let length = dataScrolled.length
            let newArray = dataScrolled.concat(data.slice(length, length + 10))
            setDataScrolled(newArray)
        }, 3000)
    }

    return (


        <InfiniteScroll
            dataLength={dataScrolled.length}
            next={addMore}
            hasMore={true}
            loader={
                <div className='p-[px] flex justify-center'>
                    <Loading className='w-[60px]' />
                </div>
            }
            endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                </p>
            }
        >
            <div className='grid grid-cols-1 my-[20px] min-[580px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {
                    dataScrolled?.map((product: Product, index) => {
                        return <ProductComponent key={index} data={product} />
                    })
                }
            </div>
        </InfiniteScroll>

    )
}

export default WrapperProducts