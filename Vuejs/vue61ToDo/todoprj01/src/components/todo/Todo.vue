<style scoped>
</style>

<template>

  <!-- TodoHeader -->
  <todo-header></todo-header>

  <!-- TodoInput -->
  <todo-input v-on:add-todo="addTodo"></todo-input>

  <!-- TodoList   -->
  <todo-list
      v-bind:todo-items="todoItems"
      v-on:remove-todo="removeTodo"
      v-on:done-toggle="doneToggle"
  ></todo-list>

  <!-- TodoFooter -->
  <todo-footer v-on:clear-all="clearAll"></todo-footer>

</template>

<script>
export default {
    /* pdtmc^2w */
    props: [],
    data: function () {
        /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
        return {};
    },
    //template: ``,
    methods: {
        /* 이벤트 핸들러 등록 */
    },
    components: {
        /* 파일 컴포넌트 등록. 예시) "태그명" : 컴포넌트명 */
    },
    computed: {
        /* 자동처리 + 동기식. 메서드로 작성. return 필수. */
    },
    watch: {
        /* 자동처리 + 비동기식. data 에 등록된 프로퍼티 모니터링. 메서드로 작성. 매개변수 입력 필수  */
    },
    mounted: function () {
        console.log("mounted");
    },
    updated: function () {
        console.log("updated");
    }
};
</script>