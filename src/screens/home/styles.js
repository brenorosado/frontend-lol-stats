import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  height: 100vh;
  padding-top: 20vh;
  
  h1 {
    font-size: 40px;
    color: #fff;
    
    strong {
      color: #edc988;
    }
  }

  h2 {
    font-size: 30px;
    color: #fff;
    text-align: center;
    
    strong {
      color: #edc988;
    }
  }

  img {
      height: 200px;
  }
}
  @media(max-width: 414px){
      form{
        width: 350px;
      }

      h1{
        font-size: 20px;
      }
    }
`;