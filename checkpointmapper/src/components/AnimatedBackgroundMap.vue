<script setup>

import { onMounted, onUnmounted, ref } from 'vue';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const mapContainer = ref(null);
let map = null;
let animationFrameId = null;


onMounted(() => {
    map = L.map(mapContainer.value, {
        center: [48.8599, 2.2532],
        zoom: 13,
        zoomControl: false,
        attributionControl: false,
        dragging: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        keyboard: false,
        tap: false
    })

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png', {
        maxZoom: 15,
    }).addTo(map)

    
    const panMap = () => {
        if (map) {
            const currentCenter = map.getCenter();
            const newCenter = [currentCenter.lat, currentCenter.lng + 0.0005]
            
            map.setView(newCenter, map.getZoom(), { animate: false})

            animationFrameId = requestAnimationFrame(panMap)
        }
    }

    panMap()
})

onUnmounted(() => {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
    }
    if (map) {
        map.remove()
    }
})

</script>


<template>
    <div ref="mapContainer" class="background-map"></div>

    <div class="map-overlay"></div>

</template>



<style scoped>
    .background-map {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: -2;
    }
    .map-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        /* background-color: rgba(255, 255, 255, 0.3); */
        z-index: -1;
        pointer-events: none;
    }
</style>
