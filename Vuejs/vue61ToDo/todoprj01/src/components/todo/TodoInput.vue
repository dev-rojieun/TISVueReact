<style scoped>
</style>

<template>
    <div class="inputBox shadow">
        <input
            type="text"
            placeholder="Type what you have to do"
            v-model.trim:value="newTodoItem"
            v-on:keyup.enter="addTodo"
        />
        <span class="addContainer" v-on:click="addTodo">
            <i class="addBtn fas fa-plus" aria-hidden="true"></i>
        </span>

        <div
            class="modal-mask"
            v-on:keyup.esc="$emit('close')"
            v-if="showModal"
            v-on:close="showModal = false"
        >
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                        <h3 slot="header">경고</h3>
                    </div>

                    <div class="modal-footer">
                        <span v-on:click="showModal = false">
                            할 일을 입력하세요.
                            <i
                                class="closeModalBtn fas fa-times"
                                aria-hidden="true"
                            ></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    /* pdtmc^2w */
    props: [],
    data: function () {
        /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
        return {
            newTodoItem: null,
            showModal: false
        };
    },
    //template: ``,
    methods: {
        addTodo: function () {
            // 부모에게 값을 보낸다.
            // this.$emit("자식의 이벤트명" , 부모에게 보낼 값-파라미터로 들어감);
            this.$emit("add-todo", this.$data.newTodoItem);

            this.$data.newTodoItem = "";
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