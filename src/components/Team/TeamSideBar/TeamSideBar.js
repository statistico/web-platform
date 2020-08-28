import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux/Aux';
import SeasonSelect from '../../SeasonSelect/SeasonSelect';
import SidebarMax from '../../Sidebar/SidebarMax/SidebarMax';
import SidebarMin from '../../Sidebar/SidebarMin/SidebarMin';
import SidebarTab from '../../Sidebar/SidebarTab/SidebarTab';
import TeamDetails from '../../TeamDetails/TeamDetails';
import useTogglesMenu from '../../../hooks/useTogglesMenu';

const selectStyles = {
  container: (provided) => ({
    ...provided,
    width: '80%',
    textAlign: 'center',
    margin: '0 0 10px 0',
    padding: '10px 0 10px 0',
  }),

  valueContainer: (provided) => ({
    ...provided,
    justifyContent: 'center',
    color: '#22ccde',
  }),

  singleValue: (provided) => ({
    ...provided,
    fontWeight: 'bold',
    paddingLeft: '30px',
  }),
};

const options = [
  {
    id: 0,
    name: 'MATCHES',
  },
  {
    id: 1,
    name: 'PLAYERS',
  },
  {
    id: 2,
    name: 'STATS FILTER',
  },
  {
    id: 3,
    name: 'STATS OVERVIEW',
  },
  {
    id: 4,
    name: 'TIMELINES',
  },
];

const TeamSideBar = (props) => {
  const {
    selected,
    team,
    toggleDisplay,
    seasons,
    selectedSeason,
    toggleSeason,
  } = props;

  const { menuOpen, menuToggleHandler } = useTogglesMenu(true);

  return (
    <Aux>
      {menuOpen ? (
        <SidebarMax clicked={menuToggleHandler} open={menuOpen}>
          <TeamDetails team={team} />
          <SeasonSelect
            seasons={seasons}
            selectedSeason={selectedSeason}
            styles={selectStyles}
            toggleSeason={toggleSeason}
          />
          {options.map((option) => {
            return (
              <SidebarTab
                onClick={() => toggleDisplay(option.id)}
                active={selected === option.id}
                key={option.id}
                id={`Sidebar${option.id}`}
              >
                {option.name}
              </SidebarTab>
            );
          })}
        </SidebarMax>
      ) : (
        <SidebarMin clicked={menuToggleHandler} open={menuOpen} />
      )}
    </Aux>
  );
};

TeamSideBar.propTypes = {
  selected: PropTypes.number.isRequired,
  team: PropTypes.shape({
    logo: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  toggleDisplay: PropTypes.func.isRequired,
  seasons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      current: PropTypes.bool,
      seasonIds: PropTypes.arrayOf(PropTypes.number),
    })
  ).isRequired,
  selectedSeason: PropTypes.shape({
    name: PropTypes.string,
    current: PropTypes.bool,
    seasonIds: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  toggleSeason: PropTypes.func.isRequired,
};

export default TeamSideBar;
