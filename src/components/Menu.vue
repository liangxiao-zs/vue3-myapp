<template>
  <a-menu
    mode="inline"
    :inline-collapsed="collapsed"
    v-model:selectedKeys="selectedKeys"
  >
    <a-menu-item
      v-for="menu in MENU_LIST"
      @click="handleChangeMenu(menu.path)"
      :key="menu.key"
    >
      <template #icon>
        <component :is="menu.icon" />
      </template>
      <span>{{ menu.name }}</span>
    </a-menu-item>
  </a-menu>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, toRefs } from 'vue'
import { PieChartOutlined, DesktopOutlined } from '@ant-design/icons-vue'
import { useRouter, useRoute } from 'vue-router'
import _lodash from 'lodash'

interface MenuListProps {
  name: string
  key: number
  icon: any
  path: string
}

const MENU_LIST: MenuListProps[] = [
  {
    name: '首页',
    key: 1,
    icon: PieChartOutlined,
    path: '/'
  },
  {
    name: '关于',
    key: 2,
    icon: DesktopOutlined,
    path: '/about'
  }
]

export default defineComponent({
  setup() {
    const router = useRouter()
    const route = useRoute()

    const selectedKeys: any[] = []
    selectedKeys.push(
      _lodash.find(MENU_LIST, (menu: MenuListProps) => menu.path === route.path)
        ?.key
    )
    const state = reactive({
      selectedKeys
    })

    const handleChangeMenu = (path: Record<string, any>) => {
      router.push(path)
    }

    return {
      ...toRefs(state),
      collapsed: ref<boolean>(false),
      MENU_LIST,
      handleChangeMenu
    }
  }
})
</script>
