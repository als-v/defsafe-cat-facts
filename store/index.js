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
                // get data from server
                const response = await fetch('/api/catFact');

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                
                // response from server
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