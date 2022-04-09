<template>
    <input type="file" ref='file' >
    <input type="button" @click="submitForm" value="submit">
    <show-image />
</template>

<script>
import axios from 'axios';

export default {
    
    
    components:['showImage'],
    data(){
        return{
            dataform:""
        }
    },
    methods:{
        submitForm(){
            this.dataform = new FormData();
            this.dataform.append("file",this.$refs.file.files[0]);
            axios.post('http://localhost:8080/post',this.dataform,{header:'mulipart/form-data'}).then(res => console.log(res.data))
        }
    }
}
</script>

<style scoped>
input[type=button]{
    background :rgb(186, 186, 235);
    padding:20px 50px;
}
</style>