import React from 'react';

import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title:'Home',
        path:'/',
        cName:'nav-text'
    },
    {
        title:'DD Capabilities',
        path:'/ddCapabilites',
        cName:'nav-text',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
              title: 'DD Stream Flow',
              path: '/capabilitiesType/ddStreamFlow',
              cName: 'sub-nav'
            },
            {
              title: 'DD Batch Flow',
              path: '/capabilitiesType/ddBatchFlow',
              cName: 'sub-nav'
            }
          ]
    },
    {
        title:'Source Connectors',
        path:'/sourceConnectors',
        cName:'nav-text',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
              title: 'Kafka',
              path: '/connectorTypes/kafka',
              cName: 'sub-nav'
            },
            {
              title: 'File',
              path: '/connectorTypes/file',
              cName: 'sub-nav'
            },
            {
                title: 'Presto',
                path: '/connectorTypes/presto',
                cName: 'sub-nav'
              },
              {
                title: 'Database',
                path: '/connectorTypes/database',
                cName: 'sub-nav'
              }
          ]
    },
    {
        title:'Target Connectors',
        path:'/targetConnectors',
        cName:'nav-text',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
              title: 'Cassandra',
              path: '/connectorTypes/cassandra',
              cName: 'sub-nav'
            },
            {
              title: 'Csv',
              path: '/connectorTypes/csv',
              cName: 'sub-nav'
            },
            {
                title: 'Api End Point',
                path: '/connectorTypes/apiEndPoint',
                cName: 'sub-nav'
              }
          ]
    },
    {
        title:'Transformations',
        path:'/transformations',
        cName:'nav-text',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
              title: 'Expression',
              path: '/transformationsTypes/expression',
              cName: 'sub-nav'
            },
            {
              title: 'Filter',
              path: '/transformationsTypes/filter',
              cName: 'sub-nav'
            },
            {
                title: 'DeDuplicator',
                path: '/transformationsTypes/deDuplicator',
                cName: 'sub-nav'
              },
              {
                title: 'Aggregator',
                path: '/transformationsTypes/aggregator',
                cName: 'sub-nav'
              }
          ]
    },
    {
        title:'Application Deployment',
        path:'/applicationDeployment',
        cName:'nav-text'
    },
    {
        title:'Logger',
        path:'/logger',
        cName:'nav-text',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
              title: 'How to use logger',
              path: '/logger/useLogger',
              cName: 'sub-nav'
            }
          ]
    },
    {
        title:'Use Cases',
        path:'/useCases',
        cName:'nav-text',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
              title: 'Kafka To Elz',
              path: '/useCases/kafkaToElz',
              cName: 'sub-nav'
            },
            {
                title: 'Kafka To Cassandra',
                path: '/useCases/kafkaToCassandra',
                cName: 'sub-nav'
              },
              {
                title: 'Pivot Rows To Columns',
                path: '/useCases/pivotRowsToColumns',
                cName: 'sub-nav'
              },
              {
                title: 'Using Skip Explode Functionaltiy',
                path: '/useCases/usingSkip',
                cName: 'sub-nav'
              },
              {
                title: 'Insert Multiple Cassandra Tables',
                path: '/useCases/insertMutipleCassandra',
                cName: 'sub-nav'
              },
              {
                title: 'Writing Blob Cassandra',
                path: '/useCases/writingBlobCassandra',
                cName: 'sub-nav'
              },
              {
                title: 'Writing Blob Csv',
                path: '/useCases/writingBlobCsv',
                cName: 'sub-nav'
              },
          ]
    },
    {
        title:'Autosys Jobs for ELZ',
        path:'/autosysJobsForElz',
        cName:'nav-text'
    },
    {
        title:'Promotion to Higher Environment',
        path:'/promotionToHigher',
        cName:'nav-text'
    }

]