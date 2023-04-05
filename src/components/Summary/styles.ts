import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`;

interface SummaryCardProps {
  variant?: "blue";
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background-color: ${(props) => props.theme["gray-600"]};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme["gray-300"]};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${(props) =>
    props.variant === "blue" &&
    css`
      background-color: ${props.theme["blue-700"]};
    `}
`;

export const BoxContainerTotal = styled.div`
  background-color: ${(props) => props.theme["blue-700"]};
`;

export const BoxTitles = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const BoxValue = styled.span`
  font-size: 32px;
  margin-top: 0.75rem;
  color: ${(props) => props.theme["gray-100"]};
  font-weight: bold;
`;
