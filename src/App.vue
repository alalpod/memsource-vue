<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
.List-Page {
  margin: 0 .5rem;
}

.Project-Form-Page {
  width: 800px;
  margin: 2rem auto;

  form {
    padding: 1rem;
  }

  .Form-Row {
    margin: 0 0 1rem;
  }

  .MuiFormControl-root {
    width: 100%;
  }

  .Buttons-Row {
    margin: 1rem 0;
    display: flex;
    justify-content: flex-end;

    & > button, & > a {
      margin: 0 0 0 0.5rem;
    }
  }
}
</style>
