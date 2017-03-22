using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace UKSF.Data.Migrations
{
    public partial class News : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PublishedDate",
                table: "News");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "News",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "Context",
                table: "News",
                newName: "Text");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "News",
                newName: "ID");

            migrationBuilder.RenameColumn(
                name: "Text",
                table: "News",
                newName: "Context");

            migrationBuilder.AddColumn<DateTime>(
                name: "PublishedDate",
                table: "News",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
