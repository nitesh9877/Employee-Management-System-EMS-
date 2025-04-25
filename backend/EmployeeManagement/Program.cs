using EmployeeManagement.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services
builder.Services.AddControllers();
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddCors();

var app = builder.Build();

// CORS policy
app.UseCors(options =>
    options.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());

app.MapControllers();

// Configure the HTTP request pipeline
app.Urls.Add("http://localhost:5000");

app.Run();
