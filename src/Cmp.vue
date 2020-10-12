<template>
  <div>
    {{ a }}
  </div>
</template>

<script lang="ts">
// import { Component, Vue } from 'vue-property-decorator'

// @Component({
//   props: {
//     a: Number,
//   },
// })
// export default class Cmp extends Vue {}

import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({})
export default class Cmp extends Vue {
  @Prop([Number, String])
  private a: number | string | undefined
  // @Prop({
  //   type: Number,
  //   default: undefined,
  //   validator(val) {
  //     if (val % 2 === 0) {
  //       return false
  //     } else {
  //       return true
  //     }
  //   },
  // })
  // private a: number | undefined
}
</script>

<style scoped></style>
