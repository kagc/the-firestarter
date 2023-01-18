import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import PledgeManager from './PledgesList';
import ProjectManager from './ProjectList';
import RewardManager from './RewardList';
import CreateReward from '../Rewards/CreateReward';
import EditReward from '../Rewards/EditReward';
import EditPledge from '../Pledges/EditPledges';
import "./Profile.css"

const ManageCenter=()=>{

    return(
        <div className='usermanage'>
        <div>
        <h1>Current User</h1>
        <NavLink to={`/profile`} className="links">
        <div>Projects</div>
        </NavLink>
        <NavLink to={`/profile/pledges`} className="links">
        <div>Backed</div>
        </NavLink>

        </div>

        <Switch>
          <Route exact path={'/profile/pledges'}>
          <PledgeManager/>
          </Route>
          <Route exact path={'/profile'}>
          <ProjectManager/>
          </Route>
          <Route path={'/profile/:projectId/rewards'}>
          <RewardManager/>
          </Route>
          <Route path={'/createReward/:projectId'}>
          <CreateReward/>
          </Route>
          <Route path={'/editReward/:rewardId'}>
          <EditReward/>
          </Route>
          <Route path={'/projects/:projectId/editpledge/:pledgeId'}>
          <EditPledge/>
          </Route>
        </Switch>
        </div>
    )
}

export default ManageCenter