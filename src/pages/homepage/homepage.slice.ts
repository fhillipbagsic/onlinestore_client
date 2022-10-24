import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { ENDPOINT } from '../../utils/endpoint'
import { CategoriesType } from '../../utils/interfaces/categories.type'
import { DefaultState } from '../../utils/interfaces/defaultstate.interface'
import ProductInterface from '../../utils/interfaces/product.interface'

export interface HomepageState extends DefaultState {
    products: ProductInterface[]
}

const initialState: HomepageState = {
    // newProducts: [],
    state: 'idle',
    products: [],
    error: '',
}

export const homepageSlice = createSlice({
    name: 'homepage',
    initialState: initialState,
    reducers: {
        startFetching: (state) => {
            state.state = 'fetching'
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getProductsByCategory.fulfilled, (state, action) => {
            const products = action.payload as ProductInterface[]
            const newProducts = [...state.products, ...products.slice(0, 4)]
            state.products = newProducts
            state.state = 'idle'
        })
        builder.addCase(getProductsByCategory.rejected, (state, action) => {
            state.error = 'Something went wrong.'
            state.state = 'error'
        })
    },
})

export const { startFetching } = homepageSlice.actions

export const getProductsByCategory = createAsyncThunk(
    'homepage/getProductsByCategory',
    async (category: CategoriesType) => {
        const response = await axios.get(
            `${ENDPOINT}/products/category/${category}`
        )
        const products = response.data as ProductInterface[]

        return products.slice(0, 4)
    }
)

export default homepageSlice.reducer
