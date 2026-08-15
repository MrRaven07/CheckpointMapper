<script setup>
</script>

<template>
    <div class="attribution-container">
        <span class="attribution-text">
            &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors
            &copy; <a href="https://carto.com/attributions" target="_blank" rel="noopener">CARTO</a>
        </span>
    </div>
</template>

<style scoped>

.attribution-container {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 10;
    padding: 2px 5px;
    background-color: rgba(255, 255, 255, 0.5);
}

.attribution-text {
    font-size: 0.7rem;
    font-family: Arial, sans-serif;
    color: #333333;
}

.attribution-text a {
    color: #0078A8;
    text-decoration: none;
}

.attribution-text a:hover {
    text-decoration: underline;
}


</style>



