import { defineStore } from 'pinia';

export const usePodcastStore = defineStore({
  id: 'podcast',
  state: () => ({
    currentEpisodeUrl: '',
  }),
  actions: {
    setCurrentEpisodeUrl(episodeUrl) {
      this.currentEpisodeUrl = episodeUrl;
    },
  },
});
