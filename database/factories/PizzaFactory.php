<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Pizza;
use Faker\Generator as Faker;

$factory->define(Pizza::class, function (Faker $faker) {
    return [
        'name' => substr($faker->sentence(2), 0, -1),
        'desc' => $faker->sentence(50),
        'price' => random_int(500, 3000),
    ];
});