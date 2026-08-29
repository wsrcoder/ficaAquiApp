namespace backend.Entities
{
    public class CareFacility
    {
        public int CareFacilityId { get; set; }

        public int CareType { get; set; }

        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;

        public string Street { get; set; } = string.Empty;
        public int Number { get; set; }

        public string Neighbornhood { get; set; } = string.Empty;

        public string City { get; set; } = string.Empty;

        public string State { get; set; } = string.Empty;

        public string ZipCode { get; set; } = string.Empty;

        public string Phone { get; set; } = string.Empty;

        public string Email { get; set; } = string.Empty;

        public string Website { get; set; } = string.Empty;

        public int Capacity { get; set; } = 0;

        public int AvailableBeds { get; set; }

        public DateTime CreatedAt { get; set; }

        public DateTime UpdatedAt { get; set; }




    }
}
