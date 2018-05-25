<template>
  <div id="app">
    <img src="./assets/logo.svg">
    <h1>SIXTH &middot; FRONTEND UDVIKLING</h1>
    <h2>CVR 38418998</h2>
  </div>
</template>

<style>
body {
  background-color: #F8E81C;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

#app img {
  height: 290px;
}

h1,
h2 {
    font-size: 130%;
    font-weight: 500;
    line-height: 1.4;
    text-transform: uppercase;
    letter-spacing: -.3px;
    color: #000;
    margin: 1em 0 0;
}
h2 {
    font-size: 90%;
    margin-top: .5em;
}
</style>
