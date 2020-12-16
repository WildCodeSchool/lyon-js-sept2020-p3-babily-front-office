import GoogleFonts from 'next-google-fonts';
import Layout from '../components/Layout';
import VagueHome from '../components/VagueHome';

export default function Home() {
  return (
    <Layout pageTitle="Home">
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Krub:wght@600&family=Montserrat+Alternates:ital,wght@1,700&display=swap" />
      <h1>Home page</h1>
      <VagueHome />
    </Layout>
  );
}
