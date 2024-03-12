import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
})

const PORT = 5005 

fastify.get('/', (req, res) => {
    res.send('Servido rodando')
})

fastify.listen({ port:PORT }, (err, address) => {
    if (err){
      console.error('Erro ao subir servidor', err);
      return 
    }
    console.log(`Server is now listening on ${address}`);
  })