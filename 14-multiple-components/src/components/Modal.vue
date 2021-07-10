<template>
    <div class="backdrop">
        <div class="modal">
            <h1>Modal title</h1>
            <p>modal content</p>
        </div>
    </div>
</template>

<style>
.backdrop {
    position: fixed;
    top: 0;
    background: rgba(0, 0, 0, 0.6);
    width: 100vw;
    height: 100vh;
}
.modal {
    width: 400px;
    padding: 20px;
    margin: 200px auto;
    background: white;
    border-radius: 5px;
    /* position: absolute; */
    /* top: 40%; */
    /* left: 30% */
}

</style>