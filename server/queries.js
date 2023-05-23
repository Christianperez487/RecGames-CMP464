const Pool = require('pg').Pool

const pool = new Pool({
  user: 'abs',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
})



const getGamer = (request, response) => {
  pool.query('SELECT * FROM gamer ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getGamerById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM gamer WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createGamer = (request, response) => {
  const { name, URL } = request.body

  pool.query('INSERT INTO gamer (name, URL) VALUES ($1, $2)', [name, URL], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.insertId}`)
  })
}

const updateGamer = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, URL } = request.body

  pool.query(
    'UPDATE gamer SET name = $1, URL = $2 WHERE id = $3',
    [name, URL, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteGamer = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM gamer WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`gamer deleted with ID: ${id}`)
  })
}

module.exports = {
  getGamer,
  getGamerById,
  createGamer,
  updateGamer,
  deleteGamer,
}