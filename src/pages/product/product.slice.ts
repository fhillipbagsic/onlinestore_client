import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { ENDPOINT } from '../../utils/endpoint'
import { DefaultState } from '../../utils/interfaces/defaultstate.interface'
import ProductInterface from '../../utils/interfaces/product.interface'

interface ProductState extends DefaultState {
    product: ProductInterface | {}
}

const initialState: ProductState = {
    state: 'idle',
    error: '',
    product: {},
}

const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProductById.pending, (state, action) => {
            state.state = 'fetching'
        })
        builder.addCase(getProductById.fulfilled, (state, action) => {
            state.product = action.payload
            state.state = 'idle'
        })
        builder.addCase(getProductById.rejected, (state, action) => {
            state.error = 'Something went wrong.'
            state.state = 'error'
        })
    },
})

export const {} = productSlice.actions

export const getProductById = createAsyncThunk(
    'product/getProductById',
    async (id: number) => {
        const response = await axios.get(`${ENDPOINT}/products/${id}`)

        return response.data
    }
)

export default productSlice.reducer
