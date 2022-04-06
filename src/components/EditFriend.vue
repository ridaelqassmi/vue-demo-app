<template>
  <div class="container">
    <div class="rows">
      <div class="column">
        <label class="label">Name : </label
        ><input type="text" v-model="names" />
      </div>
      <div class="column">
        <label class="label">Email : </label
        ><input type="text" v-model="emails" />
      </div>
      <div class="column">
        <label class="label">Phone : </label>
        <input type="text" v-model="phones" />
      </div>
      <div class="column">
        <button class="button" @click="submitform">Edit</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  emits: ["edit-this"],
  props: ["id", "name", "email", "phone"],
  data() {
    return {
      names: this.name,
      emails: this.email,
      phones: this.phone,
    };
  },
  methods: {
    submitform() {
      this.$emit("edit-this", this.id, this.names, this.emails, this.phones);
    },
  },
};
</script>

<style scoped>
.container {
  /*background:#4caf50;*/
  box-shadow: 1px 0px 9px 1px #3e3e3e;
  border-radius: 8px;
  margin: 10px;
  padding: 30px 10px;
}
.container.rows {
  display: flex;
  align-items: center;
  justify-content: center;
}
.rows {
  flex-direction: column;
}
.column {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.column input[type="text"] {
  padding: 10px 20px;
  border: solid rgba(145, 46, 46, 0.164) 0.5px;
  border-radius: 8px;
  width: 80%;
  outline: none;
}
</style>
