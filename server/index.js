import dotenv from "dotenv"
import express from "express"
dotenv.config()

const Pool = require('pg').Pool;
const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "677418873",
    database: "HR",
    port: 5432
})

const app = express()
app.use(express.json())

const port = process.env.PORT || 3003

app.listen(port, () => { console.log('Server listening on port ' + port) })

// Region
app.get('/api/region', (req, res) => {
    pool.query('select * from regions',
        [],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(200).json(result.rows)
        })
})

app.get('/api/region/:id', (req, res) => {
    const { id } = req.params
    pool.query('select * from regions where region_id = $1',
        [id],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(200).json(result.rows)
        })
})

app.post('/api/region/', (req, res) => {
    const { region_name } = req.body
    pool.query('insert into regions (region_name) values ($1)',
        [region_name],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(200).json(result.rowCount)
        })
})

app.put('/api/region/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body
    pool.query("update regions set region_name=$1 where region_id=$2",
        [name, id],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(200).json(result.rowCount)
        })
})

app.delete('/api/region/:id', (req, res) => {
    const { id } = req.params
    pool.query('delete from regions where region_id = $1',
        [id],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(200).json(result.rowCount)
        })
})

// Countries
app.get('/api/country', (req, res) => {
    pool.query('select * from countries',
        [],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(200).json(result.rows)
        })
})

app.get('/api/country/:id', (req, res) => {
    const { id } = req.params
    pool.query('select * from countries where country_id = $1',
        [id],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(200).json(result.rows)
        })
})

app.post('/api/country/', (req, res) => {
    const { country_id, country_name, region_id } = req.body
    pool.query('insert into countries (country_id, country_name, region_id) values ($1, $2, $3)',
        [country_id, country_name, region_id],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(200).json(result.rowCount)
        })
})

app.put('/api/country/:id', (req, res) => {
    const { id } = req.params
    const { country_id, country_name, region_id } = req.body
    pool.query("update countries set country_id=$1, country_name=$2, region_id=$3 where country_id=$4",
        [country_id, country_name, region_id, id],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(200).json(result.rowCount)
        })
})

app.delete('/api/country/:id', (req, res) => {
    const { id } = req.params
    pool.query('delete from countries where country_id = $1',
        [id],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(200).json(result.rowCount)
        })
})

// Locations
app.get('/api/location', (req, res) => {
    pool.query('select * from locations',
        [],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(200).json(result.rows)
        })
})

app.get('/api/location/:id', (req, res) => {
    const { id } = req.params
    pool.query('select * from locations where location_id = $1',
        [id],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(200).json(result.rows)
        })
})

app.post('/api/location/', (req, res) => {
    const { location_id, street_address, postal_code, city, state_province, country_id } = req.body
    pool.query('insert into locations (location_id, street_address, postal_code, city, state_province, country_id) values ($1, $2, $3,$4,$5,$6)',
        [location_id, street_address, postal_code, city, state_province, country_id],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(200).json(result.rowCount)
        })
})

app.put('/api/location/:id', (req, res) => {
    const { id } = req.params
    const { location_id, street_address, postal_code, city, state_province, country_id } = req.body
    pool.query("update locations set location_id=$1, street_address=$2,  postal_code=$3, city=$4, state_province=$5, country_id=$6 where location_id=$7",
        [location_id, street_address, postal_code, city, state_province, country_id, id],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(200).json(result.rowCount)
        })
})

app.delete('/api/location/:id', (req, res) => {
    const { id } = req.params
    pool.query('delete from locations where location_id = $1',
        [id],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(200).json(result.rowCount)
        })
})

// Departments
app.get('/api/department', (req, res) => {
    pool.query('select * from departments',
        [],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(200).json(result.rows)
        })
})

app.get('/api/department/:id', (req, res) => {
    const { id } = req.params
    pool.query('select * from departments where department_id = $1',
        [id],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(200).json(result.rows)
        })
})

app.post('/api/department/', (req, res) => {
    const { department_name, location_id } = req.body
    pool.query('insert into departments (department_name,location_id) values ($1,$2)',
        [department_name, location_id],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(200).json(result.rowCount)
        })
})

app.put('/api/department/:id', (req, res) => {
    const { id } = req.params
    const { department_name, location_id } = req.body
    pool.query("update departments set department_name=$1, location_id=$2 where department_id=$3",
        [department_name, location_id, id],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(200).json(result.rowCount)
        })
})

app.delete('/api/department/:id', (req, res) => {
    const { id } = req.params
    pool.query('delete from departments where department_id = $1',
        [id],
        (error, result) => {
            if (error) {
                throw error;
            }
            res.status(200).json(result.rowCount)
        })
})