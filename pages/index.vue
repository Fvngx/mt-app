<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <Emenu />
      </el-col>
      <el-col :span="19">
        <Elife />
      </el-col>
    </el-row>
    <el-row :span="24">
      <artistic />
    </el-row>
  </div>
</template>

<script>
import Emenu from '@/components/index/menu'
import Elife from '@/components/index/life'
import artistic from '@/components/index/artistic'
export default {
  components: {
    Emenu,
    Elife,
    artistic
  }
}
</script>

<style lang="scss">
@import '@/assets/css/index/index.scss';
</style>
