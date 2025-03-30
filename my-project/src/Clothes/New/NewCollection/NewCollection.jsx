import Header from "../../../Include/Header/Header";
import {Table,ProductCard,ProductImg,ProductInfo} from "./NewCollection.styles.js";
import {useState, useEffect} from "react";
import axios from "axios";

const NewCollection = () => {


  useEffect (()=> {

    axios.get(``)






  },[])




/* 
 controller를 4개만들어야하나??
 상품정보를 가져오는거잖아.,..
 select할게 2개잖아 -> category랑 type 그럼 이걸 보내면 되곘네 처음에 보낼 때
 그러면 하나로 

*/










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
          <ProductInfo className="">GENDERLESS, XS–4XL</ProductInfo>
          <ProductInfo className="">AIRism코튼오버사이즈크루넥T(5부)</ProductInfo>
          <ProductInfo className="bold">19,900원</ProductInfo>
          <ProductInfo className=""/>
        </ProductCard>

        {/* Product 2 */}
        <ProductCard>
          <ProductImg
            src="https://placehold.co/300x400?text=Model+in+blue+oversized+tee+with+hat"
            alt="Model wearing a blue AIRism oversized crew neck T-shirt with a hat"
          />
          <ProductInfo className="">GENDERLESS, XS–4XL</ProductInfo>
          <ProductInfo className="">AIRism코튼오버사이즈크루넥T(5부)</ProductInfo>
          <ProductInfo className="bold">19,900원</ProductInfo>
          <ProductInfo className=""/>
        </ProductCard>

        {/* Product 3 */}
        <ProductCard>
          <ProductImg
            src="https://placehold.co/300x400?text=Model+in+blue+oversized+tee+with+hat"
            alt="Model wearing a blue AIRism oversized crew neck T-shirt with a hat"
          />
          <ProductInfo className="">GENDERLESS, XS–4XL</ProductInfo>
          <ProductInfo className="">AIRism코튼오버사이즈크루넥T(5부)</ProductInfo>
          <ProductInfo className="bold">19,900원</ProductInfo>
          <ProductInfo className=""/>
        </ProductCard>

        {/* Product 4 */}
        <ProductCard>
          <ProductImg
            src="https://placehold.co/300x400?text=Model+in+blue+oversized+tee+with+hat"
            alt="Model wearing a blue AIRism oversized crew neck T-shirt with a hat"
          />
          <ProductInfo className="">GENDERLESS, XS–4XL</ProductInfo>
          <ProductInfo className="">AIRism코튼오버사이즈크루넥T(5부)</ProductInfo>
          <ProductInfo className="bold">19,900원</ProductInfo>
          <ProductInfo className=""/>
        </ProductCard>
        
        
        {/* Product 5 */}
        <ProductCard>
          <ProductImg
            src="https://placehold.co/300x400?text=Model+in+blue+oversized+tee+with+hat"
            alt="Model wearing a blue AIRism oversized crew neck T-shirt with a hat"
          />
          <ProductInfo className="">GENDERLESS, XS–4XL</ProductInfo>
          <ProductInfo className="">AIRism코튼오버사이즈크루넥T(5부)</ProductInfo>
          <ProductInfo className="bold">19,900원</ProductInfo>
          <ProductInfo className=""/>
        </ProductCard>

        {/* Product 6 */}
        <ProductCard>
          <ProductImg
            src="https://placehold.co/300x400?text=Model+in+blue+oversized+tee+with+hat"
            alt="Model wearing a blue AIRism oversized crew neck T-shirt with a hat"
          />
          <ProductInfo className="">GENDERLESS, XS–4XL</ProductInfo>
          <ProductInfo className="">AIRism코튼오버사이즈크루넥T(5부)</ProductInfo>
          <ProductInfo className="bold">19,900원</ProductInfo>
          <ProductInfo className=""/>
        </ProductCard>

        {/* Product 7 */}
        <ProductCard>
          <ProductImg
            src="https://placehold.co/300x400?text=Model+in+blue+oversized+tee+with+hat"
            alt="Model wearing a blue AIRism oversized crew neck T-shirt with a hat"
          />
          <ProductInfo className="">GENDERLESS, XS–4XL</ProductInfo>
          <ProductInfo className="">AIRism코튼오버사이즈크루넥T(5부)</ProductInfo>
          <ProductInfo className="bold">19,900원</ProductInfo>
          <ProductInfo className=""/>
        </ProductCard>

        {/* Product 8 */}
        <ProductCard>
          <ProductImg
            src="https://placehold.co/300x400?text=Model+in+blue+oversized+tee+with+hat"
            alt="Model wearing a blue AIRism oversized crew neck T-shirt with a hat"
          />
          <ProductInfo className="">GENDERLESS, XS–4XL</ProductInfo>
          <ProductInfo className="">AIRism코튼오버사이즈크루넥T(5부)</ProductInfo>
          <ProductInfo className="bold">19,900원</ProductInfo>
          <ProductInfo className=""/>
        </ProductCard>
      </Table>
    </>
  );
};

export default NewCollection;
