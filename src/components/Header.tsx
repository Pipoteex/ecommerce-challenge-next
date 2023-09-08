'use client'

import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

import ShoppingCart from './icons/ShoppingCart'
import { useAppSelector } from "@/redux/hooks";
import { totalCartItemsSelector, TotalPriceSelector } from "@/redux/features/counterSlice";
import ItemProductCart from './ItemProductCart'

const Header = () => {

    //STATES

    const [openShoppingCart, setOpenShoppingCart] = useState(false)

    const totalItems = useAppSelector(totalCartItemsSelector)
    const totalPrice = useAppSelector(TotalPriceSelector)

    //HOOKS

    const router = useRouter()
    const path = usePathname()
    const cartItems = useAppSelector(
        (state) => state.cart.cartItems
    )

    //FUNCTIONS

    const handleRoute = () => {
        router.push("/checkout")
        setOpenShoppingCart(false)
    }

    return (

        <nav className="bg-white border-gray-200 shadow-md fixed top-0 w-full">
            <div className="flex items-center justify-between mx-auto p-4 relative" >
                <div className="flex items-center ml-[5%]">
                    <img
                        src="https://www.mercat.cl/wp-content/uploads/2022/05/Mercat-para-web-1.png"
                        className="h-8 mr-3 cursor-pointer"
                        alt="mercat Logo"
                        onClick={() => router.push("/")}
                    />
                </div>
                {
                    path === "/checkout" || path === "/"
                        ?
                        <div className='mr-[5%]'>
                            <a className='select-none cursor-pointer text-[18px] font-[500]' onClick={() => router.push("/products")}>
                                Productos
                            </a>
                        </div>
                        :
                        <div className='static min-[580px]:relative mr-[5%]'>
                            <div className="flex" >
                                <ShoppingCart className='w-[20px] cursor-pointer ml-auto' onClick={() => setOpenShoppingCart(!openShoppingCart)} />
                                <div className='flex justify-center items-center text-red-600 h-[25px] font-[700] w-[25px] text-center text-[18px] select-none'>
                                    {
                                        totalItems > 0
                                            ?
                                            totalItems > 20
                                                ?
                                                <span className='ml-[25px]'>20+</span>
                                                :
                                                <span className='ml-[25px]'>{totalItems}</span>
                                            :
                                            ""
                                    }
                                </div>
                            </div>
                            {
                                openShoppingCart
                                &&
                                <div className='absolute w-full top-[63px] left-0 shadow-2xl px-5 pb-5 bg-[white] flex flex-col max-h-[450px] border-t-[3px] min-[580px]:left-[-300px] min-[580px]:top-[30px] min-[580px]:w-[400px] min-[580px]:max-h-[600px] min-[580px]:border-0'>
                                    <div className='ml-auto cursor-pointer font-[700]' onClick={() => setOpenShoppingCart(false)}>X</div>
                                    <ul className='flex-1 overflow-auto'>
                                        {
                                            cartItems.map(item => {
                                                return <ItemProductCart key={item.product.tail} item={item} />
                                            })
                                        }
                                        {
                                            cartItems.length === 0
                                            &&
                                            <div className='text-center p-[20px]'>Sin productos en el carrito...</div>
                                        }
                                    </ul>
                                    {
                                        cartItems.length > 0
                                        &&
                                        <>
                                            <div className='flex justify-between font-[600] text-[18px] py-[10px]'>
                                                <span>Total: </span>
                                                <span>
                                                    ${totalPrice}
                                                </span>
                                            </div>
                                            <div className='flex justify-center items-end'>
                                                <button
                                                    className="text-white bg-blue-700 w-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center"
                                                    onClick={handleRoute}
                                                >
                                                    Comprar
                                                </button>
                                            </div>
                                        </>

                                    }
                                </div>
                            }
                        </div >
                }
            </div >
        </nav >

    )
}

export default Header