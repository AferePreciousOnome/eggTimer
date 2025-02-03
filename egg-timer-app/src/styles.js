import styled from "styled-components";

export const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
  height: 100vh; /* Full screen height */
  width: 100vw; /* Full screen width */
  background-color: #fce300;
  text-align: center;
`;

export const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center items inside */
  text-align: center; center;
  gap: 15px; /* Space between elements */
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.h1`
  font-size: 2rem;
  color: #ff8700;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  background-color: #ffcc00;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
`;
