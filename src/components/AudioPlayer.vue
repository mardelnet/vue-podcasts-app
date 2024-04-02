<template>
  <div class="audio-container">
    <audio ref="audioElement" controls :src="currentEpisodeUrl" @loadedmetadata="handleLoadedMetadata">
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<script>
import { usePodcastStore } from '../store';
import { computed, ref } from 'vue';

export default {
  setup() {
    const currentEpisodeUrl = computed(() => usePodcastStore().currentEpisodeUrl);
    const audioElement = ref(null);

    function handleLoadedMetadata() {
      audioElement.value.play();
    }

    return {
      currentEpisodeUrl,
      handleLoadedMetadata,
      audioElement,
    };
  },
};
</script>