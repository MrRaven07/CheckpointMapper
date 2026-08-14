
<script setup>
import { useRouter } from 'vue-router'

import BigTitle from '../components/BigTitle.vue'
import MenuButton from '../components/MenuButton.vue'
import AnimatedBackgroundMap from '../components/AnimatedBackgroundMap.vue'


const router = useRouter()

function handleNavigation(destination) {
    if (destination === 'View Map'){
        router.push('/map')
    }
}



</script>


<template>
    
    <AnimatedBackgroundMap />   

    <main class="fullscreen-layout">

        <div class="content-wrapper">        
            <BigTitle />
            <nav class="button-container">
                <MenuButton 
                    label="View Map"
                    @actionClick="handleNavigation('View Map')"
                />
                <MenuButton
                    label="What's this?"
                    @actionClick=""
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
    .content-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
    .button-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        
    }

</style>


