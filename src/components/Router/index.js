import React from 'react'; 
import {Switch, Route} from 'react-router-dom'; 
import OneSerie from '../../containers/Series/OneSerie';
import Series from '../../containers/Series';
const Router = (props) => {

return (

    <Switch>
        <Route exact path="/" component={Series}/>
        <Route path="/series/:id"  component={OneSerie}/>
    </Switch>
    )
}

export default Router; 