import { CartItem, Product } from "@/types/types";
import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface CartState {
    cartItems: CartItem[];
}
const initialState: CartState = {
    cartItems: [],
};

export const counterSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        update: (state, action: PayloadAction<Product[]>) => {

            if (!localStorage.getItem("cart")) {
                state.cartItems = []
                return
            }

            let itemsInLocalStorage: CartItem[] = JSON.parse(localStorage.getItem("cart") || "")

            if (itemsInLocalStorage.length > 0) {
                let newItems: CartItem[] = itemsInLocalStorage?.map(item => {
                    return {
                        ...item,
                        product: action.payload.find(anotherItem => anotherItem.tail === item.product?.tail) as Product
                    }
                })

                state.cartItems = newItems
            }

        },

        increment: (state, action: PayloadAction<Product>) => {
            const cartItem = state.cartItems.find(
                (item) => item.product.tail === action.payload.tail
            );
            if (cartItem) cartItem.qty++;
            else {
                state.cartItems.push({
                    product: action.payload,
                    qty: 1,
                });
            }

            localStorage.setItem("cart", JSON.stringify(state.cartItems))
        },

        decrement: (state, action: PayloadAction<Product>) => {
            const cartItem = state.cartItems.find(
                (item) => item.product.tail === action.payload.tail
            );
            if (cartItem) {
                cartItem.qty--;
                if (cartItem.qty === 0) {
                    state.cartItems = state.cartItems.filter(
                        (item) => item.product.tail !== action.payload.tail
                    );
                }
            }

            localStorage.setItem("cart", JSON.stringify(state.cartItems))
        },

        remove: (state, action: PayloadAction<Product>) => {

            const cartItem = state.cartItems.find(
                (item) => item.product.tail === action.payload.tail
            );
            if (cartItem) {
                state.cartItems = state.cartItems.filter(
                    (item) => item.product.tail !== action.payload.tail
                );
            }

            localStorage.setItem("cart", JSON.stringify(state.cartItems))
        },
    },
});

const cartItems = (state: RootState) =>
    state.cart.cartItems;

export const productQtyInCartSelector = createSelector(
    [cartItems, (productId: string) => productId],
    (cartItems, productId) =>
        cartItems.find((item) => item.product.tail === productId)?.qty
);

export const totalCartItemsSelector = createSelector(
    [cartItems],
    (cartItems) =>
        cartItems.reduce(
            (total: number, curr: CartItem) =>
                (total += curr.qty),
            0
        )
);

export const TotalPriceSelector = createSelector(
    [cartItems],
    (cartItems) =>
        cartItems.reduce(
            (total: number, curr: CartItem) =>
                (total += curr.qty * curr.product.price),
            0
        )
);

export const {
    update,
    increment,
    decrement,
    remove
} = counterSlice.actions;

export default counterSlice.reducer;