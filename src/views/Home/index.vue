<template>
  <div class="home">
    <MyCarousels />
    <HomeContainer1 />
    <HomeContainer2 />
    <HomeContainer3 />
  </div>
</template>

<script>
// @ is an alias to /src
import MyCarousels from '@/components/MyCarousels'
import HomeContainer1 from './components/HomeContainer1'
import HomeContainer2 from './components/HomeContainer2'
import HomeContainer3 from './components/HomeContainer3'

export default {
  name: 'Home',
  components: {
    MyCarousels,
    HomeContainer1,
    HomeContainer2,
    HomeContainer3,
  }
}
</script>
