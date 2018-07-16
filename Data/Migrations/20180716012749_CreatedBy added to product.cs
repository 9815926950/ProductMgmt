using Microsoft.EntityFrameworkCore.Migrations;

namespace ProductMgmt.Data.Migrations
{
    public partial class CreatedByaddedtoproduct : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CreatedBy",
                table: "Products",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedBy",
                table: "Products");
        }
    }
}
