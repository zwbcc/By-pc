<template>
  <div class="container">
    <div class="intro">
      <h3 class="title">冰宇简介</h3>
      <p class="en">BINGYU INTRODUCTION</p>
      <div class="content">
        <img src="../../assets/images/intro.png" alt="">
        <p>阿斯达萨达撒多撒多萨达萨达萨达萨达撒阿萨德撒多萨达萨达萨达撒多撒啊萨达萨达萨达撒多撒多撒啊达萨达萨达撒多撒啊萨达萨达萨达达萨达萨达撒多撒啊萨达萨达萨达达萨达萨达撒多撒啊萨达萨达萨达</p>
      </div>
    </div>
    <div class="team">
      <h3 class="title">执行团队</h3>
      <p class="en">BINGYU TEAM</p>
      <div class="content">
        <div class="item" v-for="item in userList" :key="item.id">
          <img src="../../assets/images/team.png" alt="">
          <h3>{{ item.username }}</h3>
          <p>{{ item.work }}</p>
          <p v-html="item.introduce"></p>
        </div>
      </div>
    </div>
    <div class="concept">
      <h3 class="title">经营理念</h3>
      <p class="en">EXPERIENCE CONCEPT</p>
      <div class="content">
        <img src="../../assets/images/about-bgc.png" alt="">
        <div class="text">
          <p>福建冰宇制冷设备工程有限公司是集制冷产品设计、产品开发、产品制造、产品销售、工程成套、售后服务、技术咨询为一体的一站式服务公司。</p>
          <p>公司以生产和定制各种制冷设备，销售及制冷工程主导，专业安装组合式冷冻库、速冻库、冷藏库、保鲜库、实验库、防爆库和超低温（0℃至-120℃）库、工业冷水机组、制冰池、单冻机，速冻隧道、真空预冷、真空冻干、车间降温及各类非标工艺制冷系统及冷库安装工程。</p>
          <p>公司产品按照欧洲标准设计，采用先进的制造工艺以及严格的质量控制提醒，确保了产品的高质量、高稳定性和耐用性。公司拥有自营进出口权，可为国内外用户提供由设计到生产、制作安装整套工艺流程等系列制冷配套项目，能满足客户的各种需要。</p>
          <p>产品广泛的应用于食品、医疗卫生、冷链物流、船舶冷冻、生物工程、果蔬、水产品、超市、电子、酒店服务业等各行业。在发展的过程中，公司始终本着以人为本，以科技促发展的经营理念，和上海北京多所大学及科研机构联合协作，致力于产品升级、节能环保的开发研究，打造出一 支工作经验丰富、服务体系完善的施工队伍，为客户提供制冷工程设计、安装、售后维护一体化最优质的服务。</p>
          <p>本公司并具备了国家制冷安装资质、中国制冷协会会员单位等荣誉。安装过程中公司一贯坚持“走质量路线,做精品工程”的施工工艺。经过快速的发展在国内外多个地方建立了销售网络和健全的售前售后服务体系，完全免除客户的后顾之忧。欢迎国内外朋友来电咨询，前来实地考察。</p>
        </div>
      </div>
    </div>
     <div class="concept">
      <h3 class="title">企业文化</h3>
      <p class="en">ENTERPRISE CULTURE</p>
      <div class="content">
        <div class="text">
          <p>福建冰宇制冷设备工程有限公司是集制冷产品设计、产品开发、产品制造、产品销售、工程成套、售后服务、技术咨询为一体的一站式服务公司。</p>
          <p>公司以生产和定制各种制冷设备，销售及制冷工程主导，专业安装组合式冷冻库、速冻库、冷藏库、保鲜库、实验库、防爆库和超低温（0℃至-120℃）库、工业冷水机组、制冰池、单冻机，速冻隧道、真空预冷、真空冻干、车间降温及各类非标工艺制冷系统及冷库安装工程。</p>
          <p>公司产品按照欧洲标准设计，采用先进的制造工艺以及严格的质量控制提醒，确保了产品的高质量、高稳定性和耐用性。公司拥有自营进出口权，可为国内外用户提供由设计到生产、制作安装整套工艺流程等系列制冷配套项目，能满足客户的各种需要。</p>
          <p>产品广泛的应用于食品、医疗卫生、冷链物流、船舶冷冻、生物工程、果蔬、水产品、超市、电子、酒店服务业等各行业。在发展的过程中，公司始终本着以人为本，以科技促发展的经营理念，和上海北京多所大学及科研机构联合协作，致力于产品升级、节能环保的开发研究，打造出一 支工作经验丰富、服务体系完善的施工队伍，为客户提供制冷工程设计、安装、售后维护一体化最优质的服务。</p>
          <p>本公司并具备了国家制冷安装资质、中国制冷协会会员单位等荣誉。安装过程中公司一贯坚持“走质量路线,做精品工程”的施工工艺。经过快速的发展在国内外多个地方建立了销售网络和健全的售前售后服务体系，完全免除客户的后顾之忧。欢迎国内外朋友来电咨询，前来实地考察。</p>
        </div>
        <img src="../../assets/images/about-bgc.png" alt="" class="concept_bottom">
      </div>
    </div>
    <div class="after">
      <h3 class="title">售后服务</h3>
      <p class="en">AFTER-SALES SERVICE</p>
      <div class="content">
        <div class="top">
          <div class="text">
            <h3>冰宇及时的售后服务</h3>
            <p>
              1.免费冷库建造报价<br/>
            我们需要您提供的数据：<br/>
            （1）冷库的使用用途；<br/>
            （2）冷库的面积/体积（长、宽、高）；<br/>
            （3）冷库外墙是否建设完毕；<br/>
            （4）冷库的使用温度是多少摄氏度；<br/>
            2.免费提供冷库设计方案及冷库设计图纸<br/>
            3.免费上门测量冷库面积；
            </p>
          </div>
          <img src="../../assets/images/after.png" alt="">
        </div>
        <p>服务内容：
            ◇冷冻设备保用期为设备验收合格后12个月。即本保修期内设备因产品质量问题，由我方提供免费服务。
            ◇工程保修期：验收合格后12个月内。
            ◇免费提供技术指导安装及设备调试服务。
            ◇终身优惠价提供易损部件，并协助用户进行机组大修。
            ◇为用户代培训两名技术操作人员，免收培训费，食、宿、交通费用自理。
            ◇为用户提供机组的保养工作。</p>
        <p>增值服务：
            ◇技术人员到现场调试时将对用户操作人员进行现场讲解和现场操作培训，使用户操作人员具有独立操作的能力。
            ◇公司售后服务人员会定期或不定期的回访，并辅之以“问候式服务”，保证服务系统的畅通。
            ◇随时无偿为用户提供技术、设备配套咨询。</p>
        <p>服务保障体系：
            公司专设售后服务中心，开通24小时报修电话，接到报修电话，市内维修人员将在3～5小时内赶往现场，外省市48小时内赶往现场。一般故障24小时内解决，重大故障3日内解决。</p>
        <p>浩爽制冷始终以客户至上为宗旨，在潜心钻研技术的同时，不断加强完善售后服务，彻底解决客户对售后方面的顾虑与担忧。</p>
        <p> 为客户建好库，让客户放心用库，是每一个浩爽人一直的追求，浩爽也将继续秉承客户至上的宗旨与理念，不断完善加强技术和售后服务，为更多各行业有制冷需求的朋友提供更为高端的制冷技术与售后服务。</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userList: []
    };
  },
  methods: {
    async getAbout() {
      const res = await this.$http.get("/by/about");
      if (res.data.code === 0) {
        this.userList = res.data.object;
      }
    }
  },
  created() {
    this.getAbout();
  }
};
</script>
<style lang="stylus" scoped>
.title
  font-size 18px
  margin-top .4rem
  color #00a2e9
.en
  font-size 14px
  color #c3c3c3
  margin .2rem 0 .4rem 0
.content
  padding .2rem .3rem
  border-top 1px solid #ccc
.container
  text-align center
  .intro 
    margin-top .2rem
    overflow hidden
    border-bottom 10px solid #eee
    .content
      img 
        margin-bottom .2rem
        width 100%
        height 1.2rem
      p
        text-indent 2em
        text-align left
        font-size 8px
        line-height 10px
  .team 
    border-bottom 10px solid #eee
    .content
      display flex
      flex-wrap wrap 
      justify-content space-between
      .item 
        width 47%
        height 5.6rem
        box-shadow 0 0 10px #aaa
        margin-bottom .3rem
        &:nth-child(2n)
          margin-left .3rem
        img
          // width 100%
          height 2.8rem
        h3 
          margin .2rem 
          font-size 12px
        p 
          padding 0 .2rem
          margin-bottom .2rem
          font-size 10px 
          line-height 12px
  .concept 
    border-bottom 10px solid #eee
    .content 
      display flex 
      img 
        margin-right .2rem
        width 2.72rem
        height 6.38rem
      .concept_bottom 
        margin-right  0
        margin-left  .2rem
      .text 
        flex 1
        p 
         text-align left 
         text-indent 2em
         font-size 8px
         line-height 10px
  .after 
   .content
    text-align left 
    .top 
      display flex
      img 
        width 3.6rem 
        height  2.04rem
     .text 
        flex 1
        h3
          font-size 10px
          line-height 12px
          color #434343
        p
          font-size 8px
          color #666666
      p 
        font-size 8px
        color #666666
</style>
