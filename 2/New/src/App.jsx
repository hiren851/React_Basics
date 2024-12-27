import { useState } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/cards";
import "./components/Cards.css";
import UserProfile from "./components/userProfile";
import Counter from "./components/Counter";
import DigitalClock from "./components/DigitalClock"
import "./components/userProfile.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <div className="cards">
        <Cards title="Card 1 " description="Desc of Card1" />
        <Cards title="Card 2 " description="Desc of Card2" />
        <Cards title="Card 3 " description="Desc of Card3" />
        <Cards title="Card 4 " description="Desc of Card4" />
      </div>
      <div className="profiles">
        <UserProfile
          name="Miss Priya"
          age="25"
          bio = "I'm Priya, and I recently graduated with an advanced diploma from Smith secondary school. I'm seeking an internship where I can apply my skills in content creation and increase my experience in digital marketing."
          imgUrl="https://media.istockphoto.com/id/2099403180/photo/laughing-yougn-businesswoman-standing-with-her-arms-crossed-against-an-office-wall.webp?a=1&b=1&s=612x612&w=0&k=20&c=fd9yaVrgWeZIHTfllbUmxTjPRVD2b79Yzt4HQlQfNSA="
        />
          <UserProfile
          name="John Grayson"
          age="29"
          bio = "I'm John Grayson, and I'm a recent college graduate with a Bachelor's Degree in Web Design. I'm seeking a full-time opportunity where I can employ my programming skills."
          imgUrl="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uYXxlbnwwfHwwfHx8MA%3D%3D"
        />
          <UserProfile
          name="Josephina"
          age="30"
          bio = "I'm Josephina, and I'm a high school librarian. I'm passionate about helping people read."
          imgUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
          <UserProfile
          name="Davis"
          age="40"
          bio = "I'm Davis, and I manage an excellent team at Lavender Marketing. I'm enthusiastic about promoting products and services for your business."
          imgUrl="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbmF8ZW58MHx8MHx8fDA%3D"
        />
        
      </div>

      <Counter />
      <DigitalClock/>
    </div>
  );
}

export default App;
