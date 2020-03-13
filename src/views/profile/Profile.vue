<!-- 档案 -->
<template>
  <div class>
    <nav-bar class="profile-nav">
      <div slot="center">个人设置</div>
    </nav-bar>
    <user-info></user-info>
    <section class="account">
      <div class="account-item">
        <div class="number">
          <span class="balance">0.00</span>元
        </div>
        <div class="account-info">我的余额</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>个
        </div>
        <div class="account-info">我的优惠</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>分
        </div>
        <div class="account-info">我的积分</div>
      </div>
    </section>
    <list-view :list-data="orderList"></list-view>
    <list-view :list-data="serviceList"></list-view>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import NavBar from 'components/common/navbar/NavBar'

import UserInfo from './childComps/UserInfo'
import ListView from './childComps/ListView'
export default {
  name: 'Profile',
  components: {
    NavBar,
    UserInfo,
    ListView
  },
  data() {
    return {
      orderList: [
        { icon: 'icon-xiaoxi', iconColor: '#666', info: '我的消息' },
        { icon: 'icon-kabao', iconColor: '#f40', info: '积分商城' },
        { icon: 'icon-huiyuan', iconColor: '#ffc636', info: '会员卡' }
      ],
      serviceList: [
        { icon: 'icon-icon-test1', iconColor: '#ff8198', info: '我的购物车' },
        { icon: 'icon-shouji', iconColor: '#ff8198', info: '下载购物APP' }
      ]
    }
  },
  computed: {},
  //监控data中的数据变化
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  methods: {}
}
</script>
<style scoped>
.profile-nav {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}
.account {
  display: flex;
}

.account-item {
  width: 100%;
  background-color: #fff;
  margin-right: 1px;
  text-align: center;
}

.account-item:last-of-type {
  margin-right: 0;
}

.account-item {
  color: #666;
  font-size: 13px;
  padding: 18px;
}

.account-item .balance {
  font-size: 24px;
  font-weight: 700;
  color: #ff5f3e;
}

.account-info {
  margin-top: 6px;
}

.order-list,
.service-list {
  margin-top: 12px;
}
</style>