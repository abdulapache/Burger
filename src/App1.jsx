import React from "react";
import { Route, Switch} from 'react-router-dom';
import Burger from './burger';
import Error from './Error';
import Form from './form';


const App1 = () =>{
        return(
            <>
                <Switch>
                    <Route exact path="/" component={Burger} />
                    <Route path="/form" component={Form} />
                    <Route component={Error} />
                </Switch>
            </>
        );
}
export default App1;


