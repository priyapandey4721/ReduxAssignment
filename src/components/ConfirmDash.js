import React from 'react'
import { useSelector } from 'react-redux'

function ConfirmDash() {

    const myState = useSelector((state) => state.submitReducer)
    //console.warn(myState)// i'm getting th data here from store

    return (
        <div>
            <div className="container">
                <div className="jumbotron">
                    <center><h3>User Data</h3></center>
                    <hr />
                    <div className="card m-auto" style={{ width: '27%' }}>
                        <div className="card-body">
                            <pre>{JSON.stringify(myState, undefined, 2)}</pre>
                        </div>
                    </div>
                </div>
            </div>
            {/* but could not able to render it giving the error map is not function */}
            {/* {myState.map((item, index) => {
                return (
                    <div key={index}>
                        <p>{item.userData.name}</p>
                        <p>{item.userData.age}</p>
                        <p>{item.userData.email}</p>
                        <p>{item.userData.pass}</p>
                        <p>{item.userData.cpass}</p>
                    </div>
                )
            })} */}
        </div>

    )
}

export default ConfirmDash
