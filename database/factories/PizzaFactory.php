<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Pizza;
use Faker\Generator as Faker;

$factory->define(Pizza::class, function (Faker $faker) {
    return [
        'name' => substr($faker->sentence(2, true), 0, -1),
        'desc' => $faker->sentence(50, true),
        'price' => random_int(500, 3000),
    ];
});