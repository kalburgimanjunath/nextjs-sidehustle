import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Header, Footer, Sidebar } from '../components/';
export default function Home() {
  return (
    <div className={styles.container}>
      <Sidebar />
    </div>
  );
}
