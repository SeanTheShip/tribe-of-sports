<template>
    <div>
        <div class="dotted">
            <h3 class="nogym">등록된 체육관이 없습니다.</h3>
            <button class="register">체육관 등록하기</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NoGym',

}
</script>

<style>
    .dotted{
        border: 5px dotted rgb(81, 81, 235);
        background-color: rgb(188, 244, 92);
        width: 80vh;
        height: 50vh;
        margin: auto;
        margin-top: 10%;
    }

    h3.nogym{
        color: black;
        margin-top: 25%;
    }
    
    button.register{
        margin: 10%;
        border-radius: 10px;
        background-color: aqua;
    }
</style>