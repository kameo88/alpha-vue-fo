<template>
  <div class="wrap">
    <CompHeader />

    <div class="container">
      <div class="content" id="content">
        <h2 class="title_nav">Guide</h2>
            
        <div class="page_info">Tab</div>

        <div class="tab_list">
            <ul role="tablist">
              <li role="none" class="on">
                <button type="button" role="tab" aria-selected="true" aria-controls="tab_panel_01_01" @click="$tab.click">주소/매장명</button>
              </li>
              <li role="none">
                <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_01_02" @click="$tab.click">지하철</button>
              </li>
              <li role="none">
                <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_01_03" @click="$tab.click">내 위치</button>
              </li>
            </ul>
        </div>

        <div class="tabpanel_wrap">
          <div role="tabpanel" aria-expanded="true" tabindex="0" id="tab_panel_01_01">
            <h3 class="blind">주소/매장명</h3>

            <div class="section">
              주소/매장명
            </div>
          </div> <!-- // tabpanel -->
          <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_01_02">
            <h3 class="blind">지하철</h3>

            <div class="section">
              지하철
            </div>
          </div> <!-- // tabpanel -->
          <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_01_03">
            <h3 class="blind">내 위치</h3>

            <div class="section">
              내 위치
            </div>
          </div> <!-- // tabpanel -->
        </div> <!-- // tabpanel_wrap -->


        <br><br>

        <div class="tab_list02">
          <ul role="tablist">
            <li role="none" class="active on">
              <button type="button" role="tab" aria-selected="true" aria-controls="tab_panel_03_01" @click="$tab.click">데이터</button>
            </li>
            <li role="none" class="active">
              <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_03_02" @click="$tab.click">소진시 속도</button>
            </li>
            <li role="none">
              <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_03_03" @click="$tab.click">가격</button>
            </li>
            <li role="none">
              <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_03_04" @click="$tab.click">통화량</button>
            </li>
            <li role="none">
              <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_03_05" @click="$tab.click">문자량</button>
            </li>
            <li role="none">
              <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_03_06" @click="$tab.click">파트너사</button>
            </li>
            <li role="none">
              <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_03_07" @click="$tab.click">통신기술</button>
            </li>
            <li role="none">
              <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_03_08" @click="$tab.click">할인 기간</button>
            </li>
            <li role="none">
              <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_03_09" @click="$tab.click">부가서비스</button>
            </li>
            <li role="none">
              <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_03_10" @click="$tab.click">전용요금제</button>
            </li>
            <li role="none">
              <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_03_11" @click="$tab.click">결합요금</button>
            </li>
          </ul>
        </div>

        <div class="tabpanel_wrap">
          <div role="tabpanel" aria-expanded="true" tabindex="0" id="tab_panel_03_01">
            <h3 class="blind">데이터</h3>

            <div class="section">
              데이터
            </div> <!-- // section -->
          </div> <!-- // tabpanel -->
          <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_03_02">
            <h3 class="blind">소진시 속도</h3>

            <div class="section">
              소진시 속도
            </div> <!-- // section -->
          </div> <!-- // tabpanel -->
          <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_03_03">
            <h3 class="blind">가격</h3>

            <div class="section">
              가격
            </div> <!-- // section -->
          </div> <!-- // tabpanel -->
          <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_03_04">
            <h3 class="blind">통화량</h3>

            <div class="section">
              통화량
            </div> <!-- // section -->
          </div> <!-- // tabpanel -->
          <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_03_05">
            <h3 class="blind">문자량</h3>

            <div class="section">
              문자량
            </div> <!-- // section -->
          </div> <!-- // tabpanel -->
          <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_03_06">
            <h3 class="blind">파트너사</h3>

            <div class="section">
              파트너사
            </div> <!-- // section -->
          </div> <!-- // tabpanel -->
          <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_03_07">
            <h3 class="blind">통신기술</h3>

            <div class="section">
              통신기술
            </div> <!-- // section -->
          </div> <!-- // tabpanel -->
          <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_03_08">
            <h3 class="blind">할인 기간</h3>

            <div class="section">
              할인 기간
            </div> <!-- // section -->
          </div> <!-- // tabpanel -->
          <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_03_09">
            <h3 class="blind">부가서비스</h3>

            <div class="section">
              부가서비스
            </div> <!-- // section -->
          </div> <!-- // tabpanel -->
          <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_03_10">
            <h3 class="blind">전용요금제</h3>

            <div class="section">
              전용요금제
            </div> <!-- // section -->
          </div> <!-- // tabpanel -->
          <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_03_11">
            <h3 class="blind">결합요금</h3>

            <div class="section">
              결합요금
            </div> <!-- // section -->
          </div> <!-- // tabpanel -->
        </div> <!-- // tabpanel_wrap -->

        <div class="section">

          <div class="tab_list">
            <ul role="tablist">
              <li role="none" class="on">
                <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_02_01" @click="$tab.click">사용자 리뷰</button>
              </li>
              <li role="none">
                <button type="button" role="tab" aria-selected="true" aria-controls="tab_panel_02_02" @click="$tab.click">블로그 리뷰</button>
              </li>
            </ul>
          </div>

          <div class="tabpanel_wrap">
            <div role="tabpanel" aria-expanded="true" tabindex="0" id="tab_panel_02_01">
              <h3 class="blind">사용자 리뷰</h3>
              사용자 리뷰
            </div> <!-- // tabpanel -->
            <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_02_02">
              <h3 class="blind">블로그 리뷰</h3>
              블로그 리뷰
            </div> <!-- // tabpanel -->
          </div> <!-- // tabpanel_wrap -->

        </div> <!-- // section -->

        <div class="section">

            <div class="tab_list02">
                <ul role="tablist">
                    <li role="none" class="active on">
                        <button type="button" role="tab" aria-selected="true" aria-controls="tab_panel_04_01" @click="$tab.click">데이터</button>
                    </li>
                    <li role="none" class="active">
                        <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_04_02" @click="$tab.click">소진시 속도</button>
                    </li>
                    <li role="none">
                        <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_04_03" @click="$tab.click">가격</button>
                    </li>
                    <li role="none">
                        <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_04_04" @click="$tab.click">통화량</button>
                    </li>
                    <li role="none">
                        <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_04_05" @click="$tab.click">문자량</button>
                    </li>
                    <li role="none">
                        <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_04_06" @click="$tab.click">파트너사</button>
                    </li>
                    <li role="none">
                        <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_04_07" @click="$tab.click">통신기술</button>
                    </li>
                    <li role="none">
                        <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_04_08" @click="$tab.click">할인 기간</button>
                    </li>
                    <li role="none">
                        <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_04_09" @click="$tab.click">부가서비스</button>
                    </li>
                    <li role="none">
                        <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_04_10" @click="$tab.click">전용요금제</button>
                    </li>
                    <li role="none">
                        <button type="button" role="tab" aria-selected="false" aria-controls="tab_panel_04_11" @click="$tab.click">결합요금</button>
                    </li>
                </ul>
            </div>

            <div class="tabpanel_wrap">
              <div role="tabpanel" aria-expanded="true" tabindex="0" id="tab_panel_04_01">
                <h3 class="blind">데이터</h3>
                데이터
              </div> <!-- // tabpanel -->
              <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_04_02">
                <h3 class="blind">소진시 속도</h3>
                소진시 속도
              </div> <!-- // tabpanel -->
              <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_04_03">
                <h3 class="blind">가격</h3>
                가격
              </div> <!-- // tabpanel -->
              <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_04_04">
                <h3 class="blind">통화량</h3>
                통화량
              </div> <!-- // tabpanel -->
              <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_04_05">
                <h3 class="blind">문자량</h3>
                문자량
              </div> <!-- // tabpanel -->
              <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_04_06">
                <h3 class="blind">파트너사</h3>
                파트너사
              </div> <!-- // tabpanel -->
              <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_04_07">
                <h3 class="blind">통신기술</h3>
                통신기술
              </div> <!-- // tabpanel -->
              <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_04_08">
                <h3 class="blind">할인 기간</h3>
                할인 기간
              </div> <!-- // tabpanel -->
              <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_04_09">
                <h3 class="blind">부가서비스</h3>
                부가서비스
              </div> <!-- // tabpanel -->
              <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_04_10">
                <h3 class="blind">전용요금제</h3>
                전용요금제
              </div> <!-- // tabpanel -->
              <div role="tabpanel" aria-expanded="false" tabindex="0" id="tab_panel_04_11">
                <h3 class="blind">결합요금</h3>
                결합요금
              </div> <!-- // tabpanel -->
          </div> <!-- // tabpanel_wrap -->

        </div> <!-- // section -->

      </div> <!-- // content -->
    </div> <!-- // container -->

  </div><!-- // wrap -->

</template>

<script>
import CompHeader from "@/components/Header.vue";

export default {
  name: "GuidePopup",
  components: {
    CompHeader,
  },
};
</script>
