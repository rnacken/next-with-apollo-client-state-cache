import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import App from '../components/App'
import InfoBox from '../components/InfoBox'
import { withApollo } from '../lib/apollo'


const GET_ROBOT = gql`
  query getRobot {
    robot @client {
      name
      status
    }
  }
`;

const IndexPage = props => { 
  const { loading, error, data } = useQuery(GET_ROBOT)
  
  console.log('Loading:', loading, 'Data:', data);

  const { robot: { name, status } } = data;
  return (
    <App>
      <InfoBox>
        🤖 Hello Robot {name}. Status: <b>{status}</b>
      </InfoBox>
    </App>
  )
}

export default withApollo(IndexPage)
