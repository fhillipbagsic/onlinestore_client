import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import LoadingSpinner from '../../common/loadingspinner'
import Actions from './components/actions'
import Details from './components/details'
import Features from './components/features'
import Image from './components/image'
import { getProductById } from './product.slice'

const Product = () => {
    const { id } = useParams()
    const { state } = useAppSelector((state) => state.product)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getProductById(Number(id)))
    }, [dispatch, id])

    return (
        <main className="">
            {state === 'fetching' && <LoadingSpinner />}
            {state === 'idle' && (
                <>
                    <Actions />
                    <div className="flex lg:flex-row flex-col-reverse">
                        <Details />
                        <Image />
                    </div>
                </>
            )}

            <Features />
        </main>
    )
}

export default Product
