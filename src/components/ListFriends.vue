<template >
    <div  class='container'>
        <legend>Friend </legend>
       
            <strong> Name : </strong><p>{{name}}</p>
            <strong> Email : </strong><p>{{email}}</p>
            <strong> phone : </strong><p>{{phone}}</p>
            
            <img :src="'data:image/png;base64,'+photo"/>
           <button class="button" @click='deletethis'>delete this </button>
           <button  class="button" v-if="editabal" @click='editThis'>edit</button>

        
    </div>
</template>
<script>
export default {
   
    props:['id','name','email','phone','editabal','photo'],
    emit:['delete-this','edit-this'],
    methods:{
        deletethis(){
            this.$emit("delete-this",this.id)
        },
        editThis(){
            this.$emit("edit-this",this.id)
        }
        
    }
}
</script>
<style scoped>

.container{
    box-shadow: 1px 0px 9px 1px #3e3e3e;
border-radius: 8px;
   width:800px;
    padding:30px 10px;
    
    grid-column: 1/3;
    margin-bottom:50px ;
}
img{
    width:200px;
    height: 200px;
}
</style>