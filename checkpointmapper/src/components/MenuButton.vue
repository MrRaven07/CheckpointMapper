
<script setup>

defineProps({
    label: String,
    icon: String
});
defineEmits(['actionClick']);
</script>


<template>
    <button class="action-btn" @click="$emit('actionClick')">
        <span class="btn-icon">{{ icon }}</span>
        <span class="btn-label">{{ label }}</span>
    </button>
</template>


<style scoped>

.action-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    border: 10px solid #24B1B1;
    border-radius: 7px;
    padding: 0.75rem 2rem;
    min-width: 160px;
    cursor: pointer;
    transition: all 0.1s linear; 
}

.action-btn:hover {
    border-color: #007979;
}

.btn-icon {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}

.btn-label {
    font-size: 1.5rem;
    color: #E37434;
}

</style>

