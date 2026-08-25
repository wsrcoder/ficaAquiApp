using backend.Entities;
using backend.Enums;

namespace backend.Models
{
    public class User: BaseEntity
    {
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set;  } = string.Empty;

        public int Age { get; set; }

        public TypeUser Type { get; set; }

        public string UserName { get; set; } = string.Empty;

        public string UserPassword { get; set; } = string.Empty; 
    }
}
