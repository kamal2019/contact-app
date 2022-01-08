import './App.css';
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'

function App() {
  const contacts =[
    {
      id: "1",
      name:"kamal",
      email:"kamal@gmail.com"
    },
    {
      id: "2",
      name:"pawan",
      email:"pawan@gmail.com"
    },
  ];
  return (
    <div>
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
