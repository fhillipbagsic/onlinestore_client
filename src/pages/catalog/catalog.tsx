import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import LoadingSpinner from '../../common/loadingspinner'
import { getProducts, setCategory } from './catalog.slice'
import Filter from './components/filter'
import Options from './components/options'
import ProductsTable from './components/productstable'

const Catalog = () => {
    const state = useAppSelector((state) => state.catalog.state)
    const { category } = useParams()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getProducts())
        dispatch(setCategory(category))
    }, [dispatch, category])

    return (
        <main className="container mx-auto px-6 py-10 flex flex-col gap-5">
            <p className=" text-3xl font-semibold capitalize">
                {category} {category === 'all' && 'Categories'}
            </p>
            <Options />
            {state === 'fetching' && <LoadingSpinner />}
            {state === 'idle' && (
                <div className="flex lg:flex-row flex-col gap-10 items-start">
                    <Filter />
                    <ProductsTable />
                </div>
            )}
        </main>
    )
}

export default Catalog
