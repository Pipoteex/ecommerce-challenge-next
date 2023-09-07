'use client'

import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

import Trash from './icons/Trash'
import ShoppingCart from './icons/ShoppingCart'

const Header = () => {

    const router = useRouter()
    const path = usePathname()

    const [openShoppingCart, setOpenShoppingCart] = useState(false)

    const handleRoute = () => {
        router.push("/checkout")
        setOpenShoppingCart(false)
    }

    return (

        <nav className="bg-white border-gray-200 shadow-md fixed top-0 w-full">
            <div className="flex items-center justify-between mx-auto p-4 relative" >
                <a href="https://www.mercat.cl/" className="flex items-center ml-[5%]">
                    <img src="https://www.mercat.cl/wp-content/uploads/2022/05/Mercat-para-web-1.png" className="h-8 mr-3" alt="mercat Logo" />
                </a>
                {
                    path === "/checkout"
                        ?
                        <div className='mr-[5%]'>
                            <a className='cursor-pointer text-[18px] font-[500]' onClick={() => router.push("/products")}>Productos</a>
                        </div>
                        :
                        <div className='static min-[580px]:relative mr-[5%]'>
                            <div className="flex" >
                                <ShoppingCart className='w-[20px] cursor-pointer ml-auto' onClick={() => setOpenShoppingCart(!openShoppingCart)} />
                                <div className='flex justify-center items-center text-red-600 h-[25px] font-[700] w-[25px] text-center text-[18px]'>1</div>
                            </div>
                            {
                                openShoppingCart
                                &&
                                <div className='absolute w-full top-[63px] left-0 shadow-2xl px-5 pb-5 bg-[white] flex flex-col max-h-[450px] border-t-[3px] min-[580px]:left-[-300px] min-[580px]:top-[30px] min-[580px]:w-[400px] min-[580px]:max-h-[600px] min-[580px]:border-0'>
                                    <div className='ml-auto cursor-pointer font-[700]' onClick={() => setOpenShoppingCart(false)}>X</div>
                                    <ul className='flex-1 overflow-auto'>
                                        {
                                            [0, 1, 2, 3].map(item => {
                                                return <li key={item} className='flex border-[1px] p-[10px] my-[3px]'>
                                                    <div className='w-[25%]'>
                                                        <img className='w-[100%]' src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00340102.png" alt="" />
                                                    </div>
                                                    <div className='w-[75%] p-[5px]'>
                                                        <div className='font-[600] text-[18px] mb-[8px] flex'>
                                                            Mario Bross
                                                            <Trash className={"w-[20px] cursor-pointer ml-auto"} />
                                                        </div>
                                                        <div className='mb-[8px] flex justify-between'>
                                                            <span className='font-[500] text-[15px] mr-auto'>Precio:</span>
                                                            <span>$5922</span>
                                                        </div>
                                                        <div className='flex mb-[8px]'>
                                                            <span className='font-[500] text-[15px]'>Cantidad:</span>
                                                            <div className='ml-auto flex'>
                                                                <div className='flex items-center justify-center' >
                                                                    <div className='text-[black] font-[800] cursor-pointer px-[5px]'>+</div>
                                                                </div>
                                                                <div className='mx-[5px]'>10</div>
                                                                <div className='flex items-center justify-center' >
                                                                    <div className='text-[black] font-[800] cursor-pointer px-[5px]'>-</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className=' flex justify-between'>
                                                            <span className='font-[500] text-[15px]'>Subtotal:</span>
                                                            <span>10000$</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            })
                                        }
                                    </ul>
                                    <div className='flex justify-between font-[600] text-[18px] py-[10px]'>
                                        <span>Total: </span>
                                        <span> 5000$</span>
                                    </div>
                                    <div className='flex justify-center items-end'>
                                        <button
                                            className="text-white bg-blue-700 w-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center"
                                            onClick={handleRoute}
                                        >
                                            Comprar
                                        </button>
                                    </div>
                                </div>
                            }
                        </div >
                }
            </div >
        </nav >

    )
}

export default Header