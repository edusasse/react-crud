import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PhysicalEvaluation from './PhysicalEvaluation';
import About from './About';
import AddPhysicalEvaluation from './AddPhysicalEvaluation';
import EditPhysicalEvaluation from './EditPhysicalEvaluation';
import PhysicalEvaluationsDetails from './PhysicalEvaluationsDetails';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={PhysicalEvaluation}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/physicalEvaluations/add' component={AddPhysicalEvaluation}/>
            <Route exact path='/physicalEvaluations/edit/:id' component={EditPhysicalEvaluation} />
            <Route exact path='/physicalEvaluations/:id' component={PhysicalEvaluationsDetails}/>
        </Switch>
    </main>
)

export default Main;