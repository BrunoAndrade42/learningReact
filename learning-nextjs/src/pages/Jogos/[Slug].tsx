import React, { useEffect, useState, useRef } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import header_db from '../../json/header_db.json'

interface IGitHubUser {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  name: string
  company: null
  blog: string
  location: string
  email: null
  hireable: null
  bio: string
  twitter_username: null
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: Date
  updated_at: Date
}

const Jogos: NextPage = () => {
  const { push, asPath, query, back } = useRouter()
  const [user, setUser] = useState<IGitHubUser | null>(null)

  const { Slug } = query

  const teste = useRef(null)

  console.log((teste.current.innerHTML = ''))

  useEffect(() => {
    // const getJogo = async () => {
    //   const response = await fetch(`https://api.github.com/users/${Slug}`)
    //   const data: IGitHubUser = await response.json()
    //   setUser(data)
    // }
    // if (Slug) {
    //   getJogo()
    // }

    const getUser = async () => {
      const response = await fetch(
        `http://localhost:3000/api/users/create-user`,
        {
          body: JSON.stringify({
            login: 'teste',
            id: 1,
            node_id: 'teste',
          }),
          method: 'POST',
        }
      )
      const data: IGitHubUser = await response.json()
      //   setUser(data)
      console.log(data)
    }

    getUser()
  }, [])

  return (
    <div onClick={() => back()}>
      <h1>{user?.name}</h1>

      <img src={user?.avatar_url} alt={user?.login} />

      <h1>{user?.bio}</h1>
      <h1 ref={teste}>{header_db.title}</h1>
    </div>
  )
}

export default Jogos
