

import React from 'react'
import { useGetProductsQuery } from '@/redux/services/amiiboApi'
import ProductComponent from '@/components/Product'
import { Product, Amiibo } from '@/types/types'

const getData = async () => {
    let response = await fetch("https://www.amiiboapi.com/api/amiibo")
    return response.json()
}

const Products = async () => {

    /* const { data, isLoading, isFetching } = useGetProductsQuery(null)

    if (isLoading || isFetching) {
        return <div>Cargando..</div>
    } */

    let data: Amiibo = await getData()

    return (

        <div className='grid grid-cols-1 my-[20px] min-[580px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
                data?.amiibo?.slice(0, 6).map((product: Product, index) => {
                    return <ProductComponent key={index} data={product} />
                })
            }
        </div>

    )
}

export default Products