import styled from "@emotion/styled";
import { Typography } from "../Typography/Typography";

const StyledLabel = styled.label`
  display: flex;
  justify-content: start;
`;
const StyledInput = styled.input`
  background-color: red;
  width: 24px;
  border-color: ${({ theme }) => theme.colors.dark.b};
`;

export const CheckBox = ({ options, onClick, value }) => {
  return (
    <>
      {options.map((option) => (
        <StyledLabel>
          <StyledInput
            type="radio"
            onClick={() => onClick(option.label)}
            value={option.value}
            checked={option.label === value}
          />
          <Typography variant="body2" component="body">
            {option.label}
          </Typography>
        </StyledLabel>
      ))}
    </>
  );
};
