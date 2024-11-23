const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Inserir Empresas
  const companies = await prisma.company.createMany({
    data: [
      { name: 'Empresa A', email: 'contato@empresaa.com', phone: '111-222-3333', createdAt: new Date() },
      { name: 'Empresa B', email: 'contato@empresab.com', phone: '222-333-4444', createdAt: new Date() },
      { name: 'Empresa C', email: 'contato@empresac.com', phone: '333-444-5555', createdAt: new Date() },
    ],
  });

  console.log(`${companies.count} empresas criadas.`);

  // Inserir Serviços
  const services = await prisma.service.createMany({
    data: [
      { title: 'Corte de cabelo', description: 'Corte profissional de cabelo', price: 50.0, companyId: 1, createdAt: new Date() },
      { title: 'Manicure', description: 'Manicure profissional', price: 30.0, companyId: 1, createdAt: new Date() },
      { title: 'Consulta nutricional', description: 'Consulta com nutricionista', price: 200.0, companyId: 2, createdAt: new Date() },
      { title: 'Personal Trainer', description: 'Treinamento personalizado', price: 150.0, companyId: 3, createdAt: new Date() },
      { title: 'Aulas de yoga', description: 'Aulas relaxantes de yoga', price: 100.0, companyId: 3, createdAt: new Date() },
    ],
  });

  console.log(`${services.count} serviços criados.`);

  // Inserir Usuários
  const users = await prisma.user.createMany({
    data: [
      { name: 'João Silva', email: 'joao@example.com', password: 'senha123', createdAt: new Date() },
      { name: 'Maria Oliveira', email: 'maria@example.com', password: 'senha456', createdAt: new Date() },
      { name: 'Pedro Santos', email: 'pedro@example.com', password: 'senha789', createdAt: new Date() },
      { name: 'Ana Paula', email: 'ana@example.com', password: 'senha101', createdAt: new Date() },
    ],
  });

  console.log(`${users.count} usuários criados.`);

  // Inserir Agendamentos
  const appointments = await prisma.appointment.createMany({
    data: [
      { date: new Date('2024-11-20T10:00:00Z'), status: 'CONFIRMED', userId: 1, serviceId: 1, createdAt: new Date() },
      { date: new Date('2024-11-21T14:00:00Z'), status: 'PENDING', userId: 2, serviceId: 2, createdAt: new Date() },
      { date: new Date('2024-11-22T09:00:00Z'), status: 'CANCELLED', userId: 3, serviceId: 3, createdAt: new Date() },
      { date: new Date('2024-11-23T18:00:00Z'), status: 'CONFIRMED', userId: 4, serviceId: 4, createdAt: new Date() },
      { date: new Date('2024-11-24T08:30:00Z'), status: 'PENDING', userId: 1, serviceId: 5, createdAt: new Date() },
    ],
  });

  console.log(`${appointments.count} agendamentos criados.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
