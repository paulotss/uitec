<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::create([
            'name' => 'Produto 1',
            'category_id' => 1,
            'price' => 1.55,
            'expiration' => '2023-12-12 12:00:00',
            'amount' => 10,
            'perishable' => true
        ]);

        Product::create([
            'name' => 'Produto 2',
            'category_id' => 2,
            'price' => 7,
            'expiration' => null,
            'amount' => 2,
            'perishable' => false
        ]);

        Product::create([
            'name' => 'Produto 3',
            'category_id' => 3,
            'price' => 23.25,
            'expiration' => '2024-09-12 12:00:00',
            'amount' => 16,
            'perishable' => true
        ]);
    }
}
