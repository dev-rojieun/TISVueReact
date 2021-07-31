<style scoped>
</style>

<template>
    <section>
        <transition-group name="list" tag="ul">
            <li
                v-for="(todoItem, index) in todoItems"
                v-bind:key="todoItem.id"
                v-bind:class="checked(todoItem.done)"
                v-on:click="doneToggle(todoItem.id, index)"
            >
                <i class="checkBtn fas fa-check" aria-hidden="true"></i>
                {{ todoItem.todo }}
                <span
                    class="removeBtn"
                    type="button"
                    v-on:click="removeTodo(todoItem.id, index)"
                >
                    <i class="far fa-trash-alt" aria-hidden="true"></i>
                </span>
            </li>
        </transition-group>
    </section>
</template>

<script>
export default {
    /* pdtmc^2w */
    props: ["todoItems"],
    data: function () {
        /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
        return {};
    },
    //template: ``,
    methods: {
        /* 이벤트 핸들러 등록 */
        checked(done) {
            return done ? "checked" : null;
        },
        doneToggle(id, index) {
            console.log(window.event.target); // event 는 parmeter 로 선언하지 않아도, window.event 로 윈도우 객체이므로 자동으로 불러온다.
            this.$emit("done-toggle", id, index);
        },
        removeTodo(id, index) {
            console.log(window.event.target);
            this.$emit("remove-todo", id, index);
        }
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