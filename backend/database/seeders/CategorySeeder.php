<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::create([
            "name" => "Categoria 1"
        ]);
        
        Category::create([
            "name" => "Categoria 2"
        ]);

        Category::create([
            "name" => "Categoria 3"
        ]);

        Category::create([
            "name" => "Categoria 4"
        ]);

        Category::create([
            "name" => "Categoria 5"
        ]);
    }
}
