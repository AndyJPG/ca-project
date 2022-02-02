import * as React from 'react'
import {useProductRepository} from "@ca/common/domain/product/ProductRepository"

function App() {
    const {getProducts} = useProductRepository()
    getProducts().then(data => console.log(data))
    return (
        <div>
            App
        </div>
    )
}

export default App
