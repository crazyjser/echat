<template>
  <div id="to-do-list">
    <div class="fild">
      <input type="text" class="input-add" maxlength="10" placeholder="不超过10个字" v-model="todoThing">
      <van-button size="small" class="btn-add" @click="add">添加</van-button>
    </div>
    <div class="content">
      <div class="sub-title">待办事件</div>
      <div v-if="todoEvent.length" class="event-list">
        <div v-for="item in todoEvent" :key="item.id" class="event-item van-hairline--bottom">
          <span>{{item.content}}</span>
          <div class="right-area">
            <van-button size="small" class="btn" @click="complete(item.id)">完成</van-button>
            <van-button size="small" class="btn" @click="cancel(item.id)">取消</van-button>
          </div>
        </div>
      </div>
      <div v-else class="no-data">暂无待办的事件</div>
      <div class="sub-title">完成事件</div>
      <div v-if="completeEvent.length" class="event-list">
        <div v-for="item in completeEvent" :key="item.id" class="event-item van-hairline--bottom">
          <span>{{item.content}}</span>
          <div class="right-area">
            <van-button size="small" class="btn" @click="resetTodo(item.id)">未完成</van-button>
          </div>
        </div>
      </div>
      <div v-else class="no-data">暂无完成的事件</div>
      <div class="sub-title">取消事件</div>
      <div v-if="cancelEvent.length" class="event-list">
        <div v-for="item in cancelEvent" :key="item.id" class="event-item van-hairline--bottom">
          <span>{{item.content}}</span>
          <div class="right-area">
            <van-button size="small" class="btn" @click="resetThing(item.id)">恢复</van-button>
          </div>
        </div>
      </div>
      <div v-else class="no-data">暂无取消的事件</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'todolist',
  data() {
    return {
      todoThing: ''
    }
  },
  computed: {
    todoEvent() {
      return this.$store.getters.obtainUserTodoThing
    },
    completeEvent() {
      return this.$store.getters.obtainUserCompleteThing
    },
    cancelEvent() {
      return this.$store.getters.obtainUserCancelThing
    }
  },
  methods: {
    add() {
      this.$store.dispatch('addThing', this.todoThing)
      this.todoThing = ''
    },
    complete(id) {
      this.$store.dispatch('completeThing', id)
    },
    cancel(id) {
      this.$store.dispatch('cancelThing', id)
    },
    resetTodo(id) {
      this.$store.dispatch('resetTodo', id)
    },
    resetThing(id) {
      this.$store.dispatch('resetThing', id)
    }
  }
}
</script>
<style lang="scss" scoped>
#to-do-list {
  width: 100%;
  height: 100%;
  .fild{
    margin-top: 10px;
    height: 50px;
    width: 100%;
    display: flex;
    .input-add{
      outline: none;
      height: 30px;
      flex: 3;
      margin-top: 10px;
      margin-right: 10px;
      border-radius: 5px;
      padding-left: 5px;
      color: #666;
    }
    .btn-add{
      flex: 1;
      color: #fff;
      margin-top: 10px;
      height: 30px;
    }
  }
  .content{
    width: 100%;
    height: calc(100% - 50px - 10px);
    padding-bottom: 10px;
    box-sizing: border-box;
    .sub-title{
      width: 100%;
      height: 50px;
      line-height: 50px;
      font-size: 20px;
    }
    .event-item{
      width: 100%;
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      .btn{
        margin-right: 10px;
      }
    }
    .no-data{
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: #999;
    }
  }
}
</style>
