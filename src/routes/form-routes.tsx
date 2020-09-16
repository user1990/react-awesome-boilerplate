import { Flex } from '@chakra-ui/core';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FormHeader } from '../components/form-header';

import Step1 from '../components/steps/step1';
import Step2 from '../components/steps/step2';
import Step3 from '../components/steps/step3';

export const FormRoutes: React.FC<any> = () => (
  <Flex direction="column" align="center" width="100%">
    <FormHeader />
    <Router>
      <Switch>
        <Route path="/stepper-form" component={Step1} />
        <Route path="/step2" component={Step2} />
        <Route path="/step3" component={Step3} />
        {/* <Route path="/result" component={Result} /> */}
      </Switch>
    </Router>
  </Flex>
);
