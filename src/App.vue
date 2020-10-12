<template>
  <div>
    <h1>Test page</h1>
    <h1>{{ name }}</h1>
    <h1>{{ age }}</h1>
    <button @click="fn">赋值</button>
    <!-- 父往子传值 -->
    <Cmp :a="num" />
    {{ num }}
    <button @click="num++">自加</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import Cmp from './Cmp.vue'

@Component({
  components: {
    Cmp,
  },
})
export default class App extends Vue {
  name: string = 'damu'
  age: number = 18

  created(): void {
    console.log('生命周期 created 触发了')
    this.show()
  }

  // method
  show(): void {
    console.log(this.name)
    console.log(this.age)
  }

  // computed
  public num = 12
  // get age() {
  //   console.log('触发了 get 方法')
  //   return this.num
  // }
  // set age(val) {
  //   console.log('触发了 set 方法')
  //   this.num = val
  // }
  fn() {
    this.age = 100
  }

  // watch
  // @Watch('num')
  @Watch('num', { immediate: true, deep: true })
  private numChange(newVal: number, oldVal: number) {
    console.log(newVal, oldVal)
  }

  private filters = {} // 筛选条件
  private pages = 1 // 页码
  @Watch('fileters', { immediate: true, deep: true })
  @Watch('page')
  private reloadData() {
    console.log('请求数据')
  }
}
</script>

<style scoped></style>
