import { myMenuList } from "@/types/type"
import { useState } from "react"
import MyPageMenuList from "../ui/MyPageMenuList"
export default function MyPageMenuLists(props:{title:string}){
    return(
        <>
          <section className="main-service">
          <p className="main-service-title">{props.title}</p>
          <div className="main-service-lists">
            {
              props.title==='서비스'?<>
              <MyPageMenuList menuicon={'assets/images/icons/online-order.svg'} title={'주문내역'}/>
              <MyPageMenuList menuicon={'assets/images/icons/gift.svg'} title={'선물함'}/>
              <MyPageMenuList menuicon={'assets/images/icons/coupon.svg'} title={'쿠폰'}/>
              <MyPageMenuList menuicon={'assets/images/icons/delivery-truck.svg'} title={'배송지 관리'}/>
              <MyPageMenuList menuicon={'assets/images/icons/bell.svg'} title={'입고 알림 내역'}/>
              </>:
              <>
              <MyPageMenuList menuicon={'assets/images/icons/agree.svg'} title={'배송지 정보 수집 및 이용 동의'}/>
              </>
            }

          </div>
        </section>
        </>
    )
}