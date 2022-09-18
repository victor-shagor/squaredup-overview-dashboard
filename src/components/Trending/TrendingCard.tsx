import React from "react";
import styled from "styled-components";
import { TrendingCardProps } from "constants/interfaces";

const TrendingCard = ({ className, loading, array }: TrendingCardProps) => {
  return (
    <Styling className={className && className}>
      {loading && <div data-testid="loading-state">Loading...</div>}
      {!array.length ? (
        <p data-testid="empty-state">No data</p>
      ) : (
        array.map((role: { _id: string; count: number }, index: number) => (
          <div key={index} className="container">
            <div className="nameDiv">
              <div className="BulletDiv"></div>
              <div className="role">
                <p>{role._id}</p>
              </div>
            </div>
            <div className="jobs">{role.count} jobs</div>
          </div>
        ))
      )}
    </Styling>
  );
};
export default TrendingCard;

const Styling = styled.div`
  background-color: #ffffff;
  width: 48%;
  min-height: 300px;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    border-bottom: 1px solid #f1f1f3;
    cursor: pointer;
  }
  .nameDiv {
    display: flex;
  }
  .namediv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .role {
    margin-top: 10px;
    font-size: 12px;
  }
  .BulletDiv {
    background-color: #1264f7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 14px;
    height: 5px;
    width: 5px;
    border-radius: 50%;
    margin-right: 10px;
    font-size: 14px;
    color: #1264f7;
  }
  .more {
    height: 40px;
    color: #0a5ff7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .jobs {
    font-size: 12px;
  }
  .trending {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  @media screen and (max-width: 900px) {
    width: 80%;
  }
  /* @media screen and (max-width: 900px) and (min-width: 700px) {
    .sidecard {
      display: none;
    }
  } */
`;
