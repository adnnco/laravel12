<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tournament>
 */
class TournamentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->company,
            'slug' => $this->faker->slug,
            'icon' => 'https://placehold.co/96/'.ltrim($this->faker->hexColor, '#').'/png?text='.urlencode($this->faker->company),
            'description' => $this->faker->text,
            'start_date' => $this->faker->dateTime,
            'end_date' => $this->faker->dateTime,
        ];
    }
}
