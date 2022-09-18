import styled from "styled-components";

export const Styling = styled.div`
  font-family: SFProText;
  margin: 2rem 6rem 2rem 6rem;
  .metrics {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .trending{
    display: flex;
    justify-content: space-between;
    width: 99%;
  }

  .activeUsers{
    margin-top: 30px;
    margin-bottom: 30px;
  }
 
  @media screen and (max-width: 1250px) {
    margin-left: 1.5rem;
    .metrics {
      display: block;
    }
    .trending{
      display: block;
    }
  }
  @media screen and (max-width: 650px) {
    .resumeDetails{
      display: none;
    }
  }
`;

interface CardProps {
  height?: string;
  width?: string;
  bgColor?: string;
  mobile?: boolean;
}

export const Card = styled.div<CardProps>`
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#ffffff")};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  .more {
    height: 40px;
    color: #0a5ff7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .trending {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .hide {
    display: none;
  }

  .details {
    display: flex;
    justify-content: space-between;
    font-family: SFProBold;
  }
  .chart {
    width: 100%;
  }
  .piechart {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
  .pieChartPercentage {
    margin-top: 7.9rem;
    font-size: 13px;
  }
  .pieChartPercentage p {
    margin-bottom: 7px;
    color: #4d4f5c;
  }

  .columnChartToggleDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .columnChartToggle {
    display: flex;
    justify-content: center;
  }
  .activeToggleButton{
    font-family: SFProBold;
    cursor: pointer;
    padding: 15px 30px 15px 30px;
    color: white;
    border-radius: 20px;
    background-color: #2C2C2C;
    border: none;
  }
  .toggleButton {
    font-family: SFProBold;
    cursor: pointer;
    padding: 5px 30px 5px 30px;
    color: white
    border-radius: 20px;
    background-color: white;
    border: none;
  }

  @media screen and (max-width: 1250px) {
    margin-bottom: 30px;
    width: 80vw;
  }
  @media screen and (max-width: 900px) {
    .sidecard {
      display: none;
    }
  }
  @media screen and (max-width: 650px) {
    display: ${(props) => props.mobile === false ? 'none': 'flex'};
    .columnChartToggleDiv{
      display:none;
    }
    .resumeDetails{
      display: none;
    }
  }
  @media screen and (max-width: 400px) {
  }
`;