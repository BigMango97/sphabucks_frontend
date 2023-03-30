import Link from "next/link";
import SubPageMenu from "@/components/sections/SubPageMenu";
import { useEffect, useState } from "react";
import { subPageMenu } from "@/types/type";
import axios from "axios";
import Head from "next/head";
import { useRecoilState } from "recoil";
import { subPage } from "@/state/subPage";
import { userState } from "@/state/userState";

import { useCookies } from "react-cookie";
export default function SubpageModal() {
  const [isLogin, setIsLogin] = useRecoilState(userState);
  const [cookies, setCookie] = useCookies(["id"]);
  const [subPageModal, setSubpageModal] = useRecoilState(subPage);
  const [loginData, setLoginData] = useRecoilState(userState);
  useEffect(() => {
    const myLogin = cookies.id;
    if (myLogin && !isLogin.isLogin) {
      console.log("로그인 되어있음");
      setIsLogin({
        userId: localStorage.getItem("userId") || "",
        accessToken: localStorage.getItem("accessToken") || "",
        isLogin: true,
      });
      // setIsLogin({
      //   userId: localStorage.getItem("userId") || "",
      //   accessToken: localStorage.getItem("accessToken") || "",
      //   refreshToken: localStorage.getItem("refreshToken") || "",
      //   isLogin: true,
      // });
    }
  },[]);
  const handleSubpageClose = () => {
    setSubpageModal(false);
  };
  if (!subPageModal) {
    return null;
  }

  return (
    <div className="modal">
      <div className="sub-page__main-header sub-boder-under">
        <div className="sub-page__main-header-content">
          <div className="sub-page__main-header-content-icon">
            <img
              src="assets/images/icons/close.svg"
              onClick={handleSubpageClose}
            />
          </div>

          {loginData.isLogin === true ? (
            <>
              <h2>Welcome</h2>
              <p className="welcome-title">
                온라인 스토어에 오신 것을 환영합니다.
              </p>
            </>
          ) : (
            <>
              <h2>sign in to Online Store</h2>
              <p>
                <Link href={`/login`} onClick={handleSubpageClose}>
                  <button className="sub-page-login" type="button">
                    로그인
                  </button>
                </Link>
                후 이용해보세요
              </p>
            </>
          )}
        </div>
      </div>
      <section className="sub-page__main-contents">
        <div className="sub-page__main-contents-title">
          <Link
            href={`http://localhost:3000/filter?bigCategory=0`}
            className="sub-page__main-contents-a"
            onClick={handleSubpageClose}
          >
            전체상품보기
            <img
              className="sub-change-left-icon"
              src="assets/images/icons/left-chevron.svg"
            />
          </Link>
        </div>
        <div className="sub-page__main-first-content">
          <div className="sub-page__main-content-category">
            <Link
              href="http://localhost:3000/filter?bigCategory=1"
              onClick={handleSubpageClose}
            >
              <img src="assets/images/products/케이크.jpg" />
              <p>케이크</p>
            </Link>
          </div>
          <div className="sub-page__main-content-category">
            <Link
              href="http://localhost:3000/filter?bigCategory=2"
              onClick={handleSubpageClose}
            >
              <img src="assets/images/products/텀블러보온병.jpg" />
              <p>텀블러/보온병</p>
            </Link>
          </div>
          <div className="sub-page__main-content-category">
            <Link
              href="http://localhost:3000/filter?bigCategory=3"
              onClick={handleSubpageClose}
            >
              <img src="assets/images/products/머그컵.jpg" />
              <p>머그/컵</p>
            </Link>
          </div>
        </div>
        <div className="sub-page__main-second-content">
          <div className="sub-page__main-content-category">
            <Link
              href="http://localhost:3000/filter?bigCategory=4"
              onClick={handleSubpageClose}
            >
              <img src="assets/images/products/라이프스타일.jpg" />
              <p>라이프스타일</p>
            </Link>
          </div>
          <div className="sub-page__main-content-category">
            <Link
              href="http://localhost:3000/filter?bigCategory=5"
              onClick={handleSubpageClose}
            >
              <img src="assets/images/products/티커피용품.jpg" />
              <p>티/커피용품</p>
            </Link>
          </div>
          <div className="sub-page__main-content-category">
            <Link
              href="http://localhost:3000/filter?bigCategory=6"
              onClick={handleSubpageClose}
            >
              <img src="assets/images/products/세트.jpg" />
              <p>세트</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="sub-page__sub-contents">
        <div className="sub-page__sub-content boder-under">
          <div className="sub-page__sub-content-title">
            <p>기획전</p>
            <p>실행중인 기획을 만나보세요</p>
          </div>
          <Link href="/event?category=1" onClick={handleSubpageClose}>
            <div className="sub-page__sub-content-icon">
              <img
                className="sub-change-left-icon"
                src="assets/images/icons/left-chevron.svg"
              />
            </div>
          </Link>
        </div>
      </section>
      <section className="sub-page__sub-contents">
        <div className="sub-page__sub-content boder-under">
          <div className="sub-page__sub-content-title">
            <p>베스트</p>
            <p>스타벅스의 베스트 상품을 만나보세요</p>
          </div>
          <Link href="/best?category=1" onClick={handleSubpageClose}>
            <div className="sub-page__sub-content-icon">
              <img
                className="sub-change-left-icon"
                src="assets/images/icons/left-chevron.svg"
              />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
