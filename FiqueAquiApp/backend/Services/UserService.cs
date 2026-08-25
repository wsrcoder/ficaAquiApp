using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

using backend.DB;
using backend.Models;



namespace backend.Services
{
    public interface IUserService
    {
        public Task<User> Create(User user);
        public Task<User> GetById(int id);
        public Task<List<User>> GetAll();
        public Task Update(User userIn, int id);

        public Task Delete(int id);
    }
    public class UserService: IUserService
    {
        private readonly DataContext _context;

        public UserService(DataContext context)
        {
            _context = context;
        }
        public async Task<User> Create(User user)
        {
            // Verifica se já existe um usuário com o mesmo UserName
            User userDB = await _context.Users.SingleOrDefaultAsync(u => u.UserName == user.UserName);

            if (userDB != null)
            {
                throw new InvalidOperationException($"Já existe {userDB.UserName} cadastrado.");
            }

            // Se não existir, adiciona e salva no banco
            user.CreatedAt = DateTime.Now;
            user.UpdatedAt = DateTime.Now;

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return user;
        }

        public async Task<User> GetById(int id)
        {
            User userDB = await _context.Users.SingleOrDefaultAsync(u => u.Id == id);

            if (userDB == null) {
                throw new Exception($"User {id} not found.");
            }

            return userDB;
                
                
        }

        public async Task<List<User>> GetAll()
        {

            return await _context.Users.ToListAsync();
        }

        public async Task Update(User userIn, int id)
        {

            User userDB = await _context.Users.AsNoTracking().SingleOrDefaultAsync(u => u.Id == id);

            if(userDB is null)
            {
                throw new Exception($"User {id} not found");
            }

            _context.Entry(userIn).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task Delete(int id)
        {
            User userDB = await _context.Users.SingleOrDefaultAsync(u => u.Id == id);

            if(userDB is null)
            {
                throw new InvalidOperationException($"User {id} not found.");
            }

            _context.Users.Remove(userDB);
            await _context.SaveChangesAsync();
            
        }
    }
}
   
