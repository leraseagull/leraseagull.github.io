import React from "react";
import st from './Search.module.css'


const Search = (props) => {
    return (

        <div className={st.SearchContainer}>
            <form className={st.FormContainer} method="GET">
            <input className={st.Search} placeholder='Search by name...'
                   onChange={(e)=>{
                       props.searchBy(e.target.value, 'byString')
                   }}/>
                   </form>

                <select className={st.StateFilter} name="State" size='1'
                        onChange={(e) => {
                    props.filterByState(e.target.value, 'byState')

                }}>
                    <option value="SelectNone">Filter by state</option>
                    {props.statesList.map(elem => <option key={elem.id} value={elem.stateName}>{elem.stateName}</option>)}
                </select>
                
        </div>
    )
}
export default Search;