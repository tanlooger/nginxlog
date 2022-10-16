import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import fs from 'fs'

const AccessLog: NextPage = ({c}:any) => {
  return (



        <pre>{c}</pre>

  
  )
}

export async function getServerSideProps(context: any) {

  const { readFileSync } = require("fs");

    //const file = readFileSync("/Volumes/SD/Projects/nginxlog/access.log", "utf8");
    const file = readFileSync("/var/log/nginx/access.log", "utf8");

  let c = ""
  const regex = /"\s(\d{1,3}\.\d{1,3})/g;
  //c = file.toString().replace(regex, '"\n\n$1')
  c = file.toString()
  
  return {
    props: {c}, // will be passed to the page component as props
  }
}

export default AccessLog
