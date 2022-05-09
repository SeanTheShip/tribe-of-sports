<template>
    <div class="login-box">
        <div>
            아이디 : 
            <input class="id" v-model="ID" placeholder="아이다를 입력하세요">
            <!-- <p>{{여기에 오류상황 설명}}</p> -->
        </div>
        <div>
            비밀번호 : 
            <input class="password" v-model="Password" placeholder="비밀번호를 입력하세요">
        </div>
        <div class="buttons">
            <button type="button" class="btn btn-primary me-5">로그인</button>
            <button type="button" class="btn btn-success" @click="$router.push('/signup')">회원가입</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SignIn',

}
</script>

<style>
    .login-box {
        border: 1px solid;
        height: 300px;
        width: 500px;
        margin: auto;
        margin-top: 20%;
    }
    .id {
        margin: 10px;
        margin-top: 100px;
        
    }
    .password {
        margin-left: 10px;
        margin-right: 24px;
    }

    .buttons {
        margin: 30px;
    }

</style>