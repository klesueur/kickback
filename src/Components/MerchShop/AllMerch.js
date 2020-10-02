import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'


function AllMerch(props) {

    const [allMerch, setAllMerch] = useState([])

    useEffect( () => {
        axios.get('/api/merch').then((res) => (console.log(res.data)))
    }, [])

    return (
        
        <div>
            mapped all merch
            {/* {props.allMerch.map((merch) => {
                return <div> {merch.} </div>
            })} */}
        </div>
    )
}


const mapStateToProps = store => store.authReducer
export default connect(mapStateToProps)(AllMerch)