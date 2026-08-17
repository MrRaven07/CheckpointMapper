<script setup>

import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const router = useRouter()
const mapContainer = ref(null)
let map = null

const collections = ref(null)

const goHome = () => {
    router.push('/')
}

onMounted(() => {
    map = L.map(mapContainer.value, {
        zoomControl: false
    }).setView([45.0, 10.0], 4)

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map)

    L.control.zoom({ position: 'topright' }).addTo(map)

})

</script>




<template>
    <main class="map-layout">

        

        <div ref="mapContainer" class="map-container"></div>
        
        <button class="back-btn" @click="goHome">Home</button>
        
        <aside class="sidebar">
            <header class="sidebar-header">
                <h2>Checkpoints</h2>
                <p>Toggle collections</p>
            </header>
            <ul class="collection-list">
                <li v-for="collection in collections" :key="collection.id" class="collection-item">
                    <label class="toggle-label">
                        <input type="checkbox" v-model="collection.active" class="toggle-checkbox" />
                        <span class="toggle-text">{{ collection.name }}</span>
                        <span class="color-dot" :style="{ backgroundColor: collection.color }"></span>
                    </label>
                </li>.
            </ul>
        </aside>
    </main>

</template>


<style scoped>

.map-layout {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}

.map-container {
    width: 100%;
    height: 100%;
    z-index: 1;
}

.back-btn {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 500;
    
}


</style>



