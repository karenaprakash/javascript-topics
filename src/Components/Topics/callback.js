/*------- CSS --------*/
/*------- COMPONENTS --------*/
import React  from 'react';

const Callback = () => {

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
            document.getElementById('collback').innerHTML = output;
        }, 1000);
    }

    //function which add new post to posts
    const addPost = (post,callback) => {
        setTimeout(() => {
          posts.push(post) 
          callback()
        }, 2000);
    }
 
    //we are just calling addPost function with two arguments data and out getPosts method as callback
    addPost({title : 'Post Five', body : 'This is post Five'},getPosts)

    return (
        <div style={{ margin: 20 }}>
            <p>
            Callbacks are a great way to handle something after something else has been completed. By something here we mean a function execution. If we want to execute a function right after the return of some other function, then callbacks can be used.
            <br></br>
            JavaScript functions have the type of Objects. So, much like any other objects (String, Arrays etc.), They can be passed as an argument to any other function while calling.
            </p>
              <iframe src="https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced" width='100%' height='700px' frameBorder="0"  border="no"></iframe>
              <ul id='collback'></ul>
        </div>
    )
    
}

export default Callback;