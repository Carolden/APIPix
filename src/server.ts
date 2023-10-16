import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors';
// import usuariosRoutes from "./routes/usuarios";
// import categoriasRoutes from './routes/categorias';
// import beneficiariosRoutes from './routes/beneficiarios';
// import cdsRoutes from './routes/cds';
// import cidadesRoutes from './routes/cidades';
// import itensRoutes from './routes/itens';
// import movimentacoesRoutes from './routes/movimentacoes';

let server: Express = express();

server.use(cors());
server.use(express.json());

server.use((req: Request, res: Response, next: NextFunction) => {
  console.log('[' + (new Date()) + '] ' + req.method + ' ' + req.url);
  next();
});

// server.use(usuariosRoutes);
// server.use(categoriasRoutes);
// server.use(beneficiariosRoutes);
// server.use(cdsRoutes);
// server.use(cidadesRoutes);
// server.use(itensRoutes);
// server.use(movimentacoesRoutes);


export default {
  start () {
    server.listen(3000, () => {
      console.log('Server started on port 3000!');
    });
  }
};
