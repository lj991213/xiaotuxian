<template>
  <div class='home-category'
       @mouseleave="categoryId=null">
    <ul class="menu">
      <!-- 定义一个数据记录当前鼠标经过分类的ID，使用计算属性得到当前的分类推荐商品数据 -->
      <!-- 动态绑定active 决定左侧分类的hover激活样式颜色  -->
      <li v-for="item in menuList "
          :key="item.id"
          @mouseenter="categoryId=item.id"
          :class="{active:categoryId===item.id}">
        <router-link :to="
          `/category/${item.id}`">{{item.name}}</router-link>
        <!-- item.children有值时才遍历 -->
        <template v-if="item.children">
          <router-link v-for="sub in item.children"
                       :key="sub.id"
                       :to="`/category/sub/${sub.id}`">{{sub.name}}
          </router-link>
        </template>
        <!-- 骨架屏 -->
        <template v-else>
          <n-skeleton text
                      style="width:70px;height:18px;margin-right:5px;border-radius:3px" />
          <n-skeleton text
                      style="width:60px;height:18px;border-radius:3px" />
        </template>
      </li>
    </ul>
    <!-- 弹层 -->
    <div class="layer">
      <h4 v-if="currCategory">{{currCategory.id==='brand'?'品牌':'分类'}}推荐 <small>根据您的购买或浏览记录推荐</small></h4>
      <ul v-if="currCategory && currCategory.goods && currCategory.goods.length">
        <li v-for="item in currCategory.goods"
            :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture"
                 alt="">
            <div class="info">
              <p class="name ellipsis-2">{{item.name}}</p>
              <p class="desc ellipsis">{{item.desc}}</p>
              <p class="price"><i>¥</i>{{item.price}}</p>
            </div>
          </RouterLink>
        </li>
      </ul>
      <ul v-if="currCategory && currCategory.brands && currCategory.brands.length">
        <li class="brand"
            v-for="item in currCategory.brands"
            :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture"
                 alt="">
            <div class="info">
              <p class="place"><i class="iconfont icon-dingwei"></i>{{item.place}}</p>
              <p class="name ellipsis">{{item.name}}</p>
              <p class="desc ellipsis-2">{{item.desc}}</p>
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { reactive, ref, computed } from 'vue'
import { findBrand } from '@/api/home.js'
import { NSkeleton } from 'naive-ui'

export default {
  name: 'HomeCategory',
  components: {
    NSkeleton
  },
  // 使用vuex的一级分类数据9个分类+品牌，需要两个二级分类
  setup () {
    const store = useStore()
    // 品牌数据
    const brand = reactive({
      id: 'brand',
      name: '品牌',
      children: [{ id: 'brand-chilren', name: '品牌推荐' }],
      // 品牌弹窗
      brands: []
    })

    const menuList = computed(() => {
      // 得到9个分类 只拿2个子分类
      const list = store.state.category.list.map(item => {
        return {
          id: item.id,
          name: item.name,
          // 防止初始化没有children的时候调用slice函数报错
          children: item.children && item.children.slice(0, 2),
          goods: item.goods
        }
      })
      list.push(brand)
      return list
    })
    // 得到弹出层的商品数据
    const categoryId = ref(null)
    // 当前分类
    const currCategory = computed(() => {
      // 拿到当前分类的id和记录的id
      return menuList.value.find(item => item.id === categoryId.value)
    })
    // 获取品牌brand数据
    findBrand().then(data => {
      brand.brands = data.result.slice(0, 6)
    })
    return { menuList, categoryId, currCategory }
  }
}
</script>

<style lang="less" scoped>
.home-category {
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 99;
  .menu {
    li {
      padding-left: 30px;
      height: 50px;
      line-height: 50px;

      &:hover,
      &.active {
        background: @xtxColor;
      }
      a {
        padding-right: 5px;
        margin-right: 4px;
        color: #fff;
        &:first-child {
          font-size: 16px;
        }
        &:hover {
          color: @helpColor;
        }
      }
    }
  }
  // 弹层样式
  .layer {
    width: 990px;
    height: 500px;
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    left: 250px;
    top: 0;
    display: none;
    padding: 0 15px;
    h4 {
      font-size: 20px;
      font-weight: normal;
      line-height: 80px;
      small {
        font-size: 16px;
        color: #666;
      }
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 310px;
        height: 120px;
        margin-right: 15px;
        margin-bottom: 15px;
        border: 1px solid #eee;
        border-radius: 4px;
        background: #fff;
        &:nth-child(3n) {
          margin-right: 0;
        }
        a {
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          padding: 10px;
          &:hover {
            background: #e3f9f4;
          }
          img {
            width: 95px;
            height: 95px;
          }
          .info {
            padding-left: 10px;
            line-height: 24px;
            width: 190px;
            .name {
              font-size: 16px;
              color: #666;
            }
            .desc {
              color: #999;
            }
            .price {
              font-size: 22px;
              color: @priceColor;
              i {
                font-size: 16px;
              }
            }
          }
        }
      }
      li.brand {
        height: 180px;
        a {
          align-items: flex-start;
          img {
            width: 120px;
            height: 160px;
          }
          .info {
            p {
              margin-top: 8px;
            }
            .place {
              color: #999;
            }
          }
        }
      }
    }
  }
  &:hover {
    .layer {
      display: block;
    }
  }
}
</style>
