import { useQuery } from 'react-query'
import Repo from '../repo/Repo'

const fetchRepos = async () => {
  const url =
    'https://api.github.com/users/laurapoc/repos?since=2020-12-01T09:07:21.20-07:00'
  const res = await fetch(url)

  return res.json()
}

const Repos = () => {
  const { data, status } = useQuery('repos', fetchRepos)

  console.log(data, status)

  return (
    <div>
      {status === 'error'
        ? 'Error fetching data'
        : status === 'loading'
        ? 'loading'
        : data.map((repo: any) => <Repo key={repo.id} repo={repo} />)}
    </div>
  )
}

export default Repos
