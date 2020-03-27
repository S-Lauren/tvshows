import React from 'react'; 
import './seriesList.css'; 
const SeriesList = (props) => {

    return (
        
            <ul>{props.list.map(x => {
                
                    return <li key={x.show.id}> {x.show.name} </li>

                })}
            </ul>
       
    )

}

export default SeriesList; 