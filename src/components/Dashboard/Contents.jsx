import { Box } from '@mui/system';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Analytics from './Analytics';

const Contents = () => {
    return (
        <>
            <Analytics></Analytics>
            {/*  <Route exact path={`${path}`} >
                <Cart></Cart>
            </Route>
            <Route path={`${path}/login`} >
                <Login></Login>
            </Route>
            <Route path={`${path}/register`}>
                <Register></Register>
            </Route>
            <Switch>
                {role === "lender" ? <>
                    <LenderRoute path={`${path}/loans`}>
                        <LoanRequests></LoanRequests>
                    </LenderRoute>
                </> : role === "user" ? <>
                    <Route path={`${path}/myRequests`}>
                        <UserLoanRequests></UserLoanRequests>
                    </Route>
                </> : null
                }


            </Switch> */}
        </ >
    );
};

export default Contents;