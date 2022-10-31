// Etape 1
// import "./App.css";

// function App() {
//   return (
//     <div className="background">
//       <h1 className="title">Lorem</h1>
//       <p className="description">
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil ad saepe
//         tenetur vel molestias excepturi inventore dolorem tempore cumque eos
//         voluptas expedita quae aliquid deserunt, fugiat nam illo fuga esse at
//         molestiae eveniet modi? Quae amet temporibus nemo. Earum quidem nobis
//         cum maxime vel, soluta dolore voluptatem cumque, aperiam esse voluptate.
//         Adipisci repudiandae a dolore libero magni ipsum? Facilis ducimus enim
//         commodi cumque consequatur voluptatum saepe eum eos laborum, quisquam
//         quaerat id nulla porro ex suscipit rem necessitatibus recusandae. Animi,
//         est? Cum, vel.
//       </p>
//     </div>
//   );
// }

// export default App;

// Etape 2
import "./App.css";
import Content from "./components/Content";

function App() {
  return (
    <>
      <Content
        name={"Lorem"}
        text={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores doloremque, ullam perspiciatis odio earum veritatis obcaecati provident rem adipisci ea itaque. Ut hic, numquam cupiditate asperiores corrupti natus inventore, temporibus vel, quos facilis excepturi ducimus ipsum. Impedit, quo. Reiciendis nam inventore sequi optio quas molestias enim, aspernatur odit eveniet officiis."
        }
      />
      <br />
      <Content
        name={"Ipsum"}
        text={
          "Cras sollicitudin, velit vitae vehicula laoreet, lorem sem auctor libero, nec dictum mauris justo at nisl. Nam fermentum vitae eros in sollicitudin. Aliquam sit amet nisi fermentum, elementum nisi eu, pellentesque orci. Vestibulum hendrerit nunc ut suscipit dictum. Nullam faucibus ultrices nisi, non luctus lectus scelerisque quis. Mauris nec ligula orci. Vivamus vulputate elit ac augue rhoncus, pulvinar interdum dui tincidunt. Sed molestie, nisl ut faucibus pretium, orci tellus semper risus, at accumsan sapien urna ac nunc. Praesent pellentesque lacinia odio nec facilisis. Vestibulum erat arcu, consequat eu accumsan at, elementum vitae velit. Phasellus porta congue enim, vel aliquam velit ultrices et. Praesent porta felis enim, eu laoreet urna congue pretium. Vestibulum nec fermentum ligula. Ut non sapien ac est consectetur lobortis. Sed rutrum nisl dui, nec pharetra risus laoreet ut. Aenean lobortis magna lacus, quis molestie metus rutrum sed. "
        }
      />
    </>
  );
}

export default App;
