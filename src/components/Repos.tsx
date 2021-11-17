import { useQuery } from 'react-query'

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
        : data.map((d: any) => (
            <div key={d.id}>
              <p>{d.name}</p>
            </div>
          ))}
    </div>
  )
}

export default Repos
