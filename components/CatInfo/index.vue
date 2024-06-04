<template>
    <div class="lg:w-2/4 min-w-52 lg:flex lg:flex-col p-11 text-xl lg:ml-10" :class="loading ? 'animate-pulse' : ''">
        <div class="w-full text-[#22223B] font-semibold mb-11">
            CAT FACT:
        </div>
        <div class="w-full overflow-auto max-h-80 text-[#4A4E69] lg:min-w-72 min-w-60 ">
            {{ catFact }}
        </div>
        <div class="w-full">
            <button @click="getFact()"
                class="shadow-xl min-w-60 lg:max-w-64  min-w-64 max-h-12 bg-[#4A4E69] hover:bg-[#22223B] text-white font-bold border border-[#4A4E69] rounded w-full text-sm text-center flex mt-16 p-3 whitespace-nowrap">
                <MdiIcon icon="mdiRefresh" :style="{ fontSize: '20px' }" />
                <p class="ml-2">
                    GET A RANDOM CAT FACT
                </p>
            </button>
        </div>
    </div>
</template>

<script>
import { useCatStore } from '~/store'

export default {
    computed: {
        catFact() {
            return useCatStore().fact;
        },
    },
    data() {
        return {
            loading: false
        }
    },
    methods: {
       // get new fact from pinia store
        async getFact() {
            if (this.loading) {
                return;
            }
            
            this.loading = true;
            setTimeout(async () => {
                await useCatStore().getFact();
                this.loading = false;
            }, 500);
        },
    },
    async created() {
        // get initial fact on init component
        this.loading = true;
        await useCatStore().getFact();
        this.loading = false;
    },
}
</script>
