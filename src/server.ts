import express, { Request, Response } from "express"
import { knex } from "./database/knex"

const app = express()
app.use(express.json())

// Rota para testar se o servidor está rodando
app.post("/courses", async (request: Request, response: Response) => {
  const { name } = request.body

  await knex('courses').insert({ name })
 // await knex.raw("INSERT INTO courses (name) VALUES (?)", [name])

  return response.status(201).json(name)
})

// Listar cursos com select * from courses 
app.get("/courses", async (request: Request, response: Response) => {
  const courses = await knex('courses').select('*').orderBy("name")
  return response.status(200).json(courses)
})

// Atualizar curso com update courses set name = ? where id = ?
app.put("/courses/:id", async (request: Request, response: Response) => {
  const { name } = request.body

  // o id vem da url e o name vem do body, então usamos request.params.id para pegar o id e request.body.name para pegar o nome
  await knex('courses').update({ name }).where({ id: request.params.id })
  
  return response.status(200).json(name)
})

// Deletar curso com delete from courses where id = ?
app.delete("/courses/:id", async (request: Request, response: Response) => {
  await knex('courses').delete().where({ id: request.params.id })
  return response.status(200).json({ message: "Course deleted successfully!" })
})

// Criar módulo de curso com insert into course_modules (name, course_id)
app.post("/modules", async (request: Request, response: Response) => {
  //pegando o name e o course_id do body e inserindo na tabela course_modules
  const { name, course_id } = request.body

  //select * from courses where id = ?
  const course = await knex('courses').select('*').where({ id: course_id })
  await knex('course_modules').insert({ name, course_id })

  return response.status(201).json()
})

app.get("/modules", async (request: Request, response: Response) => {
  //select * from course_modules join courses on courses.id = course_modules.course_id
  const modules = await knex('course_modules').select('*')
  return response.status(200).json(modules)
})


app.listen(3333, () => console.log(`Server is running on port 3333`))
