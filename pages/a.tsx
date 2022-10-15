import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import fs from 'fs'

const AccessLog: NextPage = ({c}:any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <pre>{c}</pre>
      </main>

  
    </div>
  )
}

export async function getServerSideProps(context: any) {

  let c = ""

  fs.readFile('/var/log/nginx/access.log', function (error, content) {
    if (error) {
      if (error.code == 'ENOENT') {

      }
      else {

      }
    }
    else {
      //const regex = /" \d{1,3}\.\d{1,3}/i;
      const regex = /"\s(\d{1,3}\.\d{1,3})/g;
      c = content.toString().replace(regex, '"\n\n$1')
    }
  });
  return {
    props: {c:c}, // will be passed to the page component as props
  }
}

export default AccessLog
