
<script setup>
import { useRouter } from 'vue-router'

import BigTitle from '../components/BigTitle.vue'
import MenuButton from '../components/MenuButton.vue'

const router = useRouter()

function handleNavigation(destination) {
    if (destination === 'View Map'){
        router.push('/map')
    }
}



</script>


<template>
    
    <main class="fullscreen-layout">

        <div class="layout-center">
            <BigTitle />
        </div>

        <div class="layout-bottom">
            <nav class="button-container">
                <MenuButton 
                    label="View Map"
                    @actionClick="handleNavigation('View Map')"
                />
            </nav>
        </div>

    </main>

</template>



<style scoped>
    .fullscreen-layout {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    .layout-center {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .layout-bottom {
        padding-bottom: 2rem;
        display: flex;
        justify-content: center;
    }

</style>


