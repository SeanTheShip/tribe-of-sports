<template>
    <nav class="navbar sticky-top navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand Logo" @click="$router.push('/')">
                운동의 부족
                <sub class="sub">관리자</sub>
            </a>
            <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav"> -->
            <div> <!--v-if="로그인 정보가 없을경우"-->
                <button class="btn btn-sm btn-outline-primary me-3" type="button" @click="$router.push('/signin')">로그인</button>
                <button class="btn btn-sm btn-outline-success " type="button" @click="$router.push('/signup/registration')">회원가입</button>
            </div>
            
            <!--<div v-else="로그인 했을 경우">
                <a>이름</a>
            </div> -->
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',

}
</script>

<style>
    sub{
        color: white;
    }

    
</style>