import React from 'react';
import { async } from 'q';
/*------- CSS --------*/
/*------- COMPONENTS --------*/

const AsyncAwait = () => {
    //Example1: 
     //posts 
     let posts = [
        {title : 'Post One', body : 'This is post one'},
        {title : 'Post two', body : 'This is post Two'},
        {title : 'Post Three', body : 'This is post Three'},
        {title : 'Post Four', body : 'This is post Four'}
    ]
  
    //function which give output after 2sec : it sets pots data as li in output and then return 
    const getPosts = () => {
        //setTimeOut for assign timing to the function
        setTimeout(() => {
            let output = '';
            posts.forEach((post,i) => {
                output += `<li key="${i}">${post.title}</li>`
            })
            document.getElementById('async').innerHTML = output;
        }, 1000);
    }

    //function which add new post to posts
    const addPost = (post) => {
          posts.push(post) 
    }

    //Async/Await : Asycronious function
    async function init(){
        //Await : await is only used in async function.we are witing to complete this function then we call getPosts function
        await addPost({title : 'Post Five', body : 'This is post Five'});
        
        getPosts();
    } 

    init();

    //Example2: fetch user data using async
    async function fetchUsers(){
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        console.log(data);
    }

    fetchUsers();

    return (
        <div>
            <b>AsyncAwait</b>
            <iframe src="https://javascript.info/async-await" width='100%' height='700px' frameBorder="0"  border="no"></iframe>
            <ul id='async'></ul>
        </div>
    )
}

export default AsyncAwait;