import Head from 'next/head';
import styles from '../styles/pages/Home.module.css';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ChallangeBox } from '../components/ChallengeBox';

export default function Home() {
  return (
    <div className={styles.container}>
  
      
      <ExperienceBar />
      
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallangeBox />
        </div>
      </section>
    </div>
  )
}
