import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { ENDPOINT } from '../../utils/endpoint'
import { CategoriesType } from '../../utils/interfaces/categories.type'
import { DefaultState } from '../../utils/interfaces/defaultstate.interface'
import ProductInterface from '../../utils/interfaces/product.interface'

export interface CatalogState extends DefaultState {
    products: ProductInterface[]
    selectedCategory: CategoriesType | 'all'
    view: 'grid' | 'row'
    selectedPrice: [] | [number, number | 'And Above']
}

const initialState: CatalogState = {
    products: [],

    selectedCategory: 'electronics',
    view: 'grid',
    state: 'idle',
    error: '',
    selectedPrice: [],
}

const catalogSlice = createSlice({
    name: 'catalog',
    initialState: initialState,
    reducers: {
        setCategory: (state, action) => {
            state.selectedCategory = action.payload
        },
        setView: (state, action) => {
            state.view = action.payload
        },
        setPrice: (state, action) => {
            state.view = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.state = 'fetching'
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload
            state.state = 'idle'
        })
    },
})

export const { setCategory, setView } = catalogSlice.actions

export const getProducts = createAsyncThunk('catalog/getProducts', async () => {
    const response = await axios.get(`${ENDPOINT}/products`)
    return response.data
})
export default catalogSlice.reducer
