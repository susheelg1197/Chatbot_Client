<template>
  <div id="app">
    <h1 class="heading">Lets start asking!!?</h1>
    <Chatbot />
    <div id="footer">
      <div class="hr"></div>
      <div class="container">
        <p>
          <span style="color:white;">A Chatbot created By Susheel Gounder</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Chatbot from './components/Chatbot.vue'

export default {
  name: 'App',
  components: {
    Chatbot,
  },
}
</script>

<style>
.heading {
  color: white;
}
#footer {
  margin-bottom: 3em;
}

#footer .icon {
  height: 23px;
  display: inline-block;
  margin-bottom: -6px;
}

.hr {
  border-bottom: 1px solid #dbdbdb;
  margin: 3em 0;
}

#footer p {
  font-size: 15px;
  color: #767676 !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background: url('https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg');
}
</style>
