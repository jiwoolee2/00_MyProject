import styled from "styled-components";

export const Table = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(4, 266px);
  justify-content: center;
  column-gap: 0px;
  row-gap: 20px;
`;

export const ProductCard = styled.div`
  width: 266px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  border: 0.2px solid #e0e0e0;
  
  background-color: #fff;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 4px;
`;

export const ProductInfo = styled.p`
  padding: 0;
  margin: 6px 0;
  font-size: 15px;
  text-align: center;
  &.bold {
    font-weight: bold;
  }
`;
