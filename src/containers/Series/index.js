import React, {Component} from 'react';
import SeriesList from '../../components/SeriesList';
import FirstComponent from '../../components/FirstComponent';
class Series extends Component {


    // The State Object That Will Change after. 
    state = {
        series: [],
        seriesName: ''
    }

    onChangeInput = e => {
    
        this.setState({seriesName: e.target.value})
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            return this.setState({series: data})
        

        })
    }


    render() {
        const {series, seriesName} = this.state; 
        return (
            <div> 
                <FirstComponent message = "hello moto"/>
                <input type="text" placeholder="search" onChange={this.onChangeInput} value={this.state.seriesName}/>
                <SeriesList list = {this.state.series} />

                {   
                    series.length === 0 && seriesName.trim() === ''
                    && <p>Please Enter the name of your favorite Serie</p>
                }
                {   
                    series.length === 0 && seriesName.trim() !== ''
                    && <p>No Matches found...</p>
                }

            </div>

        )


    }


}

export default Series; 