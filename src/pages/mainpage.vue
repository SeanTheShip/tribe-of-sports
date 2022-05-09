<template>
    <div>
        <div class="box" @click="$router.push('/signin')">
            <div class="title" >로그인</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainPage',

    data(){
        return{
            
        }
    }
}
</script>

<style>
    .box{
        margin: auto;
        margin-top: 10%;
        border: 1px solid black;
        height: 300px;
        width: 20%;
        background-color: ivory;
    }

    .title{
        margin-top: 140px;
        text-align: center;
        vertical-align: middle;
    }
    
</style>