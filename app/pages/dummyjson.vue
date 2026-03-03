  <script setup>

  const { data } = useFetch("http://localhost:3000/api/posts");
  console.log("APi data is ", data);
 
 </script>
 
 <template>
    <div v-for = "item in data">
        <div>
        <h1> Title : {{ item.title }}</h1>
        <br>
        <h2> Content : {{ item.content }}</h2>
        <br>
        </div>
        <div v-if="item.comments">
            <p v-for = "dataitem in item.comments"> {{ dataitem.user }}</p>
        </div>
    </div>
 </template>
 

 
