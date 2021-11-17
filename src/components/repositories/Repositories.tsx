import { useQuery } from 'react-query'
import { useRecoilState, useRecoilValue } from 'recoil'

import { repos as reposAtom, view as viewAtom } from '../../atoms'
import Repo from '../repo/Repo'

const Repositories = () => {
  const [repos, setRepos] = useRecoilState(reposAtom)
  const view = useRecoilValue(viewAtom)

  const { data, status } = useQuery('repos', () =>
    fetch(`https://api.github.com/users/laurapoc/repos?since=${view}`).then(
      (res) => res.json().then((data) => setRepos(data))
    )
  )

  console.log(repos)

  return (
    <div>
      {status === 'error'
        ? 'Error fetching data'
        : status === 'loading'
        ? 'loading'
        : repos.map((repo: any) => <Repo key={repo.id} repo={repo} />)}
    </div>
  )
}

export default Repositories
