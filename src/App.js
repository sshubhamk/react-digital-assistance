import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import Alexa from './images/alexa.png'
import Siri from './images/siri.png'
import Cortana from './images/cortana.png'
function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Digital Assistants</p>
        </div>
      </section>

      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is-4'>
              <ProfileCard title="Alexa" handle="@alexa" image={Alexa} description="Assistant by Amazon" />
            </div>
            <div className='column is-4'>
              <ProfileCard title="Cortana" handle="@cortana" image={Cortana} description="Assistant by Microsoft" />
            </div>
            <div className='column is-4'>
              <ProfileCard title="Siri" handle="@siri" image={Siri}  description="Assistant by Apple"/>
            </div> 
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;