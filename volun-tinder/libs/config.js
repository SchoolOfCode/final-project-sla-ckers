export const routes = {
  home: '/',
  quiz: '/quiz',
  knowledgeBase: '/knowledge-base',
  orgDashboard: '/org-dashboard',
  orgList: '/orgsList',
};

//Base URL to data in Lambda/DynamoDB - import where fetching!
export const apiUrl =
  'https://hnyslsh8ne.execute-api.eu-west-1.amazonaws.com/dev/orgs/';
