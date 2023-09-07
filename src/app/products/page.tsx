

import React from 'react'

import { Amiibo } from '@/types/types'
import WrapperProducts from '@/components/WrapperProducts'
import { getRandomNumber } from '@/utils'

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

    //STATES

    let data: Amiibo = await getData()

    //HOOKS

    //FUNCTIONS

    return (

        <WrapperProducts data={data.amiibo} />

    )
}

export default Products