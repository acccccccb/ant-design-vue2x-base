<template>
    <div class="home">
        <div>
            <div
                style="
                    float: left;
                    margin: 5px;
                    box-sizing: border-box;
                    display: none;
                "
                v-for="item in list"
                :key="item.id"
            >
                <div>
                    <img
                        style="width: 100%"
                        :src="item.headImg"
                        :alt="item.name"
                    />
                </div>
                <div class="flex">
                    <div style="width: 50%; text-align: left">
                        {{ item.name }}
                    </div>
                    <div style="width: 50%; text-align: right">
                        {{ item.position }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import http from 'axios';

    export default {
        name: 'Home',
        data() {
            return {
                list: [],
            };
        },
        created() {
            this.requestApi();
        },
        methods: {
            requestApi() {
                http.request({
                    url: '/list',
                    method: 'get',
                }).then((res) => {
                    console.log(res.data.data);
                    this.list = res.data.data;
                });
            },
        },
    };
</script>
<style scoped>
    .flex {
        display: flex;
        justify-content: flex-start;
    }
</style>
