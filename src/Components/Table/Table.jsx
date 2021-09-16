import React from "react";
import st from "./Table.module.css"

const UserRow = (props) => {
    return (
        <div onClick={(evt)=>{
            props.showProfile(evt.target.parentElement.id)
        }}>
            <div id = {props.uniqueId} className={st.Table} >
                <div className={st.userId}>{props.id}</div>
                <div>{props.firstName}</div>
                <div>{props.lastName}</div>
                <div>{props.email}</div>
                <div>{props.phone}</div>
                <div>{props.state}</div>
            </div>
        </div>
    )
}

const Table = (props) => {
    const usersList = props.users.map((u, index) => (
        <UserRow key={index}
                 id={u.id}
                 firstName={u.firstName}
                 lastName={u.lastName}
                 email={u.email}
                 phone={u.phone}
                 state={u.adress.state}
                 pos={u.index}
                 showProfile={props.showProfile}
                 uniqueId={u.uniqueId}
        />)
    )

    const sortDirection = (field) => {
        if (props.state.sortBy !== field)
        {return <span> &#8226;</span>}

        if (props.state.sortASC) {
            return <span>&#9660;</span>
        } else return <span>&#9650;</span>
    }
    return (
        <div className={st.ContentTable}>
            <div className={st.Table}>
                <div className={st.userId} onClick={(evt) => {
                    props.sortTableBy('id')
                }}><p>id {sortDirection('id')}</p></div>
                <div onClick={(evt) => {
                    props.sortTableBy('firstName')
                }}><p>First name{sortDirection('firstName')}</p>
                </div>
                <div onClick={(evt) => {
                    props.sortTableBy('lastName')
                }}><p>Last Name {sortDirection('lastName')}</p>
                </div>
                <div onClick={(evt) => {
                    props.sortTableBy('email')
                }}><p>Email{sortDirection('email')}</p>
                </div>
                <div onClick={(evt) => {
                    props.sortTableBy('phone')
                }}><p>Phone{sortDirection('phone')}</p>
                </div>
                <div onClick={(evt) => {
                    props.sortTableBy('state')
                }}><p>State{sortDirection('state')}</p>
                </div>
            </div>
            {usersList}
        </div>
    )
}
export default Table;