import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
/**
 * 数据懒加载函数
 * @param {Element} target - dom对象 监听谁
 * @param {function} apifn - api函数
 */
export const useLazyData = (apiFn) => {
  const target = ref(null)
  const result = ref([])
  // stop 停止观察
  const { stop } = useIntersectionObserver(
    // target 监听的目标元素
    target,
    ([{ isIntersecting }]) => {
      // isIntersecting 是否进入可视区
      if (isIntersecting) {
        // 停止观察 调用Api函数获取数据
        stop()
        apiFn().then(data => {
          result.value = data.result
        })
      }
    }
  )
  return { result, target }
}
