<template>
    <div class="signup">
        <form class="row g-3">
            <div class="col-md-6">
                <label for="inputEmail4" class="form-label">name</label>
                <input type="email" class="form-control" id="inputEmail4">
            </div>
            <div class="col-md-6">
                <label for="inputPassword4" class="form-label">host_name</label>
                <input type="password" class="form-control" id="inputPassword4">
            </div>
            <div class="col-12">
                <label for="inputAddress" class="form-label">id</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
            </div>
            <div class="col-12">
                <label for="inputAddress2" class="form-label">pw</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
            </div>
            <div class="col-md-6">
                <label for="inputCity" class="form-label">phone</label>
                <input type="text" class="form-control" id="inputCity">
            </div>
            <div class="col-md-4">
                <label for="inputState" class="form-label">location</label>
                <select id="inputState" class="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
            </div>
            <div class="col-md-2">
                <label for="inputZip" class="form-label">registration</label>
                <input type="text" class="form-control" id="inputZip">
            </div>
            <div class="col-12">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck">
                    <label class="form-check-label" for="gridCheck">
                        large, small, event
                    </label>
                </div>
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Sign in</button>
            </div>
        </form>
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
                Name: '비밀번호',
                PH: '비밀번호를 입력하세요',
                // Model: number,
            },
            {
                Name: '비밀번호 재입력',
                PH: '비밀번호를 다시 입력하세요'
                // Model: re,
            },
            {
                Name: '이름',
                PH: '이름을 입력하세요',
                // Model: id,
            },
            {
                Name: '체육관 이름',
                PH: '체육관 이름을 입력하세요'
                // Model: password,
            },
            {
                Name: '전화번호',
                PH: '전화번호를 입력하세요'
                // Model: email,
            },
            {
                Name: '사업자 등록번호',
                PH: '사업자 등록번호를 입력하세요'
                // 전페이지에서 가져오기
            },
            {
                Name: '이메일',
                PH: '이메일 주소를 입력하세요'
                // Model: email,
            },
            {
                Name: '주소',
                PH: '주소를 입력하세요'
                // Model: re,
            },
            //종목, 시, 구
            ],
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
        margin-top: 10%;
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
        border-radius: 20px;
    }

    button.register{
        margin: 20px;
    }
</style>