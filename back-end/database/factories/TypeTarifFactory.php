<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TypeTarif>
 */
class TypeTarifFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $types = [
            'Tarif horaire',
            'Tarif forfaitaire',
            'Système de quotas à dépenser',
            'Système à abonnement ',
        ];
        return [
            'type' => fake()->randomElement($types)
        ];
    }
}
