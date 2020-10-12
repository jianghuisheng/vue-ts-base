<template>
  <div>
    <h1>Test page</h1>
    {{ num }}-{{ count }}
    <p>{{ getAllNum() }}</p>
    <button @click="clickFunc">Click Me!</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
// import { Dictionary } from 'vue-router/types/router'
@Component({
  name: 'Test',
})
export default class Test extends Vue {
  public name: string
  public num = 1
  public count = 1

  constructor() {
    super()
    this.name = 'haha'
  }
  @Prop({ default: false }) private isCollapse!: boolean
  public clickFunc(): void {
    console.log(this.name)
    this.num++
    this.count++
  }
  @Watch('num')
  getNum(newVal: number, oldVal: number) {
    console.log('newVal', newVal, 'oldVal', oldVal)
  }
  // computed
  public getAllNum() {
    return this.num + this.count
  }
}
</script>

<style scoped></style>
