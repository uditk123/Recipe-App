  import db from "../../db.json"
  export default defineEventHandler((event)=>{
     console.log(event)
    return db.posts;
  })