namespace EmployeeManagement.Models;

public class Employee
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public string Email { get; set; } = "";
    public string Mobile { get; set; } = "";
    public int Age { get; set; }
    public string Gender { get; set; } = "";
    public string Department { get; set; } = "";
    public bool IsActive { get; set; }
    public DateTime JoiningDate { get; set; }
    public string Address { get; set; } = "";
}
