import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { ENDPOINT } from '../../utils/endpoint'
import { DefaultState } from '../../utils/interfaces/defaultstate.interface'
import ProductInterface from '../../utils/interfaces/product.interface'

export interface CartState extends DefaultState {
    cartItems: (ProductInterface & { quantity: number })[]
}

const initialState: CartState = {
    state: 'idle',
    error: '',
    cartItems: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        setQuantity: (state, action) => {
            const payload = action.payload as {
                id: number
                newQuantity: string
            }

            state.cartItems = state.cartItems.map((product) => {
                if (product.id === payload.id) {
                    return { ...product, quantity: Number(payload.newQuantity) }
                }
                return product
            })
        },
        setCartEmpty: (state) => {
            state.cartItems = []
        },
        warnCartEmpty: (state) => {
            state.error = 'Please add item/s in cart first.'
            state.state = 'error'
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getCartItems.pending, (state) => {
            state.state = 'fetching'
        })
        builder.addCase(getCartItems.fulfilled, (state, action) => {
            const products = action.payload as ProductInterface[]
            const withQuantity = products.map((product) => {
                return { ...product, quantity: 5 }
            })
            state.cartItems = withQuantity
            state.state = 'idle'
        })
        builder.addCase(getCartItems.rejected, (state) => {
            state.state = 'error'
            state.error = 'Something went wrong.'
        })
    },
})

export const { setQuantity, setCartEmpty, warnCartEmpty } = cartSlice.actions

export const getCartItems = createAsyncThunk('cart/getCartItems', async () => {
    const response = await axios.get(`${ENDPOINT}/products?limit=5`)
    return response.data
})

export default cartSlice.reducer
