<template>
  <div class="hello">
    <a-button @click="onOpenModal">我是第一个按钮</a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, UnwrapRef, reactive, toRaw } from 'vue'
import { useRoute } from 'vue-router'
import { Modal } from 'ant-design-vue'

interface FormState {
  name: string
}

export default defineComponent({
  props: {
    msg: String
  },
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      name: ''
    })

    const router = useRoute()

    const onOpenModal = () => {
      console.log(toRaw(router))
      console.log(router.path)
      Modal.info({
        title: () => '我是第一个弹框',
        content: () => '江岸何人初见月，江月何时初照人？'
      })
    }
    return {
      formState,
      onOpenModal
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
