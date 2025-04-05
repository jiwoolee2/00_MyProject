
import styled from "styled-components";

export const MyPageWrapper = styled.div`
  margin-top: 50px;
  padding: 40px;
  max-width: 800px;
  margin-left: 100px; 
  text-align: left;
`;

export const SectionTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const SubTitle = styled.h2`
  font-size: 20px;
  margin-top: 40px;
  margin-bottom: 16px;
`;

export const Divider = styled.hr`
  margin: 20px 0;
`;

export const InfoBox = styled.div`
  background-color: #f9f9f9;
  padding: 16px;
  border-radius: 8px;
  line-height: 2;
`;

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ProductCard = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  padding: 12px;
  border-radius: 8px;
  background-color: #fff;
`;

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 20px;
  border-radius: 8px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
