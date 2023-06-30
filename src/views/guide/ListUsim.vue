<template>

  <div class="wrap">

    <GuideHeader :page="page" :pageOn="pageOn" @changeGuidePage="changeGuidePage" />
    
    <h2>유심 : v0.0</h2>

    <div class="cont">
      <table>
        <caption>list</caption>
        <colgroup>
          <col span="1">
          <col span="1">
          <col span="1">
          <col span="1">
          <col span="1">
          <col span="1">
          <col span="1">
          <col span="1">
        </colgroup>
        <thead>
          <tr>
            <th scope="col">1 Depth</th>
            <th scope="col">2 Depth</th>
            <th scope="col">3 Depth</th>
            <th scope="col">4 Depth</th>
            <th scope="col">URL</th>
            <th scope="col">상태</th>
            <th scope="col">Date</th>
            <th scope="col">비고</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- table list -->

  </div>
  <!-- // wrap -->


  <hr>
</template>

<script>
import GuideHeader from '@/components/GuideHeader.vue'

export default {
  name: 'ListUsim',
  emits: ['changeGuidePage'],
  methods: {
    changeGuidePage(num){
      this.$emit('changeGuidePage', num);
    }
  },
  props : {
    page: Object,
    pageOn: Number,
  },
  components:{
    GuideHeader,
  }
}
</script>
