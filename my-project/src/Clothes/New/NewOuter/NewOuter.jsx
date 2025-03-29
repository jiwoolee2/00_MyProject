import Header from "../../../Include/Header/Header";
import styled from "styled-components";

const Table = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  padding: 0 200px;  
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  margin-bottom: 20px;
`;

const ProductImg = styled.img`
  width: 200px;
  height: 270px;
  object-fit: cover; // 이미지 크기 고정
  max-width: 100%;
  padding: 0;
  margin: 0;
`;

const ProductInfo = styled.p`
  padding: 0;
  margin: 0;
`

const NewOuter = () => {
  return (
    <>
      <Header />

      {/* 상품목록 */}
      <Table>
        {/* Product 1 */}
        <ProductCard>
          <ProductImg
            src="https://placehold.co/300x400?text=Model+in+blue+oversized+tee+with+hat"
            alt="Model wearing a blue AIRism oversized crew neck T-shirt with a hat"
          />
          <ProductInfo className="text-xs mt-1">GENDERLESS, XS–4XL</ProductInfo>
          <ProductInfo className="text-sm font-medium">AIRism코튼오버사이즈크루넥T(5부)</ProductInfo>
          <ProductInfo className="text-lg font-bold">19,900원</ProductInfo>
          <ProductInfo className="text-lg font-bold"/>
        </ProductCard>

        {/* Product 2 */}
        <ProductCard>
          <ProductImg
            src="https://placehold.co/300x400?text=Purple+AIRism+cotton+oversized+crew+neck+T-shirt"
            alt="Purple AIRism cotton oversized crew neck T-shirt"
          />
          <ProductInfo className="text-xs mt-1">GENDERLESS, XS</ProductInfo>
          <ProductInfo className="text-sm font-medium">AIRism코튼오버사이즈크루넥T(5부)</ProductInfo>
          <ProductInfo className="text-lg font-bold text-red-600">12,900원</ProductInfo>
          <ProductInfo className="text-lg font-bold"/>
        </ProductCard>

        {/* Product 3 */}
        <ProductCard>
          <ProductImg
            src="https://placehold.co/300x400?text=Model+in+light+beige+striped+tee+and+hat"
            alt="Model wearing a light beige striped AIRism oversized T-shirt with a bucket hat"
          />
          <ProductInfo className="text-xs mt-1">MEN, XS–XXL</ProductInfo>
          <ProductInfo className="text-sm font-medium">AIRism코튼오버사이즈스트라이프T(반팔)</ProductInfo>
          <ProductInfo className="text-lg font-bold">19,900원</ProductInfo>
          <ProductInfo className="text-lg font-bold"/>
        </ProductCard>

        {/* Product 4 */}
        <ProductCard>
          <ProductImg
            src="https://placehold.co/300x400?text=Model+in+muted+plum+crew+neck+tee"
            alt="Model wearing a muted plum colored crew neck short sleeve T-shirt"
          />
          <ProductInfo className="text-xs mt-1">GENDERLESS, XS–4XL</ProductInfo>
          <ProductInfo className="text-sm font-medium">크루넥T(반팔)</ProductInfo>
          <ProductInfo className="text-lg font-bold">14,900원</ProductInfo>
          <ProductInfo className="text-lg font-bold"/>
        </ProductCard>
        
        
        {/* Product 5 */}
        <ProductCard>
          <ProductImg
            src="https://placehold.co/300x400?text=Model+in+blue+oversized+tee+with+hat"
            alt="Model wearing a blue AIRism oversized crew neck T-shirt with a hat"
          />
          <ProductInfo className="text-xs mt-1">GENDERLESS, XS–4XL</ProductInfo>
          <ProductInfo className="text-sm font-medium">AIRism코튼오버사이즈크루넥T(5부)</ProductInfo>
          <ProductInfo className="text-lg font-bold">19,900원</ProductInfo>
          <ProductInfo className="text-lg font-bold"/>
        </ProductCard>

        {/* Product 6 */}
        <ProductCard>
          <ProductImg
            src="/images/men.jpg"
            alt="Purple AIRism cotton oversized crew neck T-shirt"
          />
          <ProductInfo className="text-xs mt-1">GENDERLESS, XS</ProductInfo>
          <ProductInfo className="text-sm font-medium">AIRism코튼오버사이즈크루넥T(5부)</ProductInfo>
          <ProductInfo className="text-lg font-bold text-red-600">12,900원</ProductInfo>
          <ProductInfo className="text-lg font-bold"/>
          </ProductCard>

        {/* Product 7 */}
        <ProductCard>
          <ProductImg
            src="https://placehold.co/300x400?text=Model+in+light+beige+striped+tee+and+hat"
            alt="Model wearing a light beige striped AIRism oversized T-shirt with a bucket hat"
          />
          <ProductInfo className="text-xs mt-1">MEN, XS–XXL</ProductInfo>
          <ProductInfo className="text-sm font-medium">AIRism코튼오버사이즈스트라이프T(반팔)</ProductInfo>
          <ProductInfo className="text-lg font-bold">19,900원</ProductInfo>
          <ProductInfo className="text-lg font-bold"/>
        </ProductCard>
        {/* Product 8 */}
        <ProductCard>
          <ProductImg
            src="https://placehold.co/300x400?text=Model+in+muted+plum+crew+neck+tee"
            alt="Model wearing a muted plum colored crew neck short sleeve T-shirt"
          />
          <ProductInfo className="text-xs mt-1">GENDERLESS, XS–4XL</ProductInfo>
          <ProductInfo className="text-sm font-medium">크루넥T(반팔)</ProductInfo>
          <ProductInfo className="text-lg font-bold">14,900원</ProductInfo>
        
        </ProductCard>
      </Table>
    </>
  );
};

export default NewOuter;
