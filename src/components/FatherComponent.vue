<template>
<div class="layout">
<AddNewFriend v-on:add-friend='addFriendToArray'/>
 <div v-if="showEdit" >
 <EditFriend v-on:edit-this="editFriend" v-for='friend in ar'  :key='friend.id' :id='friend.id' :name='friend.name' :email='friend.email' :phone='friend.phone'/>
 </div>
 <ListFriends class='background' v-on:edit-this='editThis' :editabal="editabal" v-on:delete-this="deletethis" v-for="friend in friends" :key='friend.id' :id='friend.id' :name='friend.name' :email='friend.email' :phone='friend.phone'/>

 </div>
</template>

<script>
import ListFriends from "./ListFriends.vue";
import  AddNewFriend from "./AddNewFriend.vue";
import EditFriend from "./EditFriend.vue"
export default {
  name: "App",
  components: { ListFriends,AddNewFriend ,EditFriend},
  data() {
    return {
        showEdit:false,
        editId:0,
        ar:[],
        editabal:true,
      friends: [
        { id: 1, name: "hamza", email: "hamza@gmail.com", phone: "0651577158" },
        {
          id: 2,
          name: "meryem",
          email: "hamza@gmail.com",
          phone: "0651577158",
        },
        { id: 3, name: "rida", email: "hamza@gmail.com", phone: "0651577158" },
      ],
    };
  },
  methods:{
      addFriendToArray(obj){
          
          this.friends.unshift(obj);
      },
      deletethis(id){
          this.friends = this.friends.filter(item=> item.id != id);
      },
      editThis(id){
          this.editId = id;
          this.showEdit=true;
          this.ar.push(this.friends.find(item=> item.id == id));
          this.editabal=false;

      },
      editFriend(id,name,email,phone){
        
          let found =this.friends.find(item=>item.id == id);
          found.name = name;
          found.email=email;
          found.phone=phone;
          this.editabal=true;
          this.showEdit =false;
          this.ar=[];
          
      }
  }
};
</script>
<style scoped>
.layout{
    display: grid;
    grid-template-columns: 5fr 5fr;
    grid-template-rows:50vh ;
    gap:20px
}
</style>