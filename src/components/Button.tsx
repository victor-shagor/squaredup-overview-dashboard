import styled from "styled-components";
import { ButtonProps } from "constants/interfaces";

const Button = ({ onClick, active, text, testId }: ButtonProps) => {
  return (
    <Styling onClick={onClick} active={active} text={text} data-testid={testId}>
      {text}
    </Styling>
  );
};

const Styling = styled.button<ButtonProps>`
  background-color: ${(props) => (props.active ? "#2C2C2C" : "white")};
  font-family: SFProBold;
  cursor: pointer;
  padding: 15px 30px 15px 30px;
  color: ${(props) => (props.active ? "white" : "#2C2C2C")};
  border-radius: 20px;
  border: none;
`;

export default Button;
