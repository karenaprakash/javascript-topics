import React from 'react';
/*------- CSS --------*/
/*------- COMPONENTS --------*/

const PromiseComponent = () => {
    //Example1: addPost is promise which return appropriate results and getPosts is give all posts after resolve promise
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
            document.getElementById('promise').innerHTML = output;
        }, 1000);
    }

    //function which add new post to posts
    const addPost = (post) => {
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                posts.push(post) 
                const error = false;
                if(!error) resolve();
                return reject('Something went wrong.')
              }, 2000);
        })
        
    }   
    
    //addPost is Promise : we are just calling addPost function after resolve promise
    addPost({title : 'Post Five', body : 'This is post Five'})
    .then(
        getPosts
    ).catch(err => console.log(err))
    
    //Example2: multiple promises handle by promises
    const promise1 = fetch("https://jsonplaceholder.typicode.com/users")
                     .then(response => response.json())
    const promise2 = 10;

    const promise3 = "Hellow world."


    Promise.all([promise1,promise2,promise3])
    .then(value => console.log(value));

    return (
        <div>
            <b>Promise</b>
            <iframe src="https://javascript.info/promise-basics" width='100%' height='700px' frameBorder="0"  border="no"></iframe>
            <ul id='promise'></ul>
        </div>
    )
}

export default PromiseComponent;