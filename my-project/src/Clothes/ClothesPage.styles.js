import styled from "styled-components";

export const Table = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(4, 266px); //  266px 고정
  justify-content: center;                //  가운데 정렬
  column-gap: 0px;                        //  좌우 공백 제거
  row-gap: 20px;                          
`;

export const ProductCard = styled.div`
  width: 266px;                      
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`;

export const ProductImg = styled.img`
  width: 266px;
  height: 350px;
  object-fit: cover;
  display: block;
  margin: 0;
  padding: 0;
`;

export const ProductInfo = styled.p`
  padding: 0;
  margin: 0;
`