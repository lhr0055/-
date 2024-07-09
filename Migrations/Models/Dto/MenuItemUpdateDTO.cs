﻿using System.ComponentModel.DataAnnotations;

namespace RedMango_API.Migrations.Models.Dto
{
    public class MenuItemUpdateDTO
    {
        [Key]
        public int Id { get; set; }
        [Required] //필수사항
        public string Name { get; set; }
        public string Description { get; set; }
        public string SpecialTag { get; set; }
        public string Category { get; set; }
        [Range(1, int.MaxValue)] // 시작, 끝
        public double Price { get; set; }
        public IFormFile File{get; set;} 
    }
}
