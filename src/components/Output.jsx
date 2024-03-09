function Output({ name, gender }) {
  return (
    <p className="name">
      { name ? name : 'Name' } is { gender ? gender : 'gender' }
    </p>
  )
}

export default Output;