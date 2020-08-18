import React from 'react';
import { useParams } from 'react-router';

import ContentWrapper from '../ContentWrapper/ContentWrapper';
import Dashboard from '../Dashboard/Dashboard';
import Loader from '../Loader/Loader';
import TeamStatsMatch from './TeamStatsMatch/TeamStatsMatch';
import TeamStatsSideBar from './TeamStatsSideBar/TeamStatsSideBar';
import useFetchesTeam from '../../hooks/useFetchesTeam';
import useTogglesActiveState from '../../hooks/useTogglesActiveState';
import classes from './TeamStats.module.css';

const TeamStats = () => {
  const { id } = useParams();
  const teamId = Number(id);
  const seasonIds = [16036];
  const { team, loading } = useFetchesTeam(id);
  const { selected, selectionToggleHandler } = useTogglesActiveState(0);

  return (
    <div className={classes.TeamStats}>
      <Loader loading={loading}>
        <TeamStatsSideBar
          team={team}
          selected={selected}
          toggleDisplay={selectionToggleHandler}
        />
        <Dashboard>
          <ContentWrapper active={selected === 0}>
            <TeamStatsMatch seasonIds={seasonIds} teamId={teamId} />
          </ContentWrapper>
          <ContentWrapper active={selected === 1}>
            Players - To be implemented
          </ContentWrapper>
          <ContentWrapper active={selected === 2}>
            Stats - To be implemented
          </ContentWrapper>
          <ContentWrapper active={selected === 3}>
            Timelines - To be implemented
          </ContentWrapper>
        </Dashboard>
      </Loader>
    </div>
  );
};

export default TeamStats;
