import Header from '@/components/Header';
import { Grid, Container } from '@mui/material';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>MailMate</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container>
        <Grid>
          {/* Sidebar */}
          <Grid item xs={8}>
            Sidebar
          </Grid>

          {/* Main Content */}
          <Grid item xs={4}>
            Main Content
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
