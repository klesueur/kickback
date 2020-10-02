import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'



function AllMerch() {

    const [allMerch, setAllMerch] = useState([])

    useEffect( () => {
        axios.get('/api/merch').then((res) => {
            setAllMerch(res.data)
        })
    }, [])
    

    return (
        
        <div>
            mapped all merch
            {allMerch.map((merch) => {
                return <p>
                   <MerchItem key={merch.id} data={merch} />
                </p>
            })}
        </div>
    )
}


const mapStateToProps = (store) => store
export default connect(mapStateToProps)(AllMerch)