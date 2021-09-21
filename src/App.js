import React from 'react';
import './App.css';
import Sidebar from './components/SideBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import TargetConnectors from './pages/TargetConnectors';
import SourceConnectors from './pages/SourceConnectors';
import DDCapabilites from './pages/DDCapabilites';
import  {DDBatchFlow, DDStreamFlow}from './pages/CapabilitiesType';
import  {Kafka, Database, File, Presto, Cassandra, Csv, ApiEndPoint}from './pages/ConectorTypes';
import  { Aggregator, DeDuplicator, Expression, Filter }from './pages/TransformationTypes';
import ApplicationDeployment from './pages/ApplicationDeployment';
import Logger, { UseLogger } from './pages/Logger';
import UseCases, { InsertMCassandra, KafkaToCassandra, KafkaToElz, PivotRowsToColumns, UsingSkip, WritingBlobCassandra, WritingBlobCsv } from './pages/UseCases';
import AutosysJobsForElz from './pages/AutosysJobsForElz';
import PromotionToHigher from './pages/PromotionToHigher';

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/ddCapabilites' exact component={DDCapabilites} />
          <Route path='/capabilitiesType/ddStreamFlow' exact component={DDStreamFlow} />
          <Route path='/capabilitiesType/ddBatchFlow' exact component={DDBatchFlow} />
          <Route path='/sourceConnectors' exact component={SourceConnectors} />
          <Route path='/connectorTypes/kafka' exact component={Kafka} />
          <Route path='/connectorTypes/file' exact component={File} />
          <Route path='/connectorTypes/presto' exact component={Presto} />
          <Route path='/connectorTypes/database' exact component={Database} />
          <Route path='/targetConnectors' exact component={TargetConnectors} />
          <Route path='/connectorTypes/cassandra' exact component={Cassandra} />
          <Route path='/connectorTypes/csv' exact component={Csv} />
          <Route path='/connectorTypes/apiEndPoint' exact component={ApiEndPoint} />
          <Route path='/transformations' exact component={ApiEndPoint} />
          <Route path='/transformations/expression' exact component={Expression} />
          <Route path='/transformations/filter' exact component={Filter} />
          <Route path='/transformations/deDuplicator' exact component={DeDuplicator} />
          <Route path='/transformations/aggregator' exact component={Aggregator} />
          <Route path='/applicationDeployment' exact component={ApplicationDeployment} />
          <Route path='/logger' exact component={Logger} />
          <Route path='/logger/useLogger' exact component={UseLogger} />
          <Route path='/useCases' exact component={UseCases} />
          <Route path='/useCases/kafkaToElz' exact component={KafkaToElz} />
          <Route path='/useCases/kafkaToCassandra' exact component={KafkaToCassandra} />
          <Route path='/useCases/pivotRowsToColumns' exact component={PivotRowsToColumns} />
          <Route path='/useCases/usingSkip' exact component={UsingSkip} />
          <Route path='/useCases/insertMutipleCassandra' exact component={InsertMCassandra} />
          <Route path='/useCases/writingBlobCassandra' exact component={WritingBlobCassandra} />
          <Route path='/useCases/writingBlobCsv' exact component={WritingBlobCsv} />
          <Route path='/autosysJobsForElz' exact component={AutosysJobsForElz} />
          <Route path='/promotionToHigher' exact component={PromotionToHigher} />


        </Switch>
      </Router>
    </>
  );
}

export default App;