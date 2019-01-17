<template>
<!-- eslint-disable -->
    <div class="row header">
        <div class="col s6 time">
            <h5 class="day white-text">Friday</h5>
            <h6 class="date white-text">19 Desember 2018</h6>
        </div>
        <div class="col s6 btn-wrapper">
            <a id="add-task" class="btn-float" @click="openModal">
            <img src="/img/add.png">
            </a>
        </div>
    </div>
</template>

<script>
export default {
/* eslint-disable */ 
    props: {
        openModal: Function,
    },
}
</script>
