<template>
    <div class="md:w-1/4 lg:w-auto lg:flex lg:flex-col p-11 text-xl ml-10" :class="loading ? 'animate-pulse' : ''">
        <div class="text-[#22223B] font-semibold mb-11">
            CAT FACT:
        </div>
        <div class="overflow-auto max-h-80 text-[#4A4E69] lg:min-w-96 lg:max-w-52 md:min-w-96 md:max-w-52">
            {{ catFact }}
        </div>
        <div>
            <button @click="getFact()"
                class="lg:max-w-64 md:max-w-3/4 min-w-64 max-h-12 bg-[#4A4E69] hover:bg-[#22223B] text-white font-bold border border-[#4A4E69] rounded w-full text-sm text-center flex mt-16 p-3 whitespace-nowrap">
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
        async getFact() {
            this.loading = true;
            setTimeout(async () => {
                await useCatStore().getFact();
                this.loading = false;
            }, 1000);
        },
    },
    created() {
        useCatStore().getFact();
    },
}
</script>