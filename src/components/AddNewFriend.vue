<template>
  <div class="container">
    <v-row >
      <v-col cols="12" lg="4">FULL NAME</v-col>
      <v-col
        cols="12"
        
          lg="8"
        
      >
 <v-text-field
            label="Outlined"
            placeholder="Placeholder"
            outlined
            v-model="name"
    >
    </v-text-field>
      </v-col>
    </v-row>
   
    <div class="rows">
     
      <div class="column">
        <label class="label">Email : </label
        ><input type="text" v-model="email" />
      </div>
      <div class="column">
        <label class="label">Phone : </label>
        <input type="text" v-model="phone" />
      </div>
      <div class="column">
        <label for="">Upload file</label>
       
        
        <v-file-input
        ref='fileToUpload'
          label="File input"
          filled
          prepend-icon="mdi-camera"
        ></v-file-input>
      </div>
      
      <div class="column">
        
            <v-btn @click="submitform"
          depressed
          color="primary"
        >
      Submit
    </v-btn>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
    };
  },
  emit: ["add-friend"],
  methods: {
    submitform() {
      let obj = { name: this.name, email: this.email, phone: this.phone};
      this.$emit("add-friend", obj,this.$refs.fileToUpload.files[0]);
      this.name = "";
      this.email = "";
      this.phone = "";
      console.log(this.$refs.fileToUpload.files[0])
      
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
