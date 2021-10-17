1. react router 
<Router>
  <Switch>
  <Route path="/users" exact >
    <Users /> 
  </Route>
</Switch> 
</Router>

2. Router Link: <Link to="/about">About</Link>
3. React redirect : 
3-1 : history : 
import React from 'react';
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  
  const handleRoute = () =>{ 
    history.push("/about");
  }
  
  return (                     
          <Button
            onClick={handleRoute}>
              About
          </Button>
  );
}
export default Home;

3-2: Know About localStorage
Local Storage uses key and value to store your data. The keys and the values are always strings 
(note that, as with objects, integer keys will be automatically converted to strings).
the basic three things that you can do with local storage:
1. Add items to local storage
2. Get items from local storage
3. Remove items from local storage
1. Add Item
localStorage.setItem('Key', 'Value');
Example 1 :
localStorage.setItem('Color', 'Red');
Example 2: To add array or List [use JSON.stringify]
var detail = { name:"Annanomys", email:"annanomys@gmail.com" age:20 };
localStorage.setItem('Detail', JSON.stringify(detail));
2. Get Item
localStorage.getItem('Key');
Example 1
From Add Item (example 1) ; We have Key: Color and Value: Red
var storage = localStorage.getItem('Color');
console.log(storage);
Output: Red
Example 2: To get array or object [use JSON.parse]
From Add Item (example 2)
var storage= JSON.parse(localStorage.getItem('Detail') || defaultValue); (defaultValue here can be anything like "" or )
3. Remove Item
localStorage.removeItem('Key');
If you want to clear your localStorage:
//clear all items
localStorage.clear();
Know About List/Object
I have a list which is given below:


