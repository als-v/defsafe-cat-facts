<template>
    <div class="lg:no-scrollbar lg:overflow-hidden">
        <div>
            <Header></Header>
        </div>
        <div class="w-full h-full lg:flex lg:max-lg:flex bg-[#C9ADA7] lg:min-lg:flex-col lg:min-lg:flex">
            <CatInfo/>
            <CatImage class="max-w-6xl min-w-6xl"/>
        </div>
    </div>
</template>

<script>
import Header from '~/components/Header/index.vue'
import CatInfo from '~/components/CatInfo/index.vue'
import CatImage from '~/components/CatImage/index.vue'

export default {
    components: {
        Header,
        CatInfo,
        CatImage
    }
}
</script>