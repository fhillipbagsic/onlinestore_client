import React, { useLayoutEffect, useState } from 'react'
import { CgMenuGridR, CgRowFirst } from 'react-icons/cg'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { setView } from '../catalog.slice'

const Options = () => {
    const [show, setShow] = useState(true)
    const view = useAppSelector((state) => state.catalog.view)
    const dispatch = useAppDispatch()

    useLayoutEffect(() => {
        function resize() {
            if (window.innerWidth < 1280) {
                dispatch(setView('grid'))
                setShow(false)
            } else {
                setShow(true)
            }
        }

        window.addEventListener('resize', resize)
        return () => window.removeEventListener('resize', resize)
    }, [dispatch])

    function handleClick(
        e: React.MouseEvent<SVGElement>,
        view: 'grid' | 'row'
    ) {
        dispatch(setView(view))
    }

    return show ? (
        <div className="flex justify-end items-center">
            <CgMenuGridR
                className={`${
                    view === 'grid' ? 'text-black' : 'text-color5'
                } w-7 h-7 cursor-pointer`}
                onClick={(e) => handleClick(e, 'grid')}
            />
            <CgRowFirst
                className={`${
                    view === 'row' ? 'text-black' : 'text-color5'
                } w-9 h-9 cursor-pointer`}
                onClick={(e) => handleClick(e, 'row')}
            />
        </div>
    ) : (
        <></>
    )
}

export default Options
