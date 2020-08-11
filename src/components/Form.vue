<template>
  <div class="Project-Form-Page">
    <md-content class="md-elevation-3">
      <form @submit="onFormSubmit()" v-on:submit.prevent>
        <md-field class="Form-Row">
          <label>Name</label>
          <md-input autoFocus v-model="name"></md-input>
        </md-field>
        <md-field class="Form-Row">
          <label>Source Language</label>
          <md-input v-model="sourceLanguage"></md-input>
        </md-field>
        <md-field class="Form-Row">
          <label>Target Language(s)</label>
          <md-input v-model="targetLanguages"></md-input>
        </md-field>

        <md-field>
          <label for="movie">Status</label>
          <md-select v-model="status">
            <md-option value="NEW">New</md-option>
            <md-option value="COMPLETED">Completed</md-option>
            <md-option value="DELIVERED">Delivered</md-option>
          </md-select>
        </md-field>

        <md-datepicker v-model="dateDue">
          <label>Due date</label>
        </md-datepicker>

        <div class="Buttons-Row">
          <md-button class="md-raised md-primary" type="submit"
            >Submit</md-button
          >
          <router-link to="/">
            <md-button class="md-raised md-secondary">
              Back to overview
            </md-button>
          </router-link>
        </div>
      </form>
    </md-content>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import { prepareDataForSubmit } from "@/utils/projects";

export default Vue.extend({
  name: "Form",
  computed: {
    name: {
      get: function() {
        return this.$store.state.form.name;
      },
      set: function(value) {
        this.$store.commit("handleFormChange", { name: "name", value });
      }
    },
    sourceLanguage: {
      get: function() {
        return this.$store.state.form.sourceLanguage;
      },
      set: function(value) {
        this.$store.commit("handleFormChange", {
          name: "sourceLanguage",
          value
        });
      }
    },
    targetLanguages: {
      get: function() {
        return this.$store.state.form.targetLanguages;
      },
      set: function(value) {
        this.$store.commit("handleFormChange", {
          name: "targetLanguages",
          value
        });
      }
    },
    status: {
      get: function() {
        return this.$store.state.form.status;
      },
      set: function(value) {
        this.$store.commit("handleFormChange", { name: "status", value });
      }
    },
    dateDue: {
      get: function() {
        return this.$store.state.form.dateDue;
      },
      set: function(value) {
        this.$store.commit("handleFormChange", { name: "dateDue", value });
      }
    }
  },
  methods: {
    onFormSubmit() {
      if (this.$route.params.id) {
        axios
          .put(
            `/projects/${this.$route.params.id}`,
            prepareDataForSubmit(this.$store.state.form)
          )
          .then(() => {
            this.$router.push("/");
          })
          .catch(error => {
            this.$store.commit('API_ERROR');
          });
      } else {
        axios
          .post("/projects", prepareDataForSubmit(this.$store.state.form))
          .then(() => {
            this.$router.push("/");
          })
          .catch(error => {
            this.$store.commit('API_ERROR');
          });
      }
    }
  },
  created() {
    if (this.$route.params.id) {
      this.$store.dispatch("fetchProject", this.$route.params.id);
    } else {
      this.$store.commit("initNewProject");
    }
  }
});
</script>

<style lang="scss" scoped>
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

    & > button,
    & > a {
      margin: 0 0 0 0.5rem;
    }
  }
}
</style>
