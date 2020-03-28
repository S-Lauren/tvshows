import React from 'react'; 
import './seriesList.css'; 
import {Link} from 'react-router-dom';
// child component... 
const SeriesItem = ({series}) => {
return(

        <p><Link to={`/series/${series.show.id}`}>{series.show.name}</Link></p>
    )
}


const SeriesList = (props) => {

    return (
        <div>{props.list.map(x => {            
                return <SeriesItem series={x} />
            })}
        </div>
    )

}

export default SeriesList; 