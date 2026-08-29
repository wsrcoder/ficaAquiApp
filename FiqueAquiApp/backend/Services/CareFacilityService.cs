using backend.DB;
using backend.Entities;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Services
{

    public interface ICareFacilityService
    {
        public Task<CareFacility> Create(CareFacility facility);
        public Task<CareFacility> GetById(int id);

        public Task<List<CareFacility>> GetAll();
        public Task Update(CareFacility updated, int id);

        public Task Delete(int id);
    }
    public class CareFacilityService : ICareFacilityService
    {

        private readonly DataContext _context;

        public CareFacilityService(DataContext context)
        {
            _context = context;
        }

        public async Task<CareFacility> Create(CareFacility facility)
        {

            CareFacility careFacilityDB = await _context.CareFacilities.SingleOrDefaultAsync(cf => cf.Name == facility.Name);

            if (careFacilityDB is not null)
            {
                throw new InvalidOperationException($"Já existe {careFacilityDB.Name} cadastrado.");
            }

            //Se não existir, determina a data de criação e adiciona ao banco

            facility.CreatedAt = DateTime.Now;
            facility.UpdatedAt = DateTime.Now;

            _context.CareFacilities.Add(facility); 

            await _context.SaveChangesAsync();

            return facility;

        }

        public Task<CareFacility> GetById(int id)
        {
            throw new System.NotImplementedException();
        }

        public Task<List<CareFacility>> GetAll()
        {
            throw new System.NotImplementedException();
        }

        public Task Update(CareFacility updated, int id)
        {
            throw new System.NotImplementedException();
        }

        public Task Delete(int id)
        {
            throw new System.NotImplementedException();
        }
    }
}
