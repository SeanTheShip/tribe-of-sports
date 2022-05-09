<template>
    <div>
        <div class="signup-box">
            <div class="in1">
                이름 :
                <input class="textbox" @input="Name" placeholder="이름을 입력하세요">
            </div>
            <div class="in" v-for="(box,i) in items" :key="i">
                {{items[i].Name}} : 
                <input class="textbox" :placeholder="[[items[i].PH]]">
                <!-- <p>{{여기에 오류상황 설명}}</p> -->
            </div>
            <button type="button" class="btn btn-success register" @click="$router.push('/signin')">등록하기</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SignUp',

    data(){
        
        return{
            Name: '',
            items: [
            {
                Name: '번호',
                PH: '번호를 입력하세요',
                // Model: number,
            },
            {
                Name: '아이디',
                PH: '아이디를 입력하세요',
                // Model: id,
            },
            {
                Name: '비밀번호',
                PH: '비밀번호를 입력하세요'
                // Model: password,
            },
            {
                Name: '비밀번호 재입력',
                PH: '비밀번호를 다시 입력하세요'
                // Model: re,
            },
            {
                Name: '이메일',
                PH: '이메일 주소를 입력하세요'
                // Model: email,
            }],
        }
    }
}
</script>

<style>
    .signup-box {
        border: 1px solid;
        height: 500px;
        width: 500px;
        margin: auto;
        margin-top: 20%;
    }
    .in1{
        float: right;
        margin: 10px;
        margin-right: 70px;
        margin-top: 50px;
    }

    .in {
        float: right;
        margin: 10px;
        margin-right: 70px;
    }

    input.textbox{
        width: 250px;
    }

    button.register{
        margin: 20px;
    }
</style>