<template>
    <div>
        <h4>Comments</h4>
        <ul class="comment_lis">
            <li v-for="item in list" :key="item.id" class="d-flex">
                <div class="user_data">
                    <div class="userpic">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/1200px-OOjs_UI_icon_userAvatar.svg.png" alt="">

                    </div>
                    <p>{{item.email}}</p>
                </div>
                <div class="comment">
                    <h5>{{item.name}}</h5>
                    <p>{{item.body}}</p>
                </div>
            </li>
        </ul>
        
    </div>
</template>

<style lang="scss" scoped>
.userpic{
    width: 120px;
    img{
        width: 100px;
    }
}
</style>

<script>
import axios from 'axios';

export default {
    name:'blogComments',
    props:['blog_id'],
    data(){
        return{
            list:[]
        }
    },
    mounted(){
        axios
        .get('https://jsonplaceholder.typicode.com/posts/'+this.blog_id+'/comments')
        .then((resp)=>{
            this.list = resp.data;
        });
    }
}
</script>