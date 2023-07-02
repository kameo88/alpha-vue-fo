<template>

  <div class="wrap">

    <MainHeader />
    <!-- // gnb -->

    <div class="container">
      <div class="content" id="content">
        <h2 class="title_nav">Guide</h2>

        <div class="page_info">page info</div>
        
        <div class="section">
          <h3 class="tit02">sub title in section</h3>

        </div> <!-- // section -->


      </div> <!-- // content -->
    </div><!-- // container -->

  </div>
  <!-- // wrap -->


</template>

<script>
import MainHeader from '@/components/MainHeader.vue'

export default {
  name: 'TemplateGuide',
  components:{
    MainHeader,
  },
}
</script>
