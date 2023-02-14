import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styleCompononent/Loading.css';
const styleLoading = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '99'
}
export default function Loading() {
    const { loading } = useSelector(state => state.loadingReducerStore)
    let showHide = loading ? styleLoading : { display: 'none' }
    return (
        (
            <div style={showHide} className='text-center ' >
                <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
        )
    )
}
