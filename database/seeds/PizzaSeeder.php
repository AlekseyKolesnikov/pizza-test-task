<?php

use App\Pizza;
use Illuminate\Database\Seeder;

class PizzaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 1; $i < 12; $i++) {
            factory(Pizza::class)->create([
                'img' => str_pad("$i", 2, "0", STR_PAD_LEFT) . ".jpg",
            ]);
        }
    }
}
