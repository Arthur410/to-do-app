<template>
  <ToDo></ToDo>
</template>

<script>
import ToDo from './components/ToDo'
export default {
  components: {
    ToDo
  }
}
</script>

<style>
@import 'styles/reset.css';

@font-face {
  font-family: myFirstFont;
  src: url('fonts/Yahfie Heavy.ttf');
}
body, html {
  overflow:hidden;
  font-family: myFirstFont, sans-serif!important;
}


*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

</style>
