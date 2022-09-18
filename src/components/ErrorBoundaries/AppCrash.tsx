import styled from "styled-components";

const AppCrash = ({ error }: any) => {
  return (
    <Styling>
      <div className="container">
        <div className="modal-content">
          <h2>App Crashed</h2>
          <p>Something went horribly wrong.</p>
          <div>
            {process.env.NODE_ENV === "development"
              ? error
              : "our engineers are working on this"}
          </div>
        </div>
      </div>
    </Styling>
  );
};

const Styling = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 100px; /* Location of the box */
    width: 70%; /* Full width */
    height: 50%; /* Full height */
    background-color: gray;
  }
`;

export default AppCrash;
