<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>

<template>
    <div id="app">
        <h2>{{ msg }}</h2>
        <child1 />
        <child2 />
    </div>
</template>

<script>
import Child1 from "./components/Child1.vue";
import Child2 from "./components/Child2.vue";

export default {
    /* pdtmc^2w */
    props: [],
    data: function () {
        /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
        return {
            msg: "Welcome to Your Vue.js App"
        };
    },
    //template: ``,
    methods: {
        /* 이벤트 핸들러 등록 */
    },
    components: {
        /* 파일 컴포넌트 등록. 예시) "태그명" : 컴포넌트명 */
        // 컴포넌트 등록을위해 변수 선언
        child1: Child1,
        child2: Child2
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