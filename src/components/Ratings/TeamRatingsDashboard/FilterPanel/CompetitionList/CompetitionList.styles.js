import styled from 'styled-components';

const CompetitionListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
  padding: 25px;
  height: fit-content;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export default CompetitionListWrapper;