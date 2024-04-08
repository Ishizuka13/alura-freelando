import styled from "@emotion/styled";
import { useState } from "react";
import { Typography } from "../Typography/Typography";
import { Col, Row } from "react-grid-system";

const StyledButton = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.neutrals.a};
  border-radius: 16px;
  border-bottom-left-radius: ${({ isOpen }) => (isOpen ? "0" : "16px")};
  border-bottom-right-radius: ${({ isOpen }) => (isOpen ? "0" : "16px")};
  padding-right: -15px;
  margin-top: ${({ theme }) => theme.spacements.xs};
`;

const StyledUl = styled.ul`
  position: absolute;
  z-index: 2;
  top: -1px;
  border: 1px solid #373737;
  border-radius: 16px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  margin: 47.5px 0;
  padding: 0 22.5px;
  height: 137px;
  overflow: scroll;
  background: ${({ theme }) => theme.colors.white};
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledLi = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutrals.b};
  list-style: none;
  text-align: center;
  color: ${({ theme, activeFocus }) =>
    activeFocus ? theme.colors.focus : "inherit"};
`;

export const Select = ({ title, options, onClick, value }) => {
  const [open, isOpen] = useState(false);
  const [focused, isFocused] = useState(null);
  const [selected, isSelected] = useState(null);

  const handleKeyUp = (event) => {
    if (event.key === "Tab") {
      isOpen(true);
    }
  };

  const handleKeyDown = (event) => {
    isOpen(true);
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        isFocused((previousFocus) => {
          if (previousFocus >= options.length - 1) {
            return (previousFocus = 0);
          }
          return (previousFocus += 1);
        });
        break;
      case "ArrowUp":
        event.preventDefault();
        isFocused((previousFocus) => {
          if (previousFocus === null) {
            return 0;
          }
          if (previousFocus === 0) {
            return (previousFocus = options.length - 1);
          }
          return (previousFocus -= 1);
        });
        break;
      case "Enter":
        event.preventDefault();
        isFocused(null);
        isOpen(false);
        isSelected(options[focused]);
        break;
      case "Escape":
        event.preventDefault();
        isFocused(null);
        isOpen(false);
        isSelected(options[focused]);
        break;
      case "Tab":
        isFocused(null);
        isOpen(false);
        break;
      default:
        break;
    }
  };

  return (
    <label>
      {title}
      <Row>
        <Col>
          <StyledButton
            isOpen={open}
            onClick={() => isOpen(!open)}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            type="button"
          >
            <div>{selected ? selected.text : "Selecione"}</div>
            <span>{open ? "▲" : "▼"}</span>
          </StyledButton>
          {open && (
            <StyledUl>
              {options.map((option, index) => (
                <StyledLi
                  activeFocus={index === focused}
                  key={option.value}
                  onClick={() => {
                    isSelected(option);
                    onClick(option.text);
                  }}
                >
                  <Typography component="body" variant="subtitle">
                    {option.text}
                  </Typography>
                </StyledLi>
              ))}
            </StyledUl>
          )}
        </Col>
      </Row>
    </label>
  );
};
