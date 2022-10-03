import styled from "styled-components";

export default styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  /* padding-top: 1rem; */
  /* padding: 0 7.18rem 0 7.18rem; */

  /* @media (min-width: 1200px){
    margin: 0 115px;
  } */

  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};

`;
