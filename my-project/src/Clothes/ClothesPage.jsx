import Header from "../Include/Header/Header.jsx";
import { Table, ProductCard, ProductImg, ProductInfo } from "./ClothesPage.styles.js";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { AuthContext } from "../LogInStatement/AuthContext.jsx";

const ClothesPage = () => {
  const navi = useNavigate();
  const { auth } = useContext(AuthContext);
  const { category, type } = useParams();
  const [productDatas, setProductData] = useState([]);

  useEffect(() => {
    

    axios.get(`http://localhost/productinfo/${category}/${type}`)
      .then((result) => {
        const productData = result.data.map((datas) => ({
          ...datas,
          liked: datas.liked || false,
        }));
        setProductData(productData);
      });
  }, [category, type, auth]);

  const toggleLike = (productId) => {
    if (!auth?.accessToken || !auth?.memberId) {
      alert("로그인 후 이용해주세요.");
      navi("/log-in");
      return;
    }

    const updated = productDatas.map((item) =>
      item.productId === productId ? { ...item, liked: true } : item
    );
    setProductData(updated);

    axios.post("http://localhost/like", {
      likesMember: auth.memberId,
      likesProduct: productId,
    }, {
      headers: {
        Authorization: `Bearer ${auth.accessToken}`,
      },
    }).catch(error => {
      console.error(error.response.data);
      alert(error.response.data);
    });
  };

  return (
    <>
      <Header />
      <Table>
        {productDatas.map((e) => (
          <ProductCard key={e.productId}>
            <ProductImg src={e.productImage} />
            <ProductInfo className="bold">
              {e.productName}
              <span
                onClick={() => toggleLike(e.productId)}
                style={{ marginLeft: "10px", cursor: "pointer", fontSize: "20px" }}
              >
                {e.liked ? <AiFillHeart /> : <AiOutlineHeart />}
              </span>
            </ProductInfo>
            <ProductInfo className="bold">
              {e.productPrice.toLocaleString()}원
            </ProductInfo>
          </ProductCard>
        ))}
      </Table>
    </>
  );
};

export default ClothesPage;
