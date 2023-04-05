import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["gray-300"]};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme["gray-500"]};
    }
  }

  button {
    display: flex;
    gap: 0.75rem;
    align-items: center;

    border: 0;
    border-radius: 6px;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${(props) => props.theme["blue-300"]};
    color: ${(props) => props.theme["blue-300"]};
    font-weight: bold;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme["blue-500"]};
      border: 1px solid ${(props) => props.theme["blue-500"]};
      color: ${(props) => props.theme.white};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`;
