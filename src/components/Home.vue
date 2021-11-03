<template>
  <!-- <div class="hello">
    <a-button @click="onOpenModal">我是第一个按钮</a-button>
  </div> -->
  <div id="components-layout-demo-basic" style="height: 100%">
    <a-layout style="height: 100%">
      <a-layout-header>Header</a-layout-header>
      <a-layout>
        <a-layout-sider v-model:collapsed="collapsed" collapsible>
          <Menu />
        </a-layout-sider>
        <a-layout>
          <a-layout-content>
            <router-view></router-view>
          </a-layout-content>
          <a-layout-footer>Footer</a-layout-footer>
        </a-layout>
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, UnwrapRef, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import Menu from './Menu.vue'

interface FormState {
  name: string
}

export default defineComponent({
  props: {
    msg: String
  },
  components: {
    Menu
  },
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      name: 'first name'
    })
    const router = useRouter()
    router.push('/')
    return {
      formState,
      collapsed: ref<boolean>(false)
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#components-layout-demo-basic {
  .code-box-demo {
    text-align: center;
  }
}
#components-layout-demo-basic {
  .ant-layout.ant-layout-has-sider {
    height: 100%;
  }
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  color: #fff;
  background: #7dbcea;
}
[data-theme='dark'] #components-layout-demo-basic .ant-layout-header {
  background: #6aa0c7;
}
[data-theme='dark'] #components-layout-demo-basic .ant-layout-footer {
  background: #6aa0c7;
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  color: #fff;
  line-height: 120px;
  background: #3ba0e9;
}
[data-theme='dark'] #components-layout-demo-basic .ant-layout-sider {
  background: #3499ec;
}
#components-layout-demo-basic .ant-layout-content {
  min-height: 120px;
  color: #fff;
  line-height: 120px;
  background: rgba(16, 142, 233, 1);
}
[data-theme='dark'] #components-layout-demo-basic .ant-layout-content {
  background: #107bcb;
}
#components-layout-demo-basic > .code-box-demo > .ant-layout + .ant-layout {
  margin-top: 48px;
}
</style>
