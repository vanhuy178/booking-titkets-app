import React from 'react'
import { mainTextTitle } from '../assets/constant'

export default function TitleHeader(props) {
    return (
        <h1 className={`${mainTextTitle} font-bold uppercase text-center mt-5 mb-10 text-3xl`}>{props.titleHeader}</h1>
    )
}
