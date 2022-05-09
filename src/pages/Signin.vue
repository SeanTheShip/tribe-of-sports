<template>
    <div class="login-box">
        <form @submit="onSubmit">
            <input class="id" v-model="ID" placeholder="아이디를 입력하세요">
            <!-- <p>{{여기에 오류상황 설명}}</p> -->
            <input class="password" v-model="Password" placeholder="비밀번호를 입력하세요">
        </form>
        <div class="buttons">
            <button type="submit" class="btn btn-primary me-5">로그인</button>
            <button type="button" class="btn btn-success" @click="$router.push('/signup')">회원가입</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SignIn',
    data: () => ({
        ID: '',
        Password: '',
    }),
    methods: {
        onSubmit () {
            console.log(this.ID)
            console.log(this.Password)
        }
    }
}
</script>

<style>
    .login-box {
        border: 1px solid;
        height: 300px;
        width: 500px;
        margin: auto;
        margin-top: 10%;
        /* background-color: wheat; */
    }

    .id {
        float: right;
        margin: 20px;
        margin-right: 150px;
        margin-top: 100px;
    }
    .password {
        float: right;
        margin-bottom: 30px;
        margin-right: 150px;
        
    }

    .buttons {
        margin: 30px;
    }

</style>