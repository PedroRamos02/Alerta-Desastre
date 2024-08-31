using Alerta_Desastre.model;
using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure; // Importação correta do namespace

namespace Alerta_Desastre.infraestrutura
{
    public class ConnectionContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Region> Regions { get; set; }
        

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = "server=localhost;database=AlertaDesastreDB;user=root;password=senha123";

            optionsBuilder.UseMySql(connectionString, 
                new MySqlServerVersion(new Version(8, 0, 34)), // Certifique-se de substituir pela versão do MySQL que você está usando
                options => options.EnableRetryOnFailure() // Aqui você pode adicionar outras configurações, se necessário
            );
        }
    }
}