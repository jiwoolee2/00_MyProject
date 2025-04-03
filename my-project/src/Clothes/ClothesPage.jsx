import Header from "../Include/Header/Header.jsx";
import {Table,ProductCard,ProductImg,ProductInfo} from "./ClothesPage.styles.js";
import {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";





const ClothesPage = () => {
  const {category,type} = useParams();
  const [productDatas,setProductData] = useState([]);
 
  console.log(category,type);
  useEffect (()=> {

    axios.get(`http://localhost/productinfo/${category}/${type}`)
        .then((result) => {
        const productData = result.data;
        console.log(productData)
          setProductData(productData)
  })
  },[category,type])

console.log(productDatas[0],productDatas[1]);

  return (
    <>
      <Header/>

      {/* 상품목록 */}
      <Table>
        
        {productDatas.map((e,index)=>(
          
          <ProductCard key={index}>
            <ProductImg
              src={e.productImage}
              style={{
                width: "100%",
                height: "300px",         // 
                objectFit: "cover",      // 
                objectPosition: "center" // 
              }}
            />
           
            <ProductInfo className="">{e.productName}</ProductInfo>
            <ProductInfo className="">{e.productType}</ProductInfo>
            <ProductInfo className="bold">{e.productPrice}원</ProductInfo>
          </ProductCard>
        ))}

     
      </Table>
    </>
  );
};

export default ClothesPage;
