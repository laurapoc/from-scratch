type Repo = {
  repo: any
}

const Repo = ({ repo }: Repo) => {
  return <div className="card">{repo.name}</div>
}

export default Repo
