import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;
  margin-left: 20rem;
  margin-right: 20rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    margin-top: -10rem;
    margin-left: 3rem;
    margin-right: 3rem;
  }
`;

export const SummaryCard = styled.div`
  background: var(--shape);
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color: var(--text-title);
  margin-bottom: 1rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
  }

  &.highlight-background {
    background: var(--green);
    color: #fff;
  }
`;

type SummaryTotalProps = {
  currentTotal: boolean;
};

const colors = {
  green: "#33cc95",
  red: "#e62e4d",
};

export const SummaryTotal = styled(SummaryCard)<SummaryTotalProps>`
  color: #fff;
  background: ${(props) => (props.currentTotal ? colors.green : colors.red)};
`;
