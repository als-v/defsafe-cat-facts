import { defineStore } from 'pinia'

export const useCatStore = defineStore({
    id: 'cat',
    state: () => ({
        fact: 'Loading...',
        loading: false,
    }),
    actions: {
        async getFact() {
            this.fact = 'Loading...'
            
            if (this.loading) {
                return;
            }

            this.loading = true;

            try {
                const response = await fetch('/api/catFact');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                
                const responseJson = await response.json();
                this.fact = responseJson.fact;

            } catch (error) {
                console.error('Error fetching cat facts:', error);
            } finally {
                this.loading = false;
            }
        },
    },
})