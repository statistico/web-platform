import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faSortNumericUp,
} from '@fortawesome/free-solid-svg-icons';

import TeamStatsSelect from '../TeamStatsSelect/TeamStatsSelect';
import classes from './TeamStatsMenu.module.css';

const teamStatsMenu = ({ addStat, statDisplay }) => {
  const selectStyles = {
    container: (provided) => ({
      ...provided,
      width: '15%',
      padding: '10px 0 10px 0',
    }),
  };

  return (
    <div className={classes.TeamStatsMenu}>
      <div className={classes.Icons}>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <span onClick={statDisplay}>
          <FontAwesomeIcon icon={faSortNumericUp} size="2x" />
        </span>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <span onClick={statDisplay}>
          <FontAwesomeIcon icon={faChartLine} size="2x" />
        </span>
      </div>
      <TeamStatsSelect addStat={addStat} styles={selectStyles} />
    </div>
  );
};

teamStatsMenu.propTypes = {
  addStat: PropTypes.func.isRequired,
  statDisplay: PropTypes.func.isRequired,
};

export default teamStatsMenu;
