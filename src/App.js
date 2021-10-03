import './App.css';
import ProfileCompo from './Profile/ProfileCompo';
import Child from './Profile/Child';
import img5 from './t.jpg';

const handleAlert = () => {
  alert(`this is the User`)
  }
 
function App()  {
  

  return (
    <div className="App" >
 <ProfileCompo title= 'Mbarek Anis'
 Bio = 'Energetic  career development  professional with MS in
  Counseling and Student Personnel and
over 3 years of combined experience  career services and human resources.  
- Experience working with a diverse population of traditional and nontraditional students, both in
person and in an online environment.  
- Innovative, strong presenter with experience leading webinars and facilitating in‐person
workshops.
- Proven ability to leverage technology and develop and deliver impactful career‐related content.' 
  Profession ='High‐performing, strategic‐thinking professional with more than six years experience in 
employment services in the non profit and higher education sectors. Highly skilled at relationship‐
building with clients and across organizations and teams; exceptional writing, presenting, and 
interpersonal communication skills. Adept at assessing needs, generating options, and 
implementing solutions in collaboration with clients and stakeholders. Well‐versed in all phases of 
recruitment and hiring, including defining job roles, assessing needed skills and qualifications, and 
evaluating candidates. Experienced at managing projects from the requirements gathering/needs 
identification phase through to  completion. ' 
          >
            <div>
            <img  src={img5}  />  
            </div> 
            
    </ ProfileCompo >       
   <Child handleAlert= {handleAlert} />

     
   </div>
  );
}

export default App;
