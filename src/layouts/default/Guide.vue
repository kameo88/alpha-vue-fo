<template>
  <router-view :page="page" :pageOn="pageOn" @changeGuidePage="changeGuidePage" />
</template>

<script>
export default {
  name: 'GuideMain',
  emits: ['changeGuidePage'],
  data(){
    return {
      page: [
              { "name" : "Guide", "path" : "/guide/ListGuide" },
              { "name" : "공통, etc", "path" : "/guide/ListCommon" },
              { "name" : "메인", "path" : "/guide/ListMain" },
              { "name" : "유심구매", "path" : "/guide/ListUsim" },
              { "name" : "요금제", "path" : "/guide/ListRatePlan" },
              { "name" : "혜택", "path" : "/guide/ListBeneFit" },
              { "name" : "고객지원", "path" : "/guide/ListCS" },
              { "name" : "마이페이지", "path" : "/guide/ListMypage" },
              { "name" : "로그인", "path" : "/guide/ListLogin" },
              { "name" : "푸터", "path" : "/guide/ListFooter" },
            ],
      pageOn: 0,
    }
  },
  methods: {
    changeGuidePage(num){
      this.pageOn = num;
    }
  }
}
</script>