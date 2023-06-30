<template>

  <header class="header">
    <div class="inner">
      <div class="h_left">
        <a href="javascript:void(0);" class="h_home"><span class="blind">+알파</span></a>
        <button type="button" class="h_back"><span class="blind">이전 화면으로 이동</span></button>
        <h2 class="h_title">header</h2>
      </div>
      <div class="h_right">
        <button type="button" class="h_rcmd"><span class="blind">친구추천</span></button>
        <button type="button" class="h_menu"><span class="blind">전체메뉴 열기</span></button>
        <button type="button" class="h_close"><span class="blind">닫기</span></button>
      </div>
    </div>

    <div class="pc_header">
        <div class="inner">
            <h1><a href="javascript:void(0);"><span class="blind">+알파</span></a></h1>
            <nav class="nav">
                <ul>
                    <li>
                        <a href="javascript:void(0);" class="menu_class">유심구매</a>
                        <div class="sub_menu">
                            <ul>
                                <li><a href="javascript:void(0);" class="img_delivery"><span class="blind">바로배송</span></a></li>
                                <li><a href="javascript:void(0);">편의점 픽업</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="menu_class">요금제</a>
                        <div class="sub_menu">
                            <ul>
                                <li><a href="javascript:void(0);">목록</a></li>
                                <li><a href="javascript:void(0);">내게 맞는 요금제 찾기</a></li>
                                <li><a href="javascript:void(0);">가입신청</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="menu_class">혜택</a>
                        <div class="sub_menu">
                            <ul>
                                <li><a href="javascript:void(0);"><sup>+</sup>알파 활용하기</a></li>
                                <li><a href="javascript:void(0);">이벤트</a></li>
                                <li><a href="javascript:void(0);">당첨자 발표</a></li>
                                <li><a href="javascript:void(0);">제휴카드 안내</a></li>
                                <li><a href="javascript:void(0);">가족/친구 추천하기</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="javascript:void(0);" class="menu_class">고객지원</a>
                        <div class="sub_menu">
                            <ul>
                                <li><a href="javascript:void(0);">내 주변 매장 찾기</a></li>
                                <li><a href="javascript:void(0);">공지사항</a></li>
                                <li><a href="javascript:void(0);">자주하는 질문</a></li>
                                <li><a href="javascript:void(0);">1:1 문의하기</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
            <div class="header_menu">
                <ul>
                    <li><a href="javascript:void(0);">로그인</a></li>
                    <li><a href="javascript:void(0);">회원가입</a></li>
                    <li><a href="javascript:void(0);">로그아웃</a></li>
                    <li><a href="javascript:void(0);">마이페이지</a></li>
                </ul>
            </div>
        </div>
    </div>

  </header>
  <!-- // header -->
  <!-- <aside class="aside">
    <div class="inner">
        <div class="asd_top">
            <a href="javascript:void(0);" class="asd_home"><span class="blind">home</span></a>
            <button type="button" class="asd_close"><span class="blind">전체메뉴 닫기</span></button>
        </div>
        <div class="aside_header">
            <div class="user">
                <div class="tit">
                    <a href="javascript:void(0);" class="link_login">로그인</a> 후 <br> 이용하실 수 있어요
                </div>
                <a href="javascript:void(0);" class="link_join">회원가입</a>
            </div>
            <div class="user">
                <div class="tit">
                    안녕하세요 <br>
                    <a href="javascript:void(0);" class="link_set">김알파님</a>
                </div>
                <a href="javascript:void(0);" class="link_logout">로그아웃</a>
            </div>
            <a href="javascript:void(0);" class="link_my">마이페이지</a>
        </div>
        <nav class="aside_nav">
            <ul>
                <li>
                    <button type="button" aria-expanded="false">유심구매</button>
                    <div class="sub_menu" role="region">
                        <ul>
                            <li><a href="javascript:void(0);" class="img_delivery"><span class="blind">바로배송</span></a></li>
                            <li><a href="javascript:void(0);">편의점 픽업</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <button type="button" aria-expanded="false">요금제</button>
                    <div class="sub_menu" role="region">
                        <ul>
                            <li><a href="javascript:void(0);">목록</a></li>
                            <li><a href="javascript:void(0);">내게 맞는 요금제 찾기</a></li>
                            <li><a href="javascript:void(0);">가입신청</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <button type="button" aria-expanded="false">혜택</button>
                    <div class="sub_menu" role="region">
                        <ul>
                            <li><a href="javascript:void(0);"><sup>+</sup>알파 활용하기</a></li>
                            <li><a href="javascript:void(0);">이벤트</a></li>
                            <li><a href="javascript:void(0);">당첨자 발표</a></li>
                            <li><a href="javascript:void(0);">제휴카드 안내</a></li>
                            <li><a href="javascript:void(0);">가족/친구 추천하기</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <button type="button" aria-expanded="false">고객지원</button>
                    <div class="sub_menu" role="region">
                        <ul>
                            <li><a href="javascript:void(0);">내 주변 매장 찾기</a></li>
                            <li><a href="javascript:void(0);">공지사항</a></li>
                            <li><a href="javascript:void(0);">자주하는 질문</a></li>
                            <li><a href="javascript:void(0);">1:1 문의하기</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
        <div class="aside_footer">
            <a href="javascript:void(0);" class="link_event">친구 추천 이벤트</a>
            <a href="javascript:void(0);" class="link_plus">결합하고 할인받자</a>
        </div>
    </div>
  </aside> -->

</template>

<script>
export default {
  name: 'compHeader'
}
</script>

<style>
  @import url(../assets/css/style.css);
</style>