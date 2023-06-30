<template>

  <div class="wrap">

    <CompHeader />

    <div class="container">
      <div class="content" id="content">
        <h2 class="title_nav">Guide</h2>

        <div class="page_info">Popup</div>
        
        <div class="section">
          <h3 class="tit02">Popup Alert</h3>

          <div class="group_btn">
              <button type="button" class="btn slL c01" id="btn_popup01" @click="$popup.open('#popup01', '#btn_popup01');">Alert</button>
          </div>

        </div> <!-- // section -->
        
        <div class="section">
          <h3 class="tit02">Popup Normal</h3>

          <div class="group_btn">
              <button type="button" class="btn_sL_c02" id="btn_popup02" @click="$popup.open('#popup02', '#btn_popup02');">Normal</button>
          </div>

        </div> <!-- // section -->
        
        <div class="section">
          <h3 class="tit02">Popup Full</h3>

          <div class="group_btn">
              <button type="button" class="btn_sL_c03" id="btn_popup03" @click="$popup.open('#popup03', '#btn_popup03');">Full</button>
          </div>

        </div> <!-- // section -->
        
        <div class="section">
          <h3 class="tit02">Popup notice</h3>

          <div class="group_btn">
              <button type="button" class="btn_sL_c04" id="btn_noticePop" @click="$popup.open('#noticePop', '#btn_noticePop');">notice</button>
          </div>

        </div> <!-- // section -->
        
        <div class="section">
          <h3 class="tit02">tooltip</h3>

          데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요
          <span class="tooltip">
              <button type="button" aria-expanded="false"><span class="blind">툴팁</span></button>
              <span class="info" role="tooltip">데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요</span>
          </span>

          <br><br><br><br>

          데이터 소진 시 유튜브 화질 1080p로
          <span class="tooltip">
              <button type="button" aria-expanded="false"><span class="blind">툴팁</span></button>
              <span class="info" role="tooltip">데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요</span>
          </span>
          원활히 볼 수 있어요

          <br><br><br><br>

          
          <span class="tooltip">
              <button type="button" aria-expanded="false"><span class="blind">툴팁</span></button>
              <span class="info" role="tooltip">데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요</span>
          </span>
          데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요

        </div> <!-- // section -->

      </div> <!-- // content -->
    </div><!-- // container -->

  </div>
  <!-- // wrap -->





<div class="pop_layer alert" id="popup01"> <!-- alert, normal, full -->
  <div class="pop_wrap">
    <div class="pop_header">
      <h3>안내</h3>
    </div>
    <div class="pop_content">
        <div class="info_con">
          지금 팝업을 닫으시면, <br>꼭 맞는 요금제 찾기가 중단되요. <br>정말 닫으시겠어요?
        </div>
    </div>
    <div class="pop_footer">
      <div class="group_btn">
        <button type="button" class="btn_sS_c07" data-action="close" @click="$popup.close('#popup01', '#btn_popup01')">취소</button>
        <button type="button" class="btn_sS_c02" @click="$popup.close('#popup01', '#btn_popup01'); $popup.close('#popup03', '#btn_popup01');">확인</button>
      </div>
    </div>
  </div>
</div> <!-- // pop_layer -->

<div class="pop_layer normal" id="popup02">
  <div class="pop_wrap">
    <div class="pop_header">
      <h3>안내</h3>
    </div>
    <div class="pop_content">
      content <br>content <br>content <br>content <br>content <br>content <br>content <br>content <br>content <br>content

      <br><br>
      데이터 소진 시 유튜브 화질 1080p로
      <span class="tooltip">
        <button type="button" aria-expanded="false"><span class="blind">툴팁</span></button>
        <span class="info" role="region">데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요</span>
      </span>
      원활히 볼 수 있어요

      <br>content <br>content <br>content <br>content <br>content <br>content <br>content <br>content <br>content
    </div>
    <div class="pop_footer">
      <div class="group_btn">
        <button type="button" class="btn_sM_c03">확인</button>
      </div>
    </div>
    <button type="button" class="pop_close" data-action="close" @click="$popup.close('#popup02', '#btn_popup02')"><span class="blind">팝업 닫기</span></button>
  </div>
</div> <!-- // pop_layer -->

<div class="pop_layer full" id="popup03">
  <div class="pop_wrap">
    <div class="pop_header">
      <h3>안내</h3>
    </div>
    <div class="pop_content">
      <div class="section">
          
        <div class="group_btn">
          <button type="button" class="btn_sL_c01" id="btn_popup04" @click="$popup.open('#popup01', '#btn_popup04');">팝업 and 팝업</button>
        </div>

      </div> <!-- // section -->
      <div class="section">
        section <br>content <br>content <br>content <br>content <br>content <br>content <br>content <br>content <br>content

        <br><br>
        데이터 소진 시 유튜브 화질 1080p로
        <span class="tooltip">
          <button type="button" aria-expanded="false"><span class="blind">툴팁</span></button>
          <span class="info" role="tooltip">데이터 소진 시 유튜브 화질 1080p로 원활히 볼 수 있어요</span>
        </span>
        원활히 볼 수 있어요

        <br>content <br>content <br>content <br>content <br>content <br>content <br>content <br>content <br>content
      </div> <!-- // section -->
    </div>
    <div class="pop_footer">
      <div class="group_btn">
        <button type="button" class="btn_sL_c03">확인</button>
      </div>
      <div class="group_btn">
        <button type="button" class="btn_sL_c03">확인</button>
      </div>
    </div>
    <button type="button" class="pop_close" data-action="close" @click="$popup.close('#popup03', '#btn_popup03');"><span class="blind">팝업 닫기</span></button>
  </div>
</div> <!-- // pop_layer -->


<div class="pop_layer notice" id="noticePop">
  <div class="pop_wrap">
    <div class="pop_content">
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:void(0);">
              <img src="../../resource/images/data/img_notice.jpg" alt="개통 시 Npay 5천원 선착순 증정 리뷰이벤트 2023.02.02 - 2023.03.28">
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:void(0);">
              <img src="../../resource/images/data/img_notice.jpg" alt="개통 시 Npay 5천원 선착순 증정 리뷰이벤트 2023.02.02 - 2023.03.28">
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:void(0);">
              <img src="../../resource/images/data/img_notice.jpg" alt="개통 시 Npay 5천원 선착순 증정 리뷰이벤트 2023.02.02 - 2023.03.28">
            </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="pop_footer">
      <button type="button" @click="$popup.close('#noticePop', '#btn_noticePop');">오늘은 더 안볼래요</button>
      <button type="button" class="close" data-action="close" @click="$popup.close('#noticePop', '#btn_noticePop');">닫기</button>
    </div>
  </div>
</div> <!-- // pop_layer -->



</template>

<script>
import CompHeader from '@/components/Header.vue'

export default {
  name: 'GuidePopup',
  components:{
    CompHeader,
  }
}
</script>