<template>
  <div>
    <a-button @click="onOpenModal">我是第一个按钮</a-button>
    <div>{{ JSON.stringify(checkoutStatus) }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { Modal } from 'ant-design-vue'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore()
    const onOpenModal = () => {
      Modal.info({
        title: () => '我是第一个弹框',
        content: () => '江岸何人初见月，江月何时初照人？'
      })
      console.log(store.state)
      store.commit('changeUserName', '江别鹤')
      console.log(store.state)
      store.getters['about/getCheckoutStatus']
    }
    return {
      onOpenModal,
      checkoutStatus: computed(() => store.getters['about/getCheckoutStatus'])
    }
  }
})
</script>
