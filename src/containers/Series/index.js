import React, {Component} from 'react';
import SeriesList from '../../components/SeriesList';
class Series extends Component {


    // The State Object That Will Change after. 
    state = {
        series: []
    }

    componentDidMount() {
        fetch('http://api.tvmaze.com/search/shows?q=girls')
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            return this.setState({series: data})
        

        })
    }


    render() {

        return (
            <div> 
                <p>No Friends, I've Been Chillin' Alone, Fuck Nigga Don't Be hittin' My Phone !</p>
                <input type="text" placeholder="search"/>
                <SeriesList list = {this.state.series} />
            </div>

        )


    }


}

export default Series; 