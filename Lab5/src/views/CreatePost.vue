<template>
    <div>
        <h2>Tạo bài viết mới</h2>
        <input v-model="title" placeholder="Tiêu đề bài viết" /><br>
        <input v-model="author" placeholder="Tên tác giả" /> <br>
        <textarea v-model="content" placeholder="Nội dung bài viết" ></textarea> <br>
        <button @click="submitPost">Đăng bài</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
// Sử dụng defineEmits để emit sự kiện
const emit = defineEmits(['add-post'])
 
const title = ref('')
const content = ref('')
const author = ref('')

function submitPost(){
    if(title.value && content.value && author.value){
        const newPost = {
            title: title.value,
            content: content.value,
            author: author.value
        }

        // gửi sk 'add-post' với dữ liệu của bài viết
        emit('add-post', newPost)

        //Reset fields
        title.value = ''
        content.value = ''
        author.value = ''
    }
}
</script>

<style>
input,
textarea {
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    border: 1px solidl#ddd;
}
button{
    padding: 10px 20px;
    background-color:#3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>