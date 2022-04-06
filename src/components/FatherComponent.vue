<template>
  <div class="layout">
    <AddNewFriend v-on:add-friend="addFriendToArray" />
    <div v-if="showEdit">
      <EditFriend
        v-on:edit-this="editFriend"
        v-for="friend in ar"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :email="friend.email"
        :phone="friend.phone"
      />
    </div>
    <ListFriends
      class="background"
      v-on:edit-this="editThis"
      :editabal="editabal"
      v-on:delete-this="deletethis"
      v-for="friend in friends"
      :key="friend.id"
      :id="friend.id"
      :name="friend.name"
      :email="friend.email"
      :phone="friend.phone"
    />
  </div>
</template>

<script>
import ListFriends from "./ListFriends.vue";
import  AddNewFriend from "./AddNewFriend.vue";
import EditFriend from "./EditFriend.vue";
import axios from 'axios';
const ADD_END_POINT = 'http://localhost:8080/users';
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
        console.log(JSON.stringify(obj));
          axios({
            headers: {
        'Content-Type': 'application/json'
    },
            url:ADD_END_POINT,
            method:'post',
            data:JSON.stringify(obj)
          }).then(response => {this.friends = [response.data,...this.friends]})

      },
      deletethis(id){
          axios.get(ADD_END_POINT+"/delete/"+id)
          this.friends = this.friends.filter(item=> item.id != id);
      },
      editThis(id){
          this.editId = id;
          this.showEdit=true;
          this.ar.push(this.friends.find(item=> item.id == id));
          this.editabal=false;

      },
      editFriend(id,name,email,phone){
        const obj ={"name":name,"email":email,"phone":phone};
        console.log(id);

          /*let found =this.friends.find(item=>item.id == id);
          found.name = name;
          found.email=email;
          found.phone=phone;
         
          this.ar=[];*/

          axios({
            
            
            headers: {
                    'Content-Type': 'application/json'
                },
            url : ADD_END_POINT+"/edit/"+id,
            method:"post",
            data:obj

          }).then(response=>{
            let friendsId = response.data.id;
            let friendfound = this.friends.find(item => item.id == friendsId);
            friendfound.name=response.data.name;
            friendfound.phone=response.data.phone;
            friendfound.email=response.data.email;
          }).then(()=>{
             this.editabal=true;
          this.showEdit =false;
          this.ar=[];
          })

      }
  },
   mounted () {
   this.friends =axios
      .get('http://localhost:8080/users/')
      .then(response =>this.friends= response.data);
      console.log("je suis mounted");

  },
  apdated(){

  }
};
</script>
<style scoped>
.layout {
  display: grid;
  grid-template-columns: 5fr 5fr;
  grid-template-rows: 50vh;
  gap: 20px;
}
</style>
