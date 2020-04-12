<template>
  <section class="m-istyle">
    <dl @mousemove="over">
      <dt>有格调</dt>
      <dd :class="{ active: kind === 'all' }" kind="all" keyword="">全部</dd>
      <dd :class="{ active: kind === 'part' }" kind="part" keyword="美食">约会聚餐</dd>
      <dd :class="{ active: kind === 'spa' }" kind="spa" keyword="丽人">丽人SPA</dd>
      <dd :class="{ active: kind === 'movie' }" kind="movie" keyword="电影">电影演出</dd>
      <dd :class="{ active: kind === 'travel' }" kind="travel" keyword="旅游">品质出游</dd>
    </dl>
    <ul class="ibody">
      <li v-for="item in cur" :key="item.title">
        <el-card>
          <img class="image" :src="item.img" />
          <ul class="cbody">
            <li class="title">{{ item.title }}</li>
            <li class="pos">
              <span>{{ item.pos }}</span>
            </li>
            <li class="price">
              ￥<em>{{ item.price }}</em
              ><span>/起</span>
            </li>
          </ul>
        </el-card>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      kind: '',
      list: {
        all: [
          {
            title: '东星贝儿凯客生日蛋糕',
            pos: '人气星选：6英寸生日礼物欧式水果蛋糕（卡通蛋糕）新鲜现做，传递幸福1个，约6英寸，圆形',
            price: '128',
            img: '//p0.meituan.net/bbia/850ce195a4db8d447644429ac6e32c20330100.jpg@368w_208h_1e_1c'
          }
        ],
        part: [
          {
            title: '东星贝儿凯客生日蛋糕',
            pos: '人气星选：6英寸生日礼物欧式水果蛋糕（卡通蛋糕）新鲜现做，传递幸福1个，约6英寸，圆形',
            price: '128',
            img: '//p0.meituan.net/bbia/850ce195a4db8d447644429ac6e32c20330100.jpg@368w_208h_1e_1c'
          }
        ],
        spa: [
          {
            title: '东星贝儿凯客生日蛋糕',
            pos: '人气星选：6英寸生日礼物欧式水果蛋糕（卡通蛋糕）新鲜现做，传递幸福1个，约6英寸，圆形',
            price: '128',
            img: '//p0.meituan.net/bbia/850ce195a4db8d447644429ac6e32c20330100.jpg@368w_208h_1e_1c'
          }
        ],
        movie: [
          {
            title: '东星贝儿凯客生日蛋糕',
            pos: '人气星选：6英寸生日礼物欧式水果蛋糕（卡通蛋糕）新鲜现做，传递幸福1个，约6英寸，圆形',
            price: '128',
            img: '//p0.meituan.net/bbia/850ce195a4db8d447644429ac6e32c20330100.jpg@368w_208h_1e_1c'
          }
        ],
        travel: [
          {
            title: '东星贝儿凯客生日蛋糕',
            pos: '人气星选：6英寸生日礼物欧式水果蛋糕（卡通蛋糕）新鲜现做，传递幸福1个，约6英寸，圆形',
            price: '128',
            img: '//p0.meituan.net/bbia/850ce195a4db8d447644429ac6e32c20330100.jpg@368w_208h_1e_1c'
          }
        ]
      }
    }
  },
  computed: {
    cur() {
      return this.list[this.kind]
    }
  },
  mounted() {
    this.kind = 'all'
  },
  methods: {
    over(e) {
      const dom = e.target
      const tag = dom.tagName.toLowerCase()
      if (tag === 'dd') {
        this.kind = dom.getAttribute('kind')
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/index/artistic.scss';
</style>
