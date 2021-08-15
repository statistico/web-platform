import { StrategyServiceClient } from '../proto/strategy_grpc_web_pb';
import { TeamServiceClient } from '../proto/team_grpc_web_pb';

export const TeamClient = () => {
  return new TeamServiceClient(
    process.env.REACT_APP_STATISTICO_SERVICES_HOST,
    null,
    null
  );
};

export const StrategyClient = () => {
  return new StrategyServiceClient(
    process.env.REACT_APP_STATISTICO_SERVICES_HOST,
    null,
    null
  );
};
