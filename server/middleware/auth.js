export default defineEventHandler(()=>{
    console.log("Middleware ")
    // dummy check for auth 
    const isLoggedIn = true;
    if(!isLoggedIn){
        throw new Error("Not authenticated");
    }
})