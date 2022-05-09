<template>
    <div class="signup_reg"><!-- 모달창 만들어서 열려있다가 닫히는 형식으로 -->
        <form>
            <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputEmail3">
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword3">
                </div>
            </div>
            <fieldset class="row mb-3">
                <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
                <div class="col-sm-10">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
                        <label class="form-check-label" for="gridRadios1">
                            First radio
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                        <label class="form-check-label" for="gridRadios2">
                            Second radio
                        </label>
                    </div>
                    <div class="form-check disabled">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled>
                        <label class="form-check-label" for="gridRadios3">
                            Third disabled radio
                        </label>
                    </div>
                </div>
            </fieldset>
            <div class="row mb-3">
                <div class="col-sm-10 offset-sm-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck1">
                        <label class="form-check-label" for="gridCheck1">
                            Example checkbox
                        </label>
                    </div>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'RegistrationCheck',
    data: () => ({
        registration_num: '',
        registration_date: '',
        name: '',
    }),
    methods: {
        onSubmit () {
            console.log(this.registration_num)
            console.log(this.registration_date)
            console.log(this.name)
        }
    }
}
</script>

<style>
    .signup_reg {
        border: 1px solid;
        height: 300px;
        width: 500px;
        margin: auto;
        margin-top: 5%;
    }

    .num {
        float: right;
        margin: 20px;
        margin-right: 150px;
        margin-top: 100px;
    }
    .date {
        float: right;
        margin: 20px;
        margin-right: 150px;
        margin-top: 100px;
    }
    .name {
        float: right;
        margin-bottom: 30px;
        margin-right: 150px;
        
    }

</style>