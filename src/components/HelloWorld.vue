<template>
  <div class="home">
    <h1>HelloWorld</h1>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  PropSync,
  Model,
  Watch,
  Provide,
  Inject,
  Emit,
  Ref,
} from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

const symbol = Symbol('baz')

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  @Prop(Number) readonly propA: number | undefined
  @Prop({ default: 'default value' }) readonly propB!: string
  @Prop([String, Boolean]) readonly propC: string | boolean | undefined

  @PropSync('name', { type: String }) syncedName!: string

  @Model('change', { type: Boolean }) readonly checked!: boolean

  @Watch('child')
  onChildChanged(val: string, oldVal: string) {}

  @Watch('person', { immediate: true, deep: true })
  onPersonChanged1(val: string, oldVal: string) {}

  @Watch('person')
  onPersonChanged2(val: string, oldVal: string) {}

  @Inject() readonly foo!: string
  @Inject('bar') readonly bar!: string
  @Inject({ from: 'optional', default: 'default' }) readonly optional!: string
  @Inject(symbol) readonly baz!: string

  @Provide() foo1 = 'foo'
  @Provide('bar') baz1 = 'bar'

  count = 0

  @Emit()
  addToCount(n: number) {
    this.count += n
  }

  @Emit('reset')
  resetCount() {
    this.count = 0
  }

  @Emit()
  returnValue() {
    return 10
  }

  @Emit()
  onInputChange(e: any) {
    return e.target.value
  }

  @Emit()
  promise() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(20)
      }, 0)
    })
  }

  @Ref() readonly anotherComponent: any
  @Ref('aButton') readonly button!: HTMLButtonElement

  mounted() {
    console.log('mounted')
  }
}
</script>
