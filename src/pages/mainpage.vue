<template>
    <div>
        <div class="box" v-for="(b,i) in box" :key="i">
            <div class="title">{{box[i].title}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainPage',

    data(){
        return{
            box: [{
            title: '등록',

            },
            {
            title: '관리',

            },
            {
            title: '대시보드',

            },
            ],
        }
    }
}
</script>

<style>
    .box{
        margin: 5%;
        border: 1px solid black;
        height: 300px;
        width: 20%;
        background-color: ivory;
        float: left;
    }

    .title{
        margin-top: 140px;
        text-align: center;
        vertical-align: middle;
    }
    
</style>