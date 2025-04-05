import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../LogInStatement/AuthContext";
import axios from "axios";
import {
  MyPageWrapper,
  SectionTitle,
  SubTitle,
  Divider,
  InfoBox,
  ProductList,
  ProductCard,
  ProductImage,
  ProductInfo
} from "./MyPage.styles";
import OnlyLogo from "../../Include/Header/OnlyLogo";


const MyPage = () => {
  const { auth } = useContext(AuthContext);
  const [likeList, setLikeList] = useState([]);

  useEffect(() => {
    axios.post("http://localhost/my-page", {
      likesMember: auth.memberId,
    }, {
      headers: {
        Authorization: `Bearer ${auth.accessToken}`
      }
    }).then((result) => {
      setLikeList(result.data);
    }).catch((error) => 
      console.error(error));
  }, [auth]);

  return (

    <>
    <OnlyLogo/>

    <MyPageWrapper>
      <SectionTitle>MY PAGE</SectionTitle>
      <Divider />

      <SubTitle>내 정보</SubTitle>
      <InfoBox>
        <p>아이디: {auth.memberId}</p>
        <p>이름: {auth.memberName}</p>
        <p>전화번호: {auth.memberPhone}</p>
      </InfoBox>

      <Divider />

      <SubTitle>위시리스트</SubTitle>
      <ProductList>
        {likeList.map(item => (
          <ProductCard key={item.productId}>
            <ProductImage src={item.productImage} alt={item.productName} />
            <ProductInfo>
              <strong>{item.productName}</strong>
              <span>{item.productPrice.toLocaleString()}원</span>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductList>
    </MyPageWrapper>
    </>
  );
};

export default MyPage;
