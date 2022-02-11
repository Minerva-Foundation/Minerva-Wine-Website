import { Store } from 'vuex';// path to store file
import { RootState } from '@/store/index';

declare module '@vue/runtime-core' {
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<RootState>
  }
}