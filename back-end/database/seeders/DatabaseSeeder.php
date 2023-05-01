<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use App\Models\Parking;
use App\Models\TarifParking;
use App\Models\Stationnements;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        
        Parking::factory(10)->create()
            ->each(function($parking) {
                TarifParking::create([
                    'prix' => fake()->randomNumber(3),
                    'park' => $parking->id,
            ]);
        });

        
        // User::factory(10)->create()
        //     ->each(function($parking, $user, $typeTarif) {
        //         Stationnements::create([
        //             'dateStat' => fake()->randomNumber(3),
        //             'nbrUnit' => fake()->random_int(10, 30),
        //             'user' => $user->id,
        //             'parking' => $parking->id,
        //             'typeTarif' => $typeTarif->id,
        //     ]);
        // });

        
        \App\Models\TypeTarif::factory(4)->create();
        \App\Models\User::factory(20)->create();
        // \App\Models\Parking::factory(10)->create();
        // \App\Models\TarifParking::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
