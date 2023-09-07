

import React from 'react'
import { useGetProductsQuery } from '@/redux/services/amiiboApi'
import ProductComponent from '@/components/Product'
import { Product, Amiibo } from '@/types/types'
import WrapperProducts from '@/components/WrapperProducts'

function getRandomNumber() {
    let min = 1
    let max = 1000
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const getData = async () => {
    let response = await fetch("https://www.amiiboapi.com/api/amiibo")
    return response.json().then((res: Amiibo) => {
        return {
            amiibo: res.amiibo.map(item => {
                return {
                    ...item,
                    price: getRandomNumber()
                }
            })
        }
    })
}

const Products = async () => {

    /* const { data, isLoading, isFetching } = useGetProductsQuery(null)

    if (isLoading || isFetching) {
        return <div>Cargando..</div>
    } */

    let data: Amiibo = await getData()

    return (

        <WrapperProducts data={data.amiibo} />

    )
}

export default Products