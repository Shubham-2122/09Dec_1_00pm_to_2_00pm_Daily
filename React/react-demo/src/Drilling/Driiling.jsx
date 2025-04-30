import React from 'react'
import Header from '../layout/coman/Header'
import A from './Propsdrilling/A'
import CompoA from './UseContext/CompoA'

function Driiling() {
    return (
        <div>
            <Header />
            <h1>hello this Context api data</h1>

            {/* props driiling  */}
            {/* <A /> */}

            {/* use context */}
            <CompoA />
        </div>
    )
}

export default Driiling
