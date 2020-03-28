import React, {Component} from 'react';

class OneSerie extends Component {

    state = {
        show: null
    }

    componentDidMount() {
        console.log(this.props);
        const {id} = this.props.match.params; 
        fetch(` http://api.tvmaze.com/shows/${id}?embed=episodes`)
        .then(resp => resp.json())
        .then(data => {
       
        this.setState({show: data})
            console.log(this.state.show); 
        })
        
    }

    render() {
        const {show} =  this.state; 
        return(
        <div>  Serie Infos 

            {
                show === null&& <p>No match found</p>
            }
            {
                show !== null&& 
            <div>
                <p> Id : {show.id} </p>
                <p> Name : {show.name}</p>
                <p> Language : {show.language}</p>
                <img src={show.image.medium} alt="okay"/>
            </div>
            }
           
        </div>
        )
    }


}

export default OneSerie; 