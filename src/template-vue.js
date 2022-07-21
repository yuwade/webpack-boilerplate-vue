const { createApp, reactive, toRefs, ref } = Vue

const data = reactive({
  state: 0,
})
function testClick() {
  data.state++
  ElementPlus.ElMessage.success('点击完成+1.')
}
const app = createApp({
  setup() {
    const count = ref(0)
    return {
      count,
      testClick,
      ...toRefs(data),
    }
  },
})
app.use(ElementPlus)
app.mount('#app')
