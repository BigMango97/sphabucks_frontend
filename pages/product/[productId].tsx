import { useRouter } from "next/router";
import SecondHeader from "@/components/layouts/SecondHeader";
import SlideSquareProduct from "@/components/layouts/SlideSquareProduct";
import DetailProduct from "@/components/ui/DetailProduct";
import { detailProduct, recommandproduct } from "@/types/type";
import { useState, useEffect } from "react";
import axios from "axios";
import FooterBtn from "@/components/ui/FooterBtn";
import CartProductCardDetail from "@/components/ui/CartProductCardDetail";
import CartPlusModal from "@/components/sections/CartPlusModal";
export default function Product() {
  const { query } = useRouter();
  const BaseUrl = process.env.baseApiUrl;
  // console.log("router.query", router.query.productId);
  const [data, setData] = useState<recommandproduct[]>([]);
  const [productData, setProductData] = useState<detailProduct>();
  const [isClick, setIsClick] = useState<Boolean>(false); // 메뉴의 초기값을 false로 설정
  const [isCartModal, setIsCartModal] = useState<Boolean>(false)
console.log('query',query)
  useEffect(() => {
    axios
      .get(`${BaseUrl}/api/v1/product-category/get-others/${query.productId}`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [query.productId]);

  useEffect(() => {
    axios
      .get(`${BaseUrl}/api/v1/product/get/${query.productId}`)
      .then((res) => {
        console.log(res.data);
        setProductData(res.data);
      })
      .catch((err) => console.log(err));
  }, [query.productId]);

  const handleAddCart = (): void => {
    console.log("queryyyyyyyyyyyy",query)
    console.log("addCart", query.productId);
    setIsCartModal(true)
    setIsClick(false)
    axios.post(``, {
      productId: query.productId,
      title :query.title,
      userId:query.userid,
      count:query.data
    });
    // axios post
  };

  return (
    <>
      <SecondHeader />
      <div className="sep"></div>
      <CartPlusModal
        isView = {isCartModal}
        setIsCartModal = {setIsCartModal}
      />
      {productData && <DetailProduct data={productData} />}
      {data.map((item) => (
        <SlideSquareProduct
          key={item.id}
          title={item.name}
          itemData={item.data}
        />
      ))}
      <div className="sep"></div>

      <footer className="footer-product-detail">
        <div className="footer-product-checkinfo">
          <div className="boder-under">
            <p>이용조건 및 배송 안내</p>
            <img
              src="../assets/images/icons/left-chevron.svg"
              alt="arrow-right"
              className="right-arrow"
            />
          </div>
          <div className="boder-under">
            <p>상품제공정보고시</p>
            <img
              src="../assets/images/icons/left-chevron.svg"
              alt="arrow-right"
              className="right-arrow"
            />
          </div>
          <div className="boder-under">
            <p>교환/반품 안내</p>

            <img
              src="../assets/images/icons/left-chevron.svg"
              alt="arrow-right"
              className="right-arrow"
            />
          </div>
          <div className="boder-under">
            <p>취소/환불 안내</p>
            <img
              src="../assets/images/icons/left-chevron.svg"
              alt="arrow-right"
              className="right-arrow"
            />
          </div>
        </div>
      </footer>
      <CartProductCardDetail
        isClick={isClick}
        setIsClick={setIsClick}
        data={productData}
      />
      {isClick ? (
        <div className="footer-charge-total-btn">
          <div onClick={handleAddCart}>
            <img
              src="../assets/images/icons/shopping-cart.svg"
              alt="arrow-right"
            />
          </div>
          <button type="button">선물하기</button>
          <button type="button">구매하기</button>
        </div>
      ) : (
        <FooterBtn
          title={"구매하기"}
          isClick={isClick}
          setIsClick={setIsClick}
        />
      )}
    </>
  );
}
