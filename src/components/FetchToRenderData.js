import React, { useEffect, useState } from 'react'

const FetchToRenderData = () => {
    const [fetchedData, setFetchedData] = useState({})

    useEffect(() => {
       const URL = "https://api.coindesk.com/v1/bpi/historical/close.json?start=2020-11-25&end=2020-12-04"

       fetch(URL).then(res=> res.json()).then(data => setFetchedData(data.bpi))
       
    }, [])

    console.log(fetchedData)
    return (
        <div>
            <button>Render</button>
        </div>
    )
}

export default FetchToRenderData
