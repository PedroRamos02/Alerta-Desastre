using Alerta_Desastre.model;

namespace Alerta_Desastre.infraestrutura;

public class UserRepository : IUserRepository
{
    private readonly ConnectionContext _context = new ConnectionContext();

    public void AddUser(User user)
    {
        _context.Users.Add(user);
        _context.SaveChanges();
    }

    public List<User> GetUsers()
    {
        return _context.Users.ToList();
    }
}