import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import styled from 'styled-components';

import Main from './components/Main';
import Essays from "./components/Essays";
import New from "./components/New";

const Body = styled.div`
    width: 100%;   
    display: flex;
    flex-direction: column;  
    align-items: center;                       
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 30%;
    max-width: 40%;    
    margin: 10% 0;
`;

export const useRoutes = () => {
    return(
        <Switch>
            <Route path = '/main' exact>
                <Body>
                    <Content>
                        <Main/>
                    </Content>
                </Body>
            </Route>

            <Route path = '/essays' exact>
                <Body>
                    <Content>
                        <Essays/>
                    </Content>
                </Body>
            </Route>

            <Route path = '/new' exact>
                <Body>
                    <Content>
                        <New/>
                    </Content>
                </Body>
            </Route>

            <Redirect to = '/main'/>
        </Switch>
    )
}