using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Extenstions
{
    public static class ProductExtenstion
    {
        public static IQueryable<Product> Sort(this IQueryable<Product> query, string orderBy)
        {
            if (string.IsNullOrEmpty(orderBy)) return query.OrderBy(c => c.Name);

            query = orderBy switch
            {
                "price" => query.OrderBy(c => c.Price),
                "priceDesc" => query.OrderByDescending(c => c.Price),
                _ => query.OrderBy(c => c.Name),
            };

            return query;
        }

        public static IQueryable<Product> Search(this IQueryable<Product> query, string searchTerm)
        {
            if (string.IsNullOrEmpty(searchTerm)) return query;
            //ToLower() ทำให้เป็นตัวเล็ก
            var lowerCaseSearchTerm = searchTerm.Trim().ToLower();
            return query.Where(p => p.Name.ToLower().Contains(lowerCaseSearchTerm));
        }

        public static IQueryable<Product> Filter(this IQueryable<Product> query, string brands,string types)
        {
            var brandList = new List<string>();
            var typeList = new List<string>();

            //Split(",") ตัดเครื่องหมาย
            if (!string.IsNullOrEmpty(brands))
                brandList.AddRange(brands.ToLower().Split(",").ToList());
            if (!string.IsNullOrEmpty(types))
                typeList.AddRange(types.ToLower().Split(",").ToList());

            //กระบวนการวนลูปอยู่ภายใน
            query = query.Where(p => brandList.Count == 0 || brandList.Contains(p.Brand.ToLower()));
            query = query.Where(p => typeList.Count == 0 || typeList.Contains(p.Type.ToLower()));
            //brandList.Contains(p.Brand.ToLower()) ค้น brand ที่มีอยู่ภายใน brandList

            return query;
        }
    }
}