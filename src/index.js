// src/index.js

module.exports = () => {
  const data = {
    users: []
  }

  for (let i = 0; i < 100; i++) {
    data.users.push({ id: i, name: `user${i}` })
  }

  return data
}
